import axios from '@/lib/axios'

import {
  Button,
  CardContent,
  Checkbox,
  Form,
  Input,
  Label,
  LoadingSpinner,
  useToast,
} from '@/components/ui'
import {
  RegisterSchema,
  RegisterType,
  defaultValues,
  useForm,
  useRouter,
  zodResolver,
} from './utils'
import Fields from '@/components/Fields'

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
          {Object.keys(form.getValues()).map((item: string, idx: number) => {
            const type =
              item === 'confirmPassword'
                ? 'password'
                : item === 'userName'
                  ? 'text'
                  : item
            return (
              <Fields key={idx} name={item} control={form.control}>
                {(field) => (
                  <Input
                    type={type}
                    placeholder={`Enter your ${field.name}`}
                    {...field}
                  />
                )}
              </Fields>
            )
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

export const AcceptTerms: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" required />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
)
