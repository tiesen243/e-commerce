'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import Footer from '@/components/auth/footer'
import { Fields, FieldsProps } from '@/components/comp/fields'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ILogin, defaultValues, resolver, submit } from './config'

const LoginFields = Fields as React.FC<FieldsProps<ILogin>>
const LoginForm: React.FC = () => {
  const { push } = useRouter()
  const form = useForm<ILogin>({ resolver, defaultValues })
  const onSubmit = async (data: ILogin) => await submit(data, push)

  const isPending = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
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

        <Footer
          btnText="Login"
          isPending={isPending}
          text="Don't have an account?"
          href="/register"
        />
      </form>
    </Form>
  )
}

export default LoginForm
