import { type ClassValue, clsx } from 'clsx'
import { getToken } from 'next-auth/jwt'
import { NextRequest } from 'next/server'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (date: Date) => {
  return new Date(date).toLocaleString('vi-VN', { timeZone: 'UTC' })
}

export const getUserToken = async (req: NextRequest) => {
  const { token } = (await getToken({ req, secret: process.env.NEXTAUTH_SECRET })) as {
    token: string
  }
  return token
}
