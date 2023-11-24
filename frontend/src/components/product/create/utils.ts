import { Category, Tag } from '@/types/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const imageRegex = z
  .instanceof(File as any)
  .refine((val) => val.name, { message: 'Please upload a valid image' })
  .refine((val) => val.type.startsWith('image'), { message: 'Please upload an image' })
  .refine((val) => val.size < 1024 * 1024 * 5, { message: 'Image must be less than 5MB' })
  .nullable()

export const createFormSchema = z.object({
  name: z.string().min(4).max(255),
  description: z.string().min(4).max(255),
  image: imageRegex,
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
