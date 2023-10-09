import { z } from 'zod'

const LoginDto = z.object({
  email: z.string().email(),
  password: z.string(),
})

export type ILoginDto = z.infer<typeof LoginDto>
export default LoginDto
