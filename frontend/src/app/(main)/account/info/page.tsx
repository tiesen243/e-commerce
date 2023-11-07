'use client'
import { Box, Button, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { BackBtn, DragAndDrop, Loading } from '@/components'
import { showErrorToast, showSuccessToast, uploadImage } from '@/lib'
import { useRouter } from 'next/navigation'
import { SaveRounded } from '@mui/icons-material'

interface FormData {
  userName: string
  avatar: string
}

const Page: NextPage = () => {
  const { data, update } = useSession()
  const [formData, setFormData] = useState<FormData>({
    userName: data?.user?.userName || '',
    avatar: data?.user?.avatar || '',
  })

  const { back } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let url: string = data?.user.avatar

    if (typeof formData.avatar !== 'string') url = await uploadImage(formData.avatar, data?.user._id, 'avatar')

    await update({})
    const res = await fetch('/api/v1/user/update/info', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data?.token}` },
      body: JSON.stringify({ userName: formData.userName, avatar: url }),
    })

    if (res.status === 204) {
      showSuccessToast('Profile updated successfully!')
      await update({})
      back()
    } else {
      const { message } = await res.json()
      showErrorToast(typeof message === 'string' ? message : message.join(', '))
    }
  }

  return data ? (
    <Box className="flex flex-col gap-4" component="form" onSubmit={handleSubmit}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Change Profile Information
      </Typography>

      <TextField
        label="User Name"
        color="secondary"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
      />

      <DragAndDrop
        name="avater"
        preview={formData.avatar}
        setValue={(value) => setFormData({ ...formData, avatar: value })}
      />

      <Button type="submit" variant="contained" className="btn" startIcon={<SaveRounded />}>
        Save
      </Button>
      <BackBtn />
    </Box>
  ) : (
    <Loading />
  )
}

export default Page
