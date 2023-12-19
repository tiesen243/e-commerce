'use client'

import { toast } from '@/components/ui/use-toast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const CheckAuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'authenticated') {
    push('/')
    toast({
      title: 'You are already logged in',
      description: 'You will be redirected to home page',
    })
  }

  return <>{children}</>
}

export default CheckAuthProvider
