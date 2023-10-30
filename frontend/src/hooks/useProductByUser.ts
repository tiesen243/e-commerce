import { Product } from '@/types/product.type'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url: string, token: string): Promise<Product[]> => {
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())

  if (data.statusCode !== 200) throw new Error(data.message)
  return data.data
}

interface UseProductByUser {
  products: Product[]
  isLoading: boolean
  error: any
}

const useProductByUser = (): UseProductByUser => {
  const { token } = useSession().data || {}
  if (!token) return { products: [], isLoading: false, error: null }

  const { data, error, isLoading } = useSWR(
    token ? ['/api/v1/product/me', token] : null,
    ([url, token]) => fetcher(url, token),
    { refreshInterval: 1000 },
  )

  if (!data) return { products: [], isLoading: true, error: error }
  return {
    products: data,
    isLoading,
    error,
  }
}

export default useProductByUser
