import { useSession } from 'next-auth/react'
import useSWR from 'swr'

import { IProduct } from '@/lib'

const fetcher = async ([url, token]: [string, string]): Promise<IProduct[]> => {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  })
  const data = await res.json()

  if (res.status !== 200) {
    const err = new Error(data.message, { cause: { status: res.status } })
    throw err
  }

  return data.data
}

export const useProductByUser = (): {
  products: IProduct[]
  isLoading: boolean
  error: { message: string; cause: { status: number } }
  mutate: () => void
} => {
  const { data: session } = useSession()

  const { data, error, isLoading, mutate } = useSWR(session ? ['/api/v1/product/me', session.token] : null, fetcher)

  return {
    products: data || [],
    isLoading,
    error,
    mutate,
  }
}
