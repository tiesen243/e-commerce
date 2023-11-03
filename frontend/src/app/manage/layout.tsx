'use client'

import { useSession } from 'next-auth/react'

import { useProductByUser } from '@/lib'
import { ManageContext } from './manageContext'

const ManageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { products, error, isLoading, mutate } = useProductByUser()
  const { token } = useSession().data || { token: '' }
  const value = { products, error, isLoading, mutate, token }
  return <ManageContext.Provider value={value}>{children}</ManageContext.Provider>
}

export default ManageLayout
