import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
export { signIn } from 'next-auth/react'
export { useRouter } from 'next/navigation'
export { useForm } from 'react-hook-form'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginType = z.infer<typeof LoginSchema>

export const defaultValues = {
  email: '',
  password: '',
}

export const resolver = zodResolver(LoginSchema)
