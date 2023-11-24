'use client'

import { Button, CardContent, Form, LoadingSpinner, useToast } from '@/components/ui'
import axios from '@/lib/axios'
import { AcceptTerms, FormChild as Field } from './FormField'
import { RegisterSchema, RegisterType, defaultValues, useForm, useRouter, zodResolver } from './utils'

const RegisterForm: React.FC = () => {
  const { toast } = useToast()
  const { push } = useRouter()
  const form = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: defaultValues,
  })

  const onSubmit = async (data: RegisterType) => {
    try {
      await axios.post('/auth/register', data)

      toast({
        title: 'Registration successful',
        description: 'Redirecting you to the login page...',
        variant: 'success',
      })
      push('/login')
    } catch (err: any) {
      console.log(err.response.data.message)
      toast({
        title: 'Registration failed',
        description: err.response.data.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {Object.keys(form.getValues()).map((key: string, idx: number) => {
            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())
            const type = key === 'confirmPassword' ? 'password' : key === 'userName' ? 'text' : key
            return <Field key={idx} item={key} label={label} control={form.control} type={type} />
          })}

          <AcceptTerms />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <LoadingSpinner /> : 'Register'}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}

export default RegisterForm
