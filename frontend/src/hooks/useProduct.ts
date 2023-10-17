import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useProduct = (id: string) => {
  const { data, error } = useSWR(`/api/product/${id}`, fetcher)

  return {
    product: data,
    isLoading: !error && !data,
    isError: error,
  }
}
