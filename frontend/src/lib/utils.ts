import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (date: Date) => {
  return new Date(date).toLocaleString('vi-VN', { timeZone: 'UTC' })
}
