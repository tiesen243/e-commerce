'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Header from '@/components/auth/header'
const LoginForm = dynamic(() => import('@/components/auth/loginForm'), { ssr: false })

const Page: NextPage = () => (
  <>
    <Header title="Login" description="Enter your credentials" />
    <LoginForm />
  </>
)

export default Page
