import BackBtn from '@/components/comp/backBtn'
import axios from '@/lib/axios'
import { meta } from '@/lib/meta'
import { getIdFromSlug } from '@/lib/utils'
import { IProduct } from '@/types/product'
import type { Metadata, NextPage } from 'next'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)
  const product: IProduct = data.data
  return {
    title: `${product.name} | ${meta.title}`,
    description: product.description,
    openGraph: {
      title: `${product.name} | ${meta.title}`,
      description: product.description,
      url: `${meta.url}/product/${params.slug}`,
      type: 'website',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      title: `${product.name} | ${meta.title}`,
      description: product.description,
      images: product.image,
      card: 'summary_large_image',
    },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)

  const product: IProduct = data.data
  return (
    <>
      <BackBtn />
      <h1>{product.name}</h1>
    </>
  )
}

export default Page
