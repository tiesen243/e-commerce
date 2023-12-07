import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Fields, FieldsProps } from '@/components/comp/fields'
import { toast } from '@/components/ui/use-toast'
import IUser from '@/interfaces/user.interface'
import { uploadImage } from '@/lib/firebase'
import axios from 'axios'

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

export interface Props {
  user: IUser
  update: ({}) => void
}

interface ISubmit {
  data: IEdit
  user: IUser
  update: any
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const updateProfile = async (props: ISubmit) => {
  const { data, user, update, setOpen } = props

  try {
    let avatar: string = user.avatar
    if (typeof data.avatar !== 'string') avatar = await uploadImage(data.avatar, user._id, 'avatar')

    await axios.patch('/api/user/edit', { userName: data.userName, avatar })
    update({})
    toast({ title: 'Update Success', variant: 'success' })
    setOpen(false)
  } catch (e: any) {
    toast({ title: 'Update Fail', description: e.response.data.message, variant: 'destructive' })
  }
}
