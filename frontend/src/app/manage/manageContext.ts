import { IProduct } from '@/lib'
import { createContext } from 'react'

export interface IManageContext {
  products: IProduct[]
  error: { message: string; cause: { status: number } }
  isLoading: boolean
  mutate: () => void
  token: string
}
export const ManageContext = createContext<IManageContext>({
  products: [],
  error: { message: '', cause: { status: 200 } },
  isLoading: true,
  mutate: () => {},
  token: '',
})
