import { Category, Tag } from '@/types/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const createFormSchema = z.object({
  name: z.string().min(4).max(255),
  image: z.instanceof(File).nullable(),
  description: z.string().min(4).max(255),
  price: z.string().transform((val) => Number(val)),
  stock: z.string().transform((val) => Number(val)),
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export const resolver = zodResolver(createFormSchema)

export type CreateFormValues = z.infer<typeof createFormSchema>
export const defaultValues: CreateFormValues = {
  name: '',
  image: null,
  description: '',
  price: 0,
  stock: 0,
  category: Category.Other,
  tags: [],
}
