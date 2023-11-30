import { Category, Tag } from '@/types/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const updateFormSchema = z.object({
  image: z
    .instanceof(File)
    .nullable()
    .refine((val) => val !== null, {
      message: 'Please upload an image',
    }),
  description: z.string().min(4).max(1000),
  price: z.string().transform((val) => Number(val)),
  stock: z.string().transform((val) => Number(val)),
  saleOffPercent: z.string().transform((val) => Number(val)),
  available: z.boolean().default(false).optional(),
  category: z.nativeEnum(Category),
  tags: z.array(z.nativeEnum(Tag)),
})

export const resolver = zodResolver(updateFormSchema)

export type UpdateFormValues = z.infer<typeof updateFormSchema>
export const defaultValues: UpdateFormValues = {
  image: null,
  description: '',
  price: 0,
  stock: 0,
  saleOffPercent: 0,
  available: true,
  category: Category.Other,
  tags: [],
}
