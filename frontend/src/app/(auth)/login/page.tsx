import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Enter your credentials to login.',
  openGraph: {
    title: 'Login',
    description: 'Enter your credentials to login.',
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/login`,
  },
  twitter: {
    title: 'Login',
    description: 'Enter your credentials to login.',
  },
}

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CheckAuthProvider from '@/provider/checkauth.provider'
import LoginForm from './_login-form'

const Page: NextPage = () => (
  <CheckAuthProvider>
    <Card className="mx-4 w-full max-w-screen-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to login.</CardDescription>
      </CardHeader>

      <LoginForm />
    </Card>
  </CheckAuthProvider>
)

export default Page
