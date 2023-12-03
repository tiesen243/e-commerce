import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
export { useForm } from 'react-hook-form'
export { useRouter } from 'next/navigation'

export const RegisterSchema = z
  .object({
    userName: z.string().min(4).max(20),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/, {
      message: 'Password not strong enough',
    }),

    confirmPassword: z.string().min(8).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterType = z.infer<typeof RegisterSchema>

export const defaultValues = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const resolver = zodResolver(RegisterSchema)
