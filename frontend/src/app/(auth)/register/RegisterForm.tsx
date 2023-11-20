'use client'

import {
  Button,
  CardContent,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
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
import axios from '@/lib/axios'

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
            return (
              <FormChild key={idx} item={key} label={label} control={form.control} type={type} />
            )
          })}

          <AcceptTerms />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </CardContent>
  )
}

export default RegisterForm

interface FormChildProps {
  item: string
  label: string
  control: any
  type: string
}

const FormChild: React.FC<FormChildProps> = ({ item, label, control, type }) => (
  <FormField
    name={item as keyof RegisterType}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input {...field} type={type} placeholder={`Enter your ${label.toLowerCase()}`} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

const AcceptTerms: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" required />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
)
