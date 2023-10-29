'use client'

import { Box, Button, FormHelperText, TextField, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Loading } from '@/components'
import { API_URL, showErrorToast, showSuccessToast } from '@/utils'

interface FormData {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

const Page: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({ userName: '', email: '', password: '', confirmPassword: '' })
  const [isRegister, setIsLoggin] = useState<boolean>(false)

  const [error, setError] = useState<string | string[]>('')

  const { push } = useRouter()
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoggin(true)
    const res = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (res?.status === 204) {
      showSuccessToast('Registered successfully')
      push('/auth/login')
    } else {
      const { message } = await res.json()
      setError(message)
      showErrorToast('Register failed')
      setIsLoggin(false)
    }
  }

  return (
    <Box component="form" className="flex flex-col justify-center gap-4" onSubmit={onSubmit}>
      <Typography variant="h3" className="text-center font-bold">
        Register New Account
      </Typography>

      <TextField
        label="Username"
        name="username"
        type="text"
        color="secondary"
        value={formData.userName}
        onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
        required
      />

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

      <TextField
        label="Confirm Password"
        name="confirm password"
        type="password"
        color="secondary"
        value={formData.confirmPassword}
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
        required
      />

      {error && (
        <FormHelperText error>
          {typeof error === 'string' ? `* ${error}` : error.map((e, idx: number) => <p key={idx}>* {e}</p>)}
        </FormHelperText>
      )}

      <Button variant="contained" className="btn" type="submit" disabled={isRegister}>
        Register
      </Button>

      <FormHelperText>
        Already have an account?{' '}
        <Button variant="text" color="secondary" onClick={() => push('/auth/login')}>
          Login
        </Button>
      </FormHelperText>

      {isRegister && <Loading text="Registering..." />}
    </Box>
  )
}

export default Page
