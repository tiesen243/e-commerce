'use client'

import { useForm } from 'react-hook-form'

import Header from '@/components/auth/header'
import Footer from '@/components/comp/form-footer'
import { Card, CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { IRegister, RegisterFields, defaultValues, resolver, submit } from './config'

const RegisterForm: React.FC = () => {
  const form = useForm<IRegister>({ resolver, defaultValues })
  const onSubmit = async (data: IRegister) => await submit(data)

  const isPending = form.formState.isSubmitting
  return (
    <Card>
      <Header title="Register" description="Register new account" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            {Object.keys(defaultValues).map((key) => (
              <RegisterFields key={key} name={key as keyof IRegister} control={form.control}>
                {(field) => (
                  <Input
                    {...field}
                    type={type(key)}
                    placeholder={`Enter your ${key}`}
                    disabled={isPending}
                  />
                )}
              </RegisterFields>
            ))}
          </CardContent>

          <Footer btnText="Register" isPending={isPending} />
        </form>
      </Form>
    </Card>
  )
}

export default RegisterForm

const type = (text: string) => {
  if (text === 'userName') return 'text'
  else if (text === 'confirmPassword') return 'password'
  else return text
}
