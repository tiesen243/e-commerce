'use client'

import StyledTextField from '@/components/StyledTextField'
import { SuccessToast } from '@/utils/notify'
import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Loading from '@/components/Loading'

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
    if (res.status !== 201) {
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

      <FormHelperText error>{typeof error === 'string' ? error : error?.map((e) => <p>* {e}</p>)}</FormHelperText>

      <Typography variant="subtitle2">
        Already have an account?{' '}
        <Button component={Link} color="info" href="/login">
          Login{' '}
        </Button>
      </Typography>
      <Button color="info" type="submit">
        Register
      </Button>
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50">
          <Loading text="Registering..." />
        </div>
      )}
    </Box>
  )
}

export default Page
