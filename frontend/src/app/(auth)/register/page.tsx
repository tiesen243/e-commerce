'use client'

import { Button, CardContent, Checkbox, Input, Label, useToast } from '@/components/ui'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Footer from './Footer'
import Header from './Header'
import { FormData, action, initialValues } from './action'

const Page: NextPage = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>(initialValues)

  const { push } = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await action(formData, toast)
    if (res) push('/login')
  }

  return (
    <>
      <Header />

      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {Array.from(Object.keys(formData)).map((key) => (
            <div key={key} className="flex flex-col space-y-2">
              <Label htmlFor={key}>{key.toUpperCase()}</Label>
              <Input
                placeholder={`Enter your ${key}`}
                type={
                  key.toLowerCase().includes('password')
                    ? 'password'
                    : key.toLowerCase().includes('email')
                      ? 'email'
                      : 'text'
                }
                value={formData[key as keyof FormData]}
                onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                required
              />
            </div>
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

          <Button type="submit">Register</Button>
        </form>
      </CardContent>

      <Footer />
    </>
  )
}

export default Page
