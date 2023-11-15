'use client'

import { DragAndDrop } from '@/components/DragAndDrop'
import Loading from '@/components/Loading'
import TextFields from '@/components/TextFields'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  useToast,
} from '@/components/ui'
import axios from '@/lib/axios'
import { uploadImage } from '@/lib/firebase'
import { IUser } from '@/types/user'
import { useState } from 'react'

interface Props {
  user: IUser
  token: string
  update: ({}) => void
}
interface FormData {
  userName: string
  avatar: string | File
}
const EditProfileDialog: React.FC<Props> = ({ user, token, update }) => {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    userName: user.userName,
    avatar: user.avatar,
  })

  const handleSubmit = async () => {
    try {
      let url: string
      if (typeof formData.avatar === 'string') url = formData.avatar
      else url = await uploadImage(formData.avatar, user._id, 'avatar')

      await axios.patch(
        '/user/update/info',
        { userName: formData.userName, avatar: url },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      update({})
      toast({
        title: 'Success',
        description: 'Your profile has been updated.',
      })
    } catch (err: any) {
      console.log(err.response.data.message)
      toast({
        title: 'Error',
        description: err.response.data.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TextFields
            label="Username"
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          />

          <DragAndDrop
            preview={user.avatar}
            name="avatar"
            setValue={(value) => setFormData({ ...formData, avatar: value })}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EditProfileDialog
