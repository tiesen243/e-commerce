'use client'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Header from '@/components/auth/header'
const RegisterForm = dynamic(() => import('@/components/auth/registerForm'), { ssr: false })

const Page: NextPage = () => (
  <>
    <Header title="Register" description="Register for an account" />
    <RegisterForm />
  </>
)

export default Page
