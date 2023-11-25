'use client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Footer from '@/components/auth/Footer'
import Header from '@/components/auth/Header'
const LoginForm = dynamic(() => import('@/components/auth/login/LoginForm'), {
  ssr: false,
})

const Page: NextPage = () => (
  <>
    <Header title="Login" />

    <LoginForm />

    <Footer text="Dont have account? " href="/register" hrefText="Register" />
  </>
)

export default Page
