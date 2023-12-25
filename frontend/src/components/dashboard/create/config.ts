import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { mutate } from 'swr'

import { toast } from '@/components/ui/use-toast'
import { deleteImage, uploadImage } from '@/lib/firebase'

const createSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().min(4).max(1000),
  image: z.instanceof(File).nullable(),
  price: z.coerce.number(),
  stock: z.coerce.number(),
  category: z.string(),
  tags: z.array(z.string()),
})

export type ICreate = z.infer<typeof createSchema>

export const resolver = zodResolver(createSchema)

export const defaultValues: ICreate = {
  name: '',
  description: '',
  image: null,
  price: 0,
  stock: 0,
  category: '',
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
    mutate((key) => typeof key === 'string' && key.startsWith('products'))
    toast({ description: 'Product created successfully' })
  } catch (e: any) {
    await deleteImage(data.name)
    toast({ description: e.message, variant: 'destructive' })
    throw new Error(e.message)
  }
}
