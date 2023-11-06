'use client'

import { IProduct } from '@/lib'
import { createContext } from 'react'

interface IManageContext {
  products: IProduct[] | undefined
  error: { message: string; cause: { status: number } }
  isLoading: boolean
  mutate: () => void
  update: any
  token: string
}
export const ManageContext = createContext<IManageContext>({
  products: [],
  error: { message: '', cause: { status: 200 } },
  isLoading: true,
  mutate: () => {},
  update: () => {},
  token: '',
})
