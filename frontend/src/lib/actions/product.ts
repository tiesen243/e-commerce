'use server'

import axios from '@/lib/axios'
import { GetToken } from '@/lib/getToken'
import { revalidateTag } from 'next/cache'

export const handleDelete = async (formData: FormData) => {
  const token = await GetToken()
  const id = formData.get('id')
  await axios.delete(`/product/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  revalidateTag('products')
}

interface Query {
  page?: number
  limit?: number
  q?: string
  code?: number
  category?: string
  sortBy?: 'name' | 'price' | 'createdAt' | 'updatedAt'
  isAscending?: boolean
}

export const getProducts = async (
  q: Query
): Promise<{
  page: number
  totalPage: number
  data: IProduct[]
}> => {
  try {
    const { data } = await axios.get('/product', {
      params: {
        keyword: q.q ? q.q : null,
        page: q.page ? q.page : 1,
        limit: q.limit ? q.limit : 10,
        code: q.code ? q.code : null,
        category: q.category ? q.category : null,
        sortBy: q.sortBy ? q.sortBy : 'createdAt',
        isAscending: q.isAscending ? q.isAscending : false,
      },
    })

    return data
  } catch (err: any) {
    throw new Error(err.response.data.message)
  }
}
