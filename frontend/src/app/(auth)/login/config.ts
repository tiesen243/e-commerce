import { Fields, FieldsProps } from '@/components/comp/fields'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type ILogin = z.infer<typeof loginSchema>

export const resolver = zodResolver(loginSchema)

export const defaultValues: ILogin = {
  email: '',
  password: '',
}

export const LoginFields = Fields as React.FC<FieldsProps<ILogin>>

export const submit = async (data: ILogin) => {
  try {
    const res = await signIn('credentials', { ...data, redirect: false })
    if (res?.error) throw new Error(res.error)
  } catch (e: any) {
    toast({
      title: 'Login failed',
      description: e.message,
      variant: 'destructive',
    })
  }
}
