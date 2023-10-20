'use client'

import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Loading, StyledTextField } from '@/components'
import { SuccessToast } from '@/utils/notify'

const Page: NextPage = () => {
  const [data, setdata] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState<string[]>()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const res = await fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.status !== 204) {
      const { message } = await res.json()
      setError(message)
      setIsSubmitting(false)
    } else {
      SuccessToast('Register success')
      push('/login')
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Typography variant="h1" className="text-center">
        Register New User
      </Typography>

      <StyledTextField
        label="User Name"
        type="text"
        value={data.userName}
        onChange={(e) => setdata({ ...data, userName: e.target.value })}
        required
      />
      <StyledTextField
        type="email"
        label="Email"
        value={data.email}
        onChange={(e) => setdata({ ...data, email: e.target.value })}
        required
      />
      <StyledTextField
        label="Password"
        type="password"
        value={data.password}
        onChange={(e) => setdata({ ...data, password: e.target.value })}
        required
      />
      <StyledTextField
        label="Confirm Password"
        type="password"
        value={data.confirmPassword}
        onChange={(e) => setdata({ ...data, confirmPassword: e.target.value })}
        required
      />

      <FormHelperText error>
        {typeof error === 'string' ? error : error?.map((e: string, idx: number) => <p key={idx}>* {e}</p>)}
      </FormHelperText>

      <Typography variant="subtitle2">
        Already have an account?{' '}
        <Button component={Link} color="info" href="/login">
          Login{' '}
        </Button>
      </Typography>
      <Button color="info" type="submit">
        Register
      </Button>
      {isSubmitting && <Loading text="Registering..." />}
    </Box>
  )
}

export default Page
