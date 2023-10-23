import Product from '@/types/product.type'
import useSWR from 'swr'

const fetcher = async (url: string): Promise<Product[]> => {
  const res = await fetch(url)
  if (res.status !== 200) throw new Error('Failed to fetch')
  const { data } = await res.json()
  return data
}

const useProduct = (): {
  products: Product[]
  isLoading: boolean
  error: Error
} => {
  const { data, error, isLoading } = useSWR(`/api/v1/product`, fetcher, { refreshInterval: 1000 })

  data?.sort((a: Product, b: Product) => (a.createdAt < b.createdAt ? 1 : -1))

  return {
    products: data || [],
    isLoading,
    error,
  }
}

export default useProduct
