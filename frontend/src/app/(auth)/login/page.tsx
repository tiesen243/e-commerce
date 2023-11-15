'use client'

import { Button, Input, Typography, useToast } from '@/components/ui'
import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { FormData, action, initialize } from './action'
import { useRouter } from 'next/navigation'

const Page: NextPage = () => {
  const { toast } = useToast()
  const { push } = useRouter()
  const [formData, setFormData] = useState(initialize)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await action(formData, toast)
    if (res) push('/')
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Typography variant="h1" className="text-center">
        Login
      </Typography>

      {Array.from(Object.keys(formData)).map((key) => (
        <Input
          key={key}
          label={key}
          type={key.toLowerCase().includes('password') ? 'password' : key}
          value={formData[key as keyof FormData]}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
          }
          required
        />
      ))}

      <Typography variant="small">
        Dont have an account?{' '}
        <Link href="/register" className="underline-offset-4 hover:underline">
          Register
        </Link>
      </Typography>

      <Button type="submit">Login</Button>
    </form>
  )
}

export default Page
