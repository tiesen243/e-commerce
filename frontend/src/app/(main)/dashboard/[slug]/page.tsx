import axios from '@/lib/axios'
import { getIdFromSlug } from '@/lib/utils'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)
  const product: IProduct = data.data

  return {
    title: `Edit ${product.name}`,
    description: `Fill the form to edit ${product.name}`,
    openGraph: {
      title: `Edit ${product.name}`,
      description: `Fill the form to edit ${product.name}`,
    },
    twitter: {
      title: `Edit ${product.name} `,
      description: `Fill the form to edit ${product.name}`,
    },
  }
}

import BackBtn from '@/components/back-btn'
import EditForm from '@/components/dashboard/edit'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
