import type { Metadata, NextPage } from 'next'

/* export const metadata: Metadata = { */
/*   title: 'Login', */
/*   description: 'Enter your credentials to login.', */
/*   openGraph: { */
/*     title: 'Login', */
/*     description: 'Enter your credentials to login.', */
/*     url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/login`, */
/*   }, */
/*   twitter: { */
/*     title: 'Login', */
/*     description: 'Enter your credentials to login.', */
/*   }, */
/* } */

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import CheckAuthProvider from '@/provider/checkauth.provider'
import { signIn } from '@/lib/auth'

const Page: NextPage = () => {
  const handleLogin = async (formData: FormData) => {
    'use server'
    await signIn('github')
  }
  return (
    <CheckAuthProvider>
      <Card className="mx-4 w-full max-w-screen-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login.</CardDescription>
        </CardHeader>

        <form action={handleLogin}>
          <CardContent className="space-y-4">
            <section>
              <Input type="text" name="Email address" placeholder="email" required />
            </section>

            <section>
              <Input type="password" name="password" placeholder="Password" required />
            </section>
          </CardContent>

          <CardFooter className="grid grid-cols-2 gap-4">
            <Button type="button" variant="outline">
              <a
                href="https://account.tiesen.id.vn/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Create new account
              </a>
            </Button>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </CheckAuthProvider>
  )
}
export default Page
