import { NextPage } from 'next'

import Footer from '../Footer'
import Header from '../Header'
import RegisterForm from './RegisterForm'

const Page: NextPage = () => (
  <>
    <Header title="Register" />

    <RegisterForm />

    <Footer text="Already have an account? " href="/login" hrefText="Login" />
  </>
)

export default Page
