'use client'

import { showErrorToast } from '@/lib'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url: string, token: string) => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  if (res.status !== 200) {
    showErrorToast(await res.json().then((res) => res.message))
    throw new Error(await res.json().then((res) => res.message))
  }
  const data = await res.json()
  return data.data
}

export const useProductByUser = () => {
  const { data: session } = useSession()

  const { data, error, isLoading } = useSWR(session ? ['/api/v1/product/me', session.token] : null, ([url, token]) =>
    fetcher(url, token),
  )

  return {
    products: data,
    isLoading: error || isLoading || !data,
  }
}
