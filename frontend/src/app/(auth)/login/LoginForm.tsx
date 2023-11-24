'use client'

import {
  Button,
  CardContent,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  LoadingSpinner,
  useToast,
} from '@/components/ui'
import { LoginSchema, LoginType, defaultValues, signIn, useForm, useRouter, zodResolver } from './action'

const LogInForm: React.FC = () => {
  const { toast } = useToast()
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultValues,
  })

  const { push } = useRouter()
  const onSubmit = async (data: LoginType) => {
    try {
      const res = await signIn('credentials', { ...data, redirect: false })
      if (res?.error) throw new Error(res?.error)

      toast({
        title: 'Login success',
        description: 'You have successfully logged in',
        variant: 'success',
      })
      push('/')
    } catch (err) {
      toast({
        title: 'Login failed',
        description: 'Please check your email and password',
        variant: 'destructive',
      })
    }
  }
  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {Object.keys(defaultValues).map((item: string, idx: number) => (
            <FormCard control={form.control} item={item} key={idx} />
          ))}

          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? <LoadingSpinner /> : 'Login'}
          </Button>
        </form>
      </Form>
    </CardContent>
  )
}

interface FormCardProps {
  control: any
  item: string
}
const FormCard: React.FC<FormCardProps> = ({ control, item }) => (
  <FormField
    name={item}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="capitalize">{item}</FormLabel>
        <FormControl>
          <Input placeholder={`Enter your ${item}`} type={item} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)

export default LogInForm
