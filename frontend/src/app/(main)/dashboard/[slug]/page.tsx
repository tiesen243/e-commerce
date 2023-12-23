import BackBtn from '@/components/comp/backBtn'
import EditForm from '@/components/dashboard/edit'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import axios from '@/lib/axios'
import { meta } from '@/lib/meta'
import { getIdFromSlug } from '@/lib/utils'
import { IProduct } from '@/types/product'
import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  try {
    const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)
    const product: IProduct = data.data

    return {
      title: `Edit ${product.name} | ${meta.title}`,
      description: `Edit ${product.name} | ${meta.title}`,
      openGraph: {
        title: `Edit ${product.name} | ${meta.title}`,
        description: `Edit ${product.name} | ${meta.title}`,
      },
      twitter: {
        title: `Edit ${product.name} | ${meta.title}`,
        description: `Edit ${product.name} | ${meta.title}`,
      },
    }
  } catch (error) {
    return {
      title: `Not found | ${meta.title}`,
      description: `Not found | ${meta.title}`,
      openGraph: {
        title: `Not found | ${meta.title}`,
        description: `Not found | ${meta.title}`,
      },
      twitter: {
        title: `Not found | ${meta.title}`,
        description: `Not found | ${meta.title}`,
      },
    }
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
