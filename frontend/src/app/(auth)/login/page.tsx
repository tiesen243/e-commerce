'use client'

import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Loading, StyledTextField } from '@/components'
import { showErrorToast, showSuccessToast } from '@/utils/notify'

type Data = {
  email: string
  password: string
}

const Page: NextPage = () => {
  const [data, setData] = useState<Data>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const res = await signIn('credentials', { ...data, redirect: false })
    if (res?.status !== 200) {
      setError(res?.error ?? 'Something went wrong')
      setIsSubmitting(false)
      showErrorToast('Login failed')
    } else {
      showSuccessToast('Login success')
      push('/shop')
    }
  }
  return (
    <>
      <Typography variant="h1" className="text-center">
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <StyledTextField
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <StyledTextField
          label="Password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <FormHelperText error>{error}</FormHelperText>

        <Typography variant="subtitle2">
          Don&apos;t have an account?{' '}
          <Button variant="text" color="info" onClick={() => push('/register')}>
            Register
          </Button>
        </Typography>

        <Button color="info" type="submit" variant="outlined">
          Login
        </Button>
      </Box>

      {isSubmitting && <Loading text="Logining..." />}
    </>
  )
}

export default Page
