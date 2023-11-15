import { signIn } from 'next-auth/react'

export interface FormData {
  email: string
  password: string
}

export const initialValues: FormData = {
  email: '',
  password: '',
}

export const action = async (formData: FormData, toast: any) => {
  const res = await signIn('credentials', { ...formData, redirect: false })

  if (res?.status === 200) {
    toast({
      title: 'Login success',
      description: 'You are now logged in',
      status: 'success',
    })
    return true
  } else {
    toast({
      title: 'Login failed',
      description: res?.error,
      status: 'error',
    })
    return false
  }
}
