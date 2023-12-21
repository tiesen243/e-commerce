import { IProduct } from '@/types/product'
import { clsx, type ClassValue } from 'clsx'
import slugify from 'slugify'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('vi-VN', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
}

export const makeSlug = (product: IProduct): string => {
  const slug = slugify(product.name, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: true,
    locale: 'vi',
  })
  return `${slug}-${product._id}`
}

export const getIdFromSlug = (slug: string): string => slug.split('-').pop() || ''
