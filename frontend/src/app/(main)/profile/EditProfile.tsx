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
} from '@/components/ui'
import { uploadImage } from '@/lib/firebase'
import { IUser } from '@/types/user'
import axios from 'axios'
import { useState } from 'react'

interface Props {
  user: IUser
  token: string
}
const EditProfileDialog: React.FC<Props> = ({ user, token }) => {
  const [formData, setFormData] = useState({
    userName: user.userName,
    avatar: user.avatar,
  })

  const handleSubmit = async () => {
    let url: string
    if (typeof formData.avatar === 'string') url = formData.avatar
    else url = await uploadImage(formData.avatar, user._id, 'avatar')

    const res = await axios.patch(
      'http://localhost:5000/user/update/info',
      { userName: formData.userName, avatar: url },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    console.log(res)
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
            Make changes to your profile here. Click save when you're done.
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
