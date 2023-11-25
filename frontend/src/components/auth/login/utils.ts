import { z } from 'zod'
export { zodResolver } from '@hookform/resolvers/zod'
export { useForm } from 'react-hook-form'
export { useRouter } from 'next/navigation'
export { signIn } from 'next-auth/react'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginType = z.infer<typeof LoginSchema>

export const defaultValues = {
  email: '',
  password: '',
}
