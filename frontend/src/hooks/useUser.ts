import { getCookie } from 'cookies-next'
import { useDispatch } from 'react-redux'
import useSWR from 'swr'

import { login } from '@/redux/slicers/user.slice'

const Fetcher = async (url: string, token: string) => {
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

const useUser = () => {
  const dispatch = useDispatch()
  const token = getCookie('token') as string

  const { data, isLoading } = useSWR('/api/user', (url) => Fetcher(url, token))
  if (data?.data) dispatch(login(data.data))

  return { isLoading }
}

export default useUser
