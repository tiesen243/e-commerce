import { NextPage } from 'next'
import { Suspense } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import LogInForm from './LoginForm'
import { LoadingSpinner } from '@/components/ui'

const Page: NextPage = () => (
  <>
    <Header title="Login" />

    <Suspense fallback={<LoadingSpinner />}>
      <LogInForm />
    </Suspense>

    <Footer text="Dont have account? " href="/register" hrefText="Register" />
  </>
)

export default Page
