'use client'
import { Product } from '@/types/product'
import axios from 'axios'
import { NextPage } from 'next'
import useSWR, { Fetcher } from 'swr'

interface Props {
  params: {
    slug: string
  }
}

const fetcher: Fetcher<Product> = (url: string) => axios.get(url).then((res) => res.data.data[0])

const Page: NextPage<Props> = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/product/${params.slug}`, fetcher)
  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>

  return (
    <div>
      <h1>{data?.name}</h1>
    </div>
  )
}

export default Page
