'use client'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

import { ManageContext } from '@/contexts'
import { fetcher } from './utils'

const ManageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data: session, update } = useSession()
  const token = session?.token || ''
  if (!token) return null

  const { data: products, error, isLoading, mutate } = useSWR(['/product/me', token], fetcher)
  if (error?.cause === 401) update({})

  const value = { products, error, isLoading, mutate, update, token }
  return <ManageContext.Provider value={value}>{children}</ManageContext.Provider>
}

export default ManageLayout
