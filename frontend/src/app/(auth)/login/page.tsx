'use client'

import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Loading from '@/components/Loading'
import StyledTextField from '@/components/StyledTextField'
import { ErrorToast, SuccessToast } from '@/utils/notify'

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
      ErrorToast('Login failed')
    } else {
      SuccessToast('Login success')
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
          Don't have an account?{' '}
          <Button variant="text" color="info" onClick={() => push('/register')}>
            Register
          </Button>
        </Typography>

        <Button color="info" type="submit">
          Login
        </Button>
      </Box>

      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50">
          <Loading text="Logining..." />
        </div>
      )}
    </>
  )
}

export default Page
