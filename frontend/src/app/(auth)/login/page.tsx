'use client'

import { Button, CardContent, Input, Label, useToast } from '@/components/ui'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import Footer from './Footer'
import Header from './Header'
import { FormData, action, initialValues } from './action'

const Page: NextPage = () => {
  const { toast } = useToast()
  const { push } = useRouter()
  const [formData, setFormData] = useState(initialValues)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await action(formData, toast)
    if (res) push('/')
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
                type={key.toLowerCase().includes('password') ? 'password' : key}
                placeholder={`Enter your ${key}`}
                value={formData[key as keyof FormData]}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                }
                required
              />
            </div>
          ))}

          <Button type="submit">Login</Button>
        </form>
      </CardContent>

      <Footer />
    </>
  )
}

export default Page
