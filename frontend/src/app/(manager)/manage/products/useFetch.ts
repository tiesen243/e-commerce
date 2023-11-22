import useSWR, { type Fetcher } from 'swr'
const fetcher: Fetcher = async (url: string) => {
  const res = await fetch(url)
  const json = await res.json()
  if (json.error) throw new Error(json.error)
  return json
}

const useFetch = () => {
  const { data, error, isLoading } = useSWR('/api/product/me', fetcher)

  return {
    data,
    error: error?.message,
    isLoading,
  }
}

export default useFetch
