'use client'

import { Box, Button, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { BackBtn } from '@/components'
import { showErrorToast, showSuccessToast } from '@/lib'
import { SettingsRounded } from '@mui/icons-material'

const Page: NextPage = () => {
  const { token } = useSession().data || {}

  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('/api/v1/user/update/password', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(formData),
    })
    if (res.status === 204) {
      showSuccessToast('Password updated successfully!')
      signOut({ redirect: false })
      push('/')
    } else {
      const { message } = await res.json()
      const mess = typeof message === 'string' ? message : message.join(', ')
      showErrorToast(mess)
    }
  }
  return (
    <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        Change Password
      </Typography>

      <TextField
        label="Old Password"
        type="password"
        color="secondary"
        value={formData.oldPassword}
        onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
      />

      <TextField
        label="New Password"
        type="password"
        color="secondary"
        value={formData.newPassword}
        onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
      />

      <TextField
        label="Confirm Password"
        type="password"
        color="secondary"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
      />

      <Button variant="contained" type="submit" className="btn" startIcon={<SettingsRounded />}>
        Change Password
      </Button>

      <BackBtn />
    </Box>
  )
}

export default Page
