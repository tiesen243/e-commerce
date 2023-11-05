import { IProduct } from '@/lib'
import axios from 'axios'
import { useSession } from 'next-auth/react'

const fetcher = async ([url, token]: string[]): Promise<IProduct[]> => {
  try {
    const data = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.data
  } catch (err: any) {
    throw new Error(err.response.data.message, {
      cause: err.response.status,
    })
  }
}

const ManageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  /*  const { data: session, update } = useSession()
  const token = session?.token || ''
  if (!token) return null
 */
  /* return <ManageContext.Provider value={value}>{children}</ManageContext.Provider>  */

  /* const { data: products, error, isLoading, mutate } = useSWR(['/api/v1/product/me', token], fetcher) */

  /* const value = { products, error, isLoading, mutate, update, token } */

  fetch('/api/v1/product/me', {})

  return <div></div>
}

export default ManageLayout
