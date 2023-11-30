'use client'
import { UpdateFormValues } from '@/components/product/update/config'
import axios from 'axios'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSWR, { Fetcher } from 'swr'

const UpdateForm = dynamic(() => import('@/components/product/update'), { ssr: false })

interface Props {
  params: {
    id: string
  }
}

interface Data extends UpdateFormValues {
  name: string
}
const fetcher: Fetcher<Data> = async (url: string) => axios.get(url).then((res) => res.data.data)

const Page: NextPage<Props> = ({ params }) => {
  const { data, error, isLoading } = useSWR(`/api/product/${params.id}`, fetcher)

  if (isLoading) return <div>loading...</div>
  if (error || !data) return <div>failed to load</div>

  return (
    <div className="typography">
      <h1>{data?.name}</h1>

      <UpdateForm data={data} />
    </div>
  )
}

export default Page
