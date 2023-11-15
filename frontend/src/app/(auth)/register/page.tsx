'use client'

import { Button, Checkbox, Input, Typography, useToast } from '@/components/ui'
import axios from '@/lib/axios'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface FormData {
  userName: string
  email: string
  password: string
  confirmPassword: string
}
const Page: NextPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      await axios.post('/auth/register', formData)
      toast({
        title: 'Success',
        description: 'Account created successfully',
      })
      push('/login')
    } catch (e: any) {
      console.log(e.response.data.message)
      toast({
        title: 'Error',
        description: e.response.data.message || 'Something went wrong',
        variant: 'destructive',
      })
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Typography variant="h1" className="text-center">
        Register
      </Typography>

      {Array.from(Object.keys(formData)).map((key) => (
        <Input
          key={key}
          type={
            key.toLowerCase().includes('password')
              ? 'password'
              : key.toLowerCase().includes('email')
                ? 'email'
                : 'text'
          }
          label={key}
          value={formData[key as keyof FormData]}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, [key]: e.target.value }))
          }
          required
        />
      ))}

      <label className="flex items-center gap-2">
        <Checkbox name="Accept" required />
        Accept{' '}
        <a
          href="https://youtu.be/dQw4w9WgXcQ?si=s3RYu8He4dKvYntR"
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          terms and conditions
        </a>
      </label>

      <Typography variant="small">
        Already have an account?{' '}
        <Link href="/login" className="underline-offset-4 hover:underline">
          Login
        </Link>
      </Typography>

      <Button type="submit">Register</Button>
    </form>
  )
}

export default Page
