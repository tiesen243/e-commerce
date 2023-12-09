import axios from 'axios'
import { Fetcher } from 'swr'

import { toast } from '@/components/ui/use-toast'
import { IProduct } from '@/interfaces/product.interface'

export interface Error {
  message: string
}

export const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data.products
  } catch (e: any) {
    const message = e.response.data.message
    throw new Error(message)
  }
}

export const handleDelete = async (id: string, mutate: () => void) => {
  try {
    await axios.delete(`/api/product/${id}`)
    mutate()
    toast({ title: 'Deleted successfully', variant: 'success' })
  } catch (e: any) {
    const message = e.response.data.message
    toast({ title: 'Delete failed', description: message, variant: 'destructive' })
  }
}
