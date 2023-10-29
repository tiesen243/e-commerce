import { useSession } from 'next-auth/react'
import useSWR from 'swr'

const fetcher = async (url: string, token: string) => {
  console.log(url, token)
  const data = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      /* Authorization: `Bearer ${token}`, */
    },
  }).then((res) => res.json())

  if (data.statusCode !== 200) throw new Error(data.message)
  return data.data
}

const useProductByUser = () => {
  const { token } = useSession().data || {}
  const { data, error, isLoading } = useSWR(['/api/v1/product/me', token], ([url, token]) => fetcher(url, token))

  console.log(error.message)

  return {
    products: data,
    isLoading,
    error,
  }
}

export default useProductByUser
