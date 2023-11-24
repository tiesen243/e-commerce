'use client'

import { Category } from '@/types/product'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { createFormSchema } from '.'

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
