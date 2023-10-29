'use client'

import { Loading } from '@/components'
import { showErrorToast, showSuccessToast } from '@/utils'
import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface FormData {
  email: string
  password: string
}

const Page: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const [isLoggin, setIsLoggin] = useState<boolean>(false)

  const { push } = useRouter()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoggin(true)
    const res = await signIn('credentials', { ...formData, redirect: false })
    if (res?.status === 200) {
      showSuccessToast('Login successfully')
      push('/')
    } else {
      showErrorToast(res?.error ?? 'Error')
      setIsLoggin(false)
    }
  }

  return (
    <Box component="form" className="flex flex-col justify-center gap-4" onSubmit={onSubmit}>
      <Typography variant="h3" className="text-center font-bold">
        Login to your account
      </Typography>

      <TextField
        label="Email"
        name="email"
        type="email"
        color="secondary"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        color="secondary"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      <Button variant="contained" className="btn" type="submit" disabled={isLoggin}>
        Login
      </Button>

      <FormHelperText>
        Dont have an account?{' '}
        <Button variant="text" color="secondary" onClick={() => push('/auth/register')}>
          Register
        </Button>
      </FormHelperText>

      {isLoggin && <Loading text="Logging in..." />}
    </Box>
  )
}

export default Page
