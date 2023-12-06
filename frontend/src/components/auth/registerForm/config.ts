import { toast } from '@/components/ui/use-toast'
import axios from '@/lib/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

export const registerSchema = z
  .object({
    userName: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/, {
      message: 'Password not strong enough',
    }),
    confirmPassword: z.string().min(6).max(100),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type IRegister = z.infer<typeof registerSchema>

export const resolver = zodResolver(registerSchema)

export const defaultValues: IRegister = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const submit = async (data: IRegister, push: any) => {
  try {
    await axios.post('/auth/register', data)
    toast({
      title: 'Registration successful',
      description: 'Form submitted successfully',
      variant: 'success',
    })
    push('/login')
  } catch (e: any) {
    toast({
      title: 'Registration failed',
      description: e.response.data.message,
      variant: 'destructive',
    })
  }
}
