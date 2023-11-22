'use client'

import { DragAndDrop } from '@/components/DragAndDrop'
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
import { uploadImage } from '@/lib/firebase'
import { IUser } from '@/types/user'
import { useState } from 'react'

interface Props {
  user: IUser
  update: ({}) => void
}
interface FormData {
  userName: string
  avatar: string | File
}
const EditProfileDialog: React.FC<Props> = ({ user, update }) => {
  const { toast } = useToast()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    userName: user.userName,
    avatar: user.avatar,
  })

  const handleSubmit = async () => {
    try {
      let url: string
      if (typeof formData.avatar === 'string') url = formData.avatar
      else url = await uploadImage(formData.avatar, user._id, 'avatar')

      const res = await fetch('/api/auth/updateInfo', {
        method: 'PATCH',
        body: JSON.stringify({ ...formData, avatar: url }),
      })
      if (res.status !== 200) throw new Error((await res.json()).message)

      update({})
      toast({
        title: 'Success',
        description: 'Your profile has been updated.',
        variant: 'success',
      })
      setIsOpen(false)
    } catch (err: any) {
      toast({
        title: 'Update failed',
        description: err.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&#39;re done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <TextFields
            label="Username"
            value={formData.userName}
            onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
          />

          <DragAndDrop
            name="User avatar"
            preview={user.avatar}
            setValues={(value) => setFormData({ ...formData, avatar: value })}
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
