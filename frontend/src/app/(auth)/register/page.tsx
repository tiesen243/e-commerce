'use client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Footer from '@/components/auth/Footer'
import Header from '@/components/auth/Header'
const RegisterForm = dynamic(() => import('@/components/auth/register/RegisterForm'), {
  ssr: false,
})

const Page: NextPage = () => (
  <>
    <Header title="Register" />

    <RegisterForm />

    <Footer text="Already have an account? " href="/login" hrefText="Login" />
  </>
)

export default Page
