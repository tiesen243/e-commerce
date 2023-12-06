import Header from '@/components/auth/header'
import LoginForm from '@/components/auth/loginForm'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <>
    <Header title="Login" description="Enter your credentials" />
    <LoginForm />
  </>
)

export default Page
