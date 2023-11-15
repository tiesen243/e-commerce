import axios from '@/lib/axios'

export interface FormData {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

export const initialValues: FormData = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const action = async (formData: FormData, toast: any) => {
  try {
    await axios.post('/auth/register', formData)
    toast({
      title: 'Success',
      description: 'Account created successfully',
    })
    return true
  } catch (e: any) {
    toast({
      title: 'Error',
      description: e.response.data.message || 'Something went wrong',
      variant: 'destructive',
    })
    return false
  }
}
