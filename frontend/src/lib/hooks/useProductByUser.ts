import { useSession } from 'next-auth/react'
import useSWR from 'swr'

import { IProduct, showErrorToast } from '@/lib'

const fetcher = async (url: string, token: string) => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await res.json()
  if (res.status !== 200) {
    showErrorToast(data.message)
    throw new Error(data.message)
  }

  return data.data
}

export const useProductByUser = (): {
  products: IProduct[]
  isLoading: boolean
  error: any
} => {
  const { data: session } = useSession()

  const { data, error, isLoading } = useSWR(
    session ? ['/api/v1/product/me', session.token] : null,
    ([url, token]) => fetcher(url, token),
    { refreshInterval: 2000 },
  )
  console.log(error)

  return {
    products: data,
    isLoading,
    error,
  }
}
