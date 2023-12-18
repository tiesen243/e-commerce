'use client'
import { toast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CheckProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { data } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (data?.user) {
      push('/')
      toast({
        title: 'You are already logged in',
        description: 'You will be redirected to the home page.',
      })
    }
  }, [data, push])

  return <>{children}</>
}

export default CheckProvider
