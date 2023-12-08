import { Fields, FieldsProps } from '@/components/comp/fields'
import { toast } from '@/components/ui/use-toast'
import { Category, Tag } from '@/interfaces/product.interface'
import { deleteImage, uploadImage } from '@/lib/firebase'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import * as z from 'zod'

const isNuber = z
  .string()
  .refine((val) => !isNaN(Number(val)))
  .transform((val) => Number(val))

const isFile = z.instanceof(File).nullable()

export const createSchema = z.object({
  name: z.string().min(4).max(50),
  description: z.string().min(4).max(500),
  image: isFile,
  price: isNuber,
  stock: isNuber,
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export type ICreate = z.infer<typeof createSchema>

export const resolver = zodResolver(createSchema)

export const defaultValues = {
  name: '',
  description: '',
  image: null,
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}

export const CreateFields = Fields as React.FC<FieldsProps<ICreate>>

export const create = async (data: ICreate) => {
  if (!data.image) return toast({ description: 'Image is required', variant: 'destructive' })
  const name = data.name.replace(/\s/g, '-')
  try {
    const url: string = await uploadImage(data.image, name, 'product')
    await axios.post('/api/product/create', { ...data, image: url })
    toast({ description: 'Product created', variant: 'success' })
  } catch (e: any) {
    const message: string = e.response.data.message
    if (!message.includes('existed')) await deleteImage(name, 'product')

    toast({ description: message, variant: 'destructive' })
  }
}
