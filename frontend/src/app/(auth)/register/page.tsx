import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const RegisterForm = dynamic(() => import('./RegisterForm'))
const Header = dynamic(() => import('../Header'))
const Footer = dynamic(() => import('../Footer'))

const Page: NextPage = () => (
  <>
    <Header title="Register" />

    <RegisterForm />

    <Footer text="Already have an account? " href="/login" hrefText="Login" />
  </>
)

export default Page
