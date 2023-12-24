'use server'

import axios from '@/lib/axios'
import { GetToken } from '@/lib/getToken'
import { Category, Tag } from '@/types/enum'
import type { IProduct } from '@/types/product'
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
  keyword?: string
  code?: number
  category?: Category
  tags?: Tag[]
  sortBy?: 'name' | 'price' | 'createdAt' | 'updatedAt'
  isAscending?: boolean
}
export const getProducts = async (q: Query): Promise<IProduct[]> => {
  try {
    const { data } = await axios.get('/product', {
      params: {
        page: q.page ? q.page : 1,
        limit: q.limit ? q.limit : 10,
        keyword: q.keyword ? q.keyword : null,
        code: q.code ? q.code : null,
        category: q.category ? q.category : null,
        tags: q.tags ? q.tags : null,
        sortBy: q.sortBy ? q.sortBy : null,
        isAscending: q.isAscending ? q.isAscending : false,
      },
    })

    return data.data
  } catch (err: any) {
    throw new Error(err.response.data.message)
  }
}
