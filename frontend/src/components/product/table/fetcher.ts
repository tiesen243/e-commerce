import { Product } from '@/types/product'
import axios from 'axios'
import { Fetcher } from 'swr'

export const fetcher: Fetcher<Product[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data.data
  } catch (e: any) {
    throw e.response.data
  }
}
