'use client'

import { useForm } from 'react-hook-form'

import Footer from '@/components/auth/footer'
import Header from '@/components/auth/header'
import { Card, CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ILogin, LoginFields, defaultValues, resolver, submit } from './config'

const LoginForm: React.FC = () => {
  const form = useForm<ILogin>({ resolver, defaultValues })
  const onSubmit = async (data: ILogin) => await submit(data)

  const isPending = form.formState.isSubmitting
  return (
    <Card>
      <Header title="Login" description="Enter your credentials to continue" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {Object.keys(defaultValues).map((key) => (
              <LoginFields key={key} name={key as keyof ILogin} control={form.control}>
                {(field) => (
                  <Input
                    {...field}
                    type={key}
                    placeholder={`Enter your ${key}`}
                    disabled={isPending}
                    required
                  />
                )}
              </LoginFields>
            ))}
          </CardContent>

          <Footer btnText="Login" isPending={isPending} />
        </form>
      </Form>
    </Card>
  )
}

export default LoginForm
