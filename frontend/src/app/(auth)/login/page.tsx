'use client'

import { Box, Button, FormHelperText, Typography, TextField } from '@mui/material'
import { NextPage } from 'next'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { showErrorToast, showSuccessToast } from '@/utils/notify'
import Link from 'next/link'

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
  const [isLogining, setLogin] = useState<boolean>(false)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLogin(true)
    const res = await signIn('credentials', { ...data, redirect: false })
    if (res?.status !== 200) {
      setError(res?.error ?? 'Something went wrong')
      setLogin(false)
      showErrorToast('Login failed')
    } else {
      showSuccessToast('Login success')
      push('/')
    }
  }
  return (
    <>
      <Typography variant="h1" className="text-center">
        Login
      </Typography>

      <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Email"
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <FormHelperText error>{error}</FormHelperText>

        <Typography variant="subtitle2">
          Don&apos;t have an account?{' '}
          <Button variant="text" color="info" component={Link} href="/register">
            Register
          </Button>
        </Typography>

        <Button type="submit" variant="contained" className="btn" disabled={isLogining}>
          Login
        </Button>
      </Box>
    </>
  )
}

export default Page
