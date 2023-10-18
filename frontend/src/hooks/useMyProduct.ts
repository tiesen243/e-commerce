import { getCookie } from 'cookies-next'
import useSWR from 'swr'

const fetcher = async (url: string, token: string) => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).catch((err) => err.response)
  const data = await res.json()
  if (data.statusCode !== 200) throw new Error(data.message)
  return data
}

export const useMyProduct = () => {
  const token: string = getCookie('token') || ''
  const { data, isLoading, error } = useSWR('/api/product/my-products', (url: string) => fetcher(url, token), {
    refreshInterval: 1000,
  })

  return {
    data,
    isLoading,
    error,
  }
}
