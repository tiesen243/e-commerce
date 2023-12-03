import { IUser } from '@/types/user'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export interface Props {
  user: IUser
  update: ({}) => void
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const updateSchema = z.object({
  userName: z.string().min(4, 'Username must be at least 3 characters long.'),
  avatar: z.instanceof(File).nullable(),
})

export type FormValues = z.infer<typeof updateSchema>

export const resolver = zodResolver(updateSchema)

export const defaultValues = (user: IUser): FormValues => ({
  userName: user.userName,
  avatar: null,
})
