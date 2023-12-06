import Header from '@/components/auth/header'
import RegisterForm from '@/components/auth/registerForm'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <>
    <Header title="Register" description="Register for an account" />
    <RegisterForm />
  </>
)

export default Page
