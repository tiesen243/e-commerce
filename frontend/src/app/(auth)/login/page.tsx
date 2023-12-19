import type { NextPage } from 'next'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import CheckAuthProvider from '@/provider/checkauth.provider'
import LoginForm from './loginForm'

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
