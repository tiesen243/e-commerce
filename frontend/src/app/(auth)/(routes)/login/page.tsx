'use client'

import { Box, Button, FormHelperText, Typography } from '@mui/material'
import { setCookie } from 'cookies-next'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import StyledTextField from '@/components/StyledTextField'

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

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setError('')
    e.preventDefault()
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch((err) => err.response)
    const json = await res.json()
    if (json.statusCode !== 201) setError(json.message)
    else {
      setCookie('token', json.data.token, { maxAge: 60 * 60 * 24 * 7 })
      push('/')
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

        <Button className="btn" type="submit">
          Login
        </Button>
      </Box>
    </>
  )
}

export default Page
