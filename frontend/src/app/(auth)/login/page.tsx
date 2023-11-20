import { NextPage } from 'next'

import Footer from '../Footer'
import Header from '../Header'
import LogInForm from './LoginForm'

const Page: NextPage = () => (
  <>
    <Header title="Login" />

    <LogInForm />

    <Footer text="Dont have account? " href="/register" hrefText="Register" />
  </>
)

export default Page
