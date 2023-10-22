'use client'

import { StyledTextField } from '@/components'
import { showSuccessToast } from '@/utils'
import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

interface State {
  newPassword: string
  confirmPassword: string
  oldPassword: string
}
const Page: NextPage = () => {
  const [data, setData] = useState<State>({
    newPassword: '',
    confirmPassword: '',
    oldPassword: '',
  })
  const { token } = useSession().data || {}
  const [error, setError] = useState<string[] | string>('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch('/api/v1/user/update/password', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    })
    if (res.status === 204) {
      showSuccessToast('Change password successfully')
      signOut()
    } else {
      const { message } = await res.json()
      setError(message)
    }
  }

  return (
    <Box className="flex flex-col gap-4" component="form" onSubmit={handleSubmit}>
      <Typography variant="h1" className="text-4xl">
        Change password
      </Typography>

      <StyledTextField
        label="New password"
        type="password"
        value={data.newPassword}
        onChange={(e) => setData((prev) => ({ ...prev, newPassword: e.target.value }))}
        required
      />

      <StyledTextField
        label="Confirm password"
        type="password"
        value={data.confirmPassword}
        onChange={(e) => setData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
        required
      />

      <StyledTextField
        label="Old password"
        type="password"
        value={data.oldPassword}
        onChange={(e) => setData((prev) => ({ ...prev, oldPassword: e.target.value }))}
        required
      />

      <FormHelperText error>{error}</FormHelperText>

      <Button type="submit" variant="outlined" color="info">
        Change password
      </Button>
    </Box>
  )
}

export default Page
