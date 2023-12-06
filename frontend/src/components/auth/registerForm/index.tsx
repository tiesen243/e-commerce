'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Fields, FieldsProps } from '@/components/comp/fields'
import { CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Footer from '../footer'
import { IRegister, defaultValues, resolver, submit } from './config'

const RegisterFields = Fields as React.FC<FieldsProps<IRegister>>
const RegisterForm: React.FC = () => {
  const { push } = useRouter()
  const form = useForm<IRegister>({ resolver, defaultValues })
  const onSubmit = async (data: IRegister) => await submit(data, push)

  const isPending = form.formState.isSubmitting
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          {Object.keys(defaultValues).map((key) => (
            <RegisterFields key={key} name={key as keyof IRegister} control={form.control}>
              {(field) => (
                <Input
                  {...field}
                  type={type(key)}
                  placeholder={`Enter your ${key}`}
                  disabled={isPending}
                  required
                />
              )}
            </RegisterFields>
          ))}
        </CardContent>
        <Footer
          btnText="Register"
          isPending={isPending}
          text="Already have an account?"
          href="/login"
        />
      </form>
    </Form>
  )
}

export default RegisterForm

const type = (text: string) => {
  if (text === 'userName') return 'text'
  else if (text === 'confirmPassword') return 'password'
  else return text
}
