'use client'

import { Box, Button, FormHelperText, Typography, TextField, Checkbox } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { showSuccessToast } from '@/utils/notify'

const Page: NextPage = () => {
  const [data, setdata] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState<string[]>()
  const [isRegistering, setRegister] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setRegister(true)
    const res = await fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.status !== 204) {
      const { message } = await res.json()
      setError(message)
      setRegister(false)
    } else {
      showSuccessToast('Register success')
      push('/login')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Typography variant="h1" className="text-center">
        Register New User
      </Typography>

      <TextField
        label="User Name"
        type="text"
        value={data.userName}
        onChange={(e) => setdata({ ...data, userName: e.target.value })}
        required
      />
      <TextField
        type="email"
        label="Email"
        value={data.email}
        onChange={(e) => setdata({ ...data, email: e.target.value })}
        required
      />
      <TextField
        label="Password"
        type="password"
        value={data.password}
        onChange={(e) => setdata({ ...data, password: e.target.value })}
        required
      />
      <TextField
        label="Confirm Password"
        type="password"
        value={data.confirmPassword}
        onChange={(e) => setdata({ ...data, confirmPassword: e.target.value })}
        required
      />

      <Checkbox required />

      <FormHelperText error>
        {typeof error === 'string' ? error : error?.map((e: string, idx: number) => <p key={idx}>* {e}</p>)}
      </FormHelperText>

      <Typography variant="subtitle2">
        Already have an account?{' '}
        <Button component={Link} color="info" href="/login">
          Login{' '}
        </Button>
      </Typography>
      <Button type="submit" className="bg-blue-light" disabled={isRegistering} variant="contained">
        Register
      </Button>
    </Box>
  )
}

export default Page
