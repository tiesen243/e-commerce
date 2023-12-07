'use client'
import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { toast } from '@/components/ui/use-toast'

const LoginForm = dynamic(() => import('@/components/auth/loginForm'))
const RegisterForm = dynamic(() => import('@/components/auth/registerForm'))

const Page: NextPage = () => {
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

  return (
    <Tabs defaultValue="login" className="container fixed h-[600px] w-screen max-w-screen-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <LoginForm />
      </TabsContent>

      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}

export default Page
