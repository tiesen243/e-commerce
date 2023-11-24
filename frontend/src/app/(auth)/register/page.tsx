import { NextPage } from 'next'
import { Suspense } from 'react'

import { LoadingSpinner } from '@/components/ui'
import Footer from '../Footer'
import Header from '../Header'
import RegisterForm from './RegisterForm'

const Page: NextPage = () => (
  <>
    <Header title="Register" />

    <Suspense fallback={<LoadingSpinner />}>
      <RegisterForm />
    </Suspense>

    <Footer text="Already have an account? " href="/login" hrefText="Login" />
  </>
)

export default Page
