import { z } from 'zod'

const RegisterDto = z
  .object({
    userName: z
      .string()
      .min(4, {
        message: 'Username must be at least 4 characters long',
      })
      .max(20, {
        message: 'Username must be at most 20 characters long',
      }),
    email: z.string().email({
      message: 'Invalid email',
    }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/, {
        message: 'Password not strong enough',
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
  })

export type IRegisterDto = z.infer<typeof RegisterDto>
export default RegisterDto
