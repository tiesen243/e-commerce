'use client'

import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'

import FormFooter from '@/components/comp/form-footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ILogin, LoginFields, defaultValues, resolver, submit } from './config'

const Page: NextPage = () => {
  const form = useForm<ILogin>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting

  return (
    <Card className="mx-4 w-full max-w-screen-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to login.</CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)}>
          <CardContent className="space-y-4">
            {Object.keys(defaultValues).map((key) => (
              <LoginFields key={key} name={key as keyof ILogin} control={form.control}>
                {(field) => <Input {...field} type={key} disabled={isPending} />}
              </LoginFields>
            ))}

            <CardDescription className="typography">
              Don&apos;t have an account?{' '}
              <a href="https://account.tiesen.id.vn/register" target="_blank" rel="noreferrer">
                Register here
              </a>
            </CardDescription>
          </CardContent>

          <FormFooter btnText="Login" isPending={isPending} cancel />
        </form>
      </Form>
    </Card>
  )
}

export default Page
