import axios from '@/lib/axios'
import { Button, CardContent, Checkbox, Form, Input, Label, LoadingSpinner } from '@/components/ui'
import { RegisterType, defaultValues, resolver, useForm, useRouter } from './config'
import { Fields } from '@/components/fields'
import { toast } from '@/components/ui/use-toast'

const RegisterForm: React.FC = () => {
  const { push } = useRouter()
  const form = useForm<RegisterType>({ resolver, defaultValues })

  const onSubmit = async (data: RegisterType) => {
    try {
      await axios.post('/auth/register', data)
      toast({ title: 'Registration successful', variant: 'success' })
      push('/login')
    } catch (err: any) {
      toast({ title: 'Registration failed', variant: 'destructive' })
    }
  }

  const isDisabled = form.formState.isSubmitting

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {Object.keys(form.getValues()).map((item: string, idx: number) => {
            const type =
              item === 'confirmPassword' ? 'password' : item === 'userName' ? 'text' : item
            return (
              <Fields key={idx} name={item} control={form.control}>
                {(field) => <Input type={type} disabled={isDisabled} {...field} />}
              </Fields>
            )
          })}

          <AcceptTerms />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {isDisabled ? <LoadingSpinner /> : 'Register'}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}

export default RegisterForm

export const AcceptTerms: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" required />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
)
