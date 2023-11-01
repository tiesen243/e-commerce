import useSWR from 'swr'
import { IProduct } from '@/lib'

const fetcher = async (url: string): Promise<IProduct> => {
  const res = await fetch(url)
  if (res.status !== 200) throw new Error('Failed to fetch product')
  const { data } = await res.json()
  return data
}

interface Response {
  product: IProduct
  error: any
  isLoading: boolean
}

export const useProductById = (id: string): Response => {
  const { data, error, isLoading } = useSWR(`/api/v1/product/${id}`, fetcher)

  return {
    product: data as IProduct,
    error,
    isLoading,
  }
}
