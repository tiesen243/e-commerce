import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } })
  const data = await res.json()
  if (data.statusCode !== 200) throw new Error(data.message)
  return data
}

const useProduct = (id: string) => {
  const { data, error, isLoading } = useSWR(`/api/product/${id}`, fetcher)

  return {
    product: data?.product,
    isLoading,
    error,
  }
}

export default useProduct
