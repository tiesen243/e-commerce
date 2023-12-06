import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Fields, FieldsProps } from '@/components/comp/fields'
import IUser from '@/interfaces/user.interface'

export const editSchema = z.object({
  userName: z.string().min(3).max(20),
  avatar: z.instanceof(File).nullable(),
})

export type IEdit = z.infer<typeof editSchema>

export const resolver = zodResolver(editSchema)

export const defaultValues = (user: IUser): IEdit => ({
  userName: user.userName,
  avatar: null,
})

export const EditFields = Fields as React.FC<FieldsProps<IEdit>>

export { default as Header } from './header'
export { default as Trigger } from './trigger'
export { default as Footer } from './footer'
