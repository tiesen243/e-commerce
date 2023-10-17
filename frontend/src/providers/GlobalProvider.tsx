'use client'

import useUser from '@/hooks/useUser'
import { NextPage } from 'next'

const GlobalProvider: NextPage<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useUser()

  return !isLoading ? <main>{children}</main> : <div>Loading...</div>
}

export default GlobalProvider
