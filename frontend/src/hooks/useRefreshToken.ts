import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

const useRefreshToken = () => {
  const { data, update } = useSession()

  useEffect(() => {
    // Update session every 10 minutes
    const interval = setInterval(() => update({}), 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [update])

  const user = data?.user
  return user
}

export default useRefreshToken
