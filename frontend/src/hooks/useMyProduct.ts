import Product from '@/types/product.type'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url: string, token: string | undefined) => {
  if (!token) return
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => err.response)
  if (res.status !== 200) throw new Error((await res.json()).message)
  const { data } = await res.json()
  return data
}

export const useMyProduct = (): {
  products: Product[]
  isLoading: boolean
  error: Error
} => {
  const { data: session } = useSession()

  const { data, isLoading, error } = useSWR('/api/v1/product/me', (url: string) => fetcher(url, session?.token), {
    refreshInterval: 500,
  })

  return {
    products: data,
    isLoading,
    error,
  }
}
