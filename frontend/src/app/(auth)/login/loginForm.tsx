'use client'

import { CardContent, CardDescription } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { ILogin, resolver, defaultValues, submit } from './config'
import { Fields } from '@/components/comp/fields'
import { Input } from '@/components/ui/input'
import FormFooter from '@/components/comp/form-footer'

const LoginFields = Fields<ILogin>
const LoginForm: React.FC = () => {
  const form = useForm<ILogin>({ resolver, defaultValues })
  const isPending = form.formState.isSubmitting

  return (
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
  )
}

export default LoginForm
