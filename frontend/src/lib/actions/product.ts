'use server'

import { revalidateTag } from 'next/cache'
import axios from '../axios'
import { GetToken } from '../getToken'

export const handleDelete = async (formData: FormData) => {
  const token = await GetToken()
  const id = formData.get('id')
  await axios.delete(`/product/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  revalidateTag('products')
}
