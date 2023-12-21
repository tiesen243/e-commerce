import BackBtn from '@/components/comp/backBtn'
import axios from '@/lib/axios'
import { getIdFromSlug } from '@/lib/utils'
import { IProduct } from '@/types/product'
import type { NextPage } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}
const Page: NextPage<Props> = async ({ params }) => {
  try {
    const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)
    const product: IProduct = data.data
    return (
      <div>
        <BackBtn />
        <h1>{getIdFromSlug(params.slug)}</h1>
        <h2>{product.name}</h2>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}

export default Page
