import * as z from 'zod'

import { toast } from '@/components/ui/use-toast'
import { deleteImage, uploadImage } from '@/lib/firebase'
import { Category, Tag } from '@/types/enum'
import { zodResolver } from '@hookform/resolvers/zod'

const createSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(4).max(1000),
  image: z.instanceof(File).nullable(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export type ICreate = z.infer<typeof createSchema>

export const resolver = zodResolver(createSchema)

export const defaultValues: ICreate = {
  name: '',
  description: '',
  image: null,
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}

export const create = async (data: ICreate) => {
  if (data.image === null)
    return toast({ description: 'Please upload an image', variant: 'destructive' })

  const url = await uploadImage(data.image, data.name)
  try {
    const res = await fetch('/api/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, image: url }),
    })
    if (!res.ok) throw new Error((await res.json()).message)
    toast({ description: 'Product created successfully' })
  } catch (e: any) {
    await deleteImage(data.name)
    toast({ description: e.message, variant: 'destructive' })
    throw new Error(e.message)
  }
}
