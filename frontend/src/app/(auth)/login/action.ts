import axios from '@/lib/axios'

export interface FormData {
  email: string
  password: string
}

export const initialize: FormData = {
  email: '',
  password: '',
}
export const action = async (formData: FormData, toast: any) => {
  try {
    await axios.post('/auth/login', formData)
    toast({
      title: 'Success',
      description: 'Logged in successfully',
    })
    return true
  } catch (err: any) {
    toast({
      title: 'Error',
      description: err.response.data.message,
      variant: 'destructive',
    })
    return false
  }
}
