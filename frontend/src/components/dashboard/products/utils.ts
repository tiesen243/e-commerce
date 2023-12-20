import axios from 'axios'
import { Fetcher, mutate } from 'swr'

import { toast } from '@/components/ui/use-toast'
import { IProduct } from '@/types/product'

export const fetcher: Fetcher<IProduct[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data.products
  } catch (e: any) {
    const message = e.response.data.message
    throw new Error(message)
  }
}

export const handleDelete = async (id: string) => {
  try {
    await axios.delete(`/api/product/${id}`)
    mutate('/api/product/me')
    toast({ title: 'Deleted successfully' })
  } catch (e: any) {
    const message = e.response.data.message
    toast({ title: 'Delete failed', description: message, variant: 'destructive' })
  }
}
