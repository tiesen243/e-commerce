'use client'

import { Product } from '@/types/product'
import axios from 'axios'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSWR, { Fetcher } from 'swr'
import { column } from './column'

const DataTable = dynamic(() => import('@/components/DataTable'), {
  ssr: false,
})

const fetcher: Fetcher<Product[]> = async (url: string) => {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (e: any) {
    throw e.response.data
  }
}
const Page: NextPage = () => {
  const { data, error } = useSWR('/api/product/me', fetcher, {
    refreshInterval: 1000,
  })
  if (error || !data) return <div>{error}</div>

  return <DataTable columns={column as any} data={data} filter="name" />
}

export default Page
