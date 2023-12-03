import { Fields, FieldsProps } from '@/components/fields'
import { Button, CardContent, Form, Input, LoadingSpinner } from '@/components/ui'
import { LoginType, defaultValues, resolver, signIn, useForm, useRouter } from './config'
import { toast } from '@/components/ui/use-toast'

const LoginFields = Fields as React.FC<FieldsProps<LoginType>>

const LoginForm: React.FC = () => {
  const form = useForm<LoginType>({ resolver, defaultValues })

  const { push } = useRouter()
  const onSubmit = async (data: LoginType) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false })
      if (res?.error) throw new Error(res?.error)
      toast({ title: 'Login success', variant: 'success' })
      push('/')
    } catch (err) {
      toast({ title: 'Login failed', variant: 'destructive' })
    }
  }

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {Object.keys(defaultValues).map((item: any, idx: number) => (
            <LoginFields key={idx} control={form.control} name={item}>
              {(field) => (
                <Input
                  placeholder={`Enter your ${item}`}
                  type={item}
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              )}
            </LoginFields>
          ))}

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <LoadingSpinner /> : 'Login'}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}

export default LoginForm
