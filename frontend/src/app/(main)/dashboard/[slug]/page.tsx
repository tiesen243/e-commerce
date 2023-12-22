import BackBtn from '@/components/comp/backBtn'
import EditForm from '@/components/dashboard/edit'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
      <Card>
        <BackBtn className="float-left m-4" />

        <CardHeader>
          <CardTitle>Edit Product</CardTitle>
          <CardDescription>{product.name}</CardDescription>
        </CardHeader>

        <EditForm product={product} />
      </Card>
    )
  } catch (error) {
    return notFound()
  }
}

export default Page
