import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Fields, FieldsProps } from '@/components/comp/fields'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { signOut } from 'next-auth/react'
import { delay } from '@/lib/utils'

export const changePassSchema = z
  .object({
    oldPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Password not match',
    path: ['confirmPassword'],
  })

export type IPass = z.infer<typeof changePassSchema>

export const resolver = zodResolver(changePassSchema)

export const defaultValues = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}

export const PassFields = Fields as React.FC<FieldsProps<IPass>>

export const changePassword = async (data: IPass) => {
  try {
    await axios.patch('/api/user/pass', data)

    toast({
      title: 'Change password success',
      description: 'You will be logged out in 5 seconds',
      variant: 'success',
    })
    await delay(5000)
    await signOut({ redirect: false })
  } catch (e: any) {
    toast({
      title: 'Change password failed',
      description: e.response.data.message,
      variant: 'destructive',
    })
  }
}
