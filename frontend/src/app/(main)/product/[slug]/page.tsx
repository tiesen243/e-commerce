import BackBtn from '@/components/back-btn'
import axios from '@/lib/axios'
import { getIdFromSlug } from '@/lib/utils'
import { IProduct } from '@/types/product'
import type { Metadata, NextPage } from 'next'

interface Props {
  params: { slug: string }
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { data } = await axios.get(`/product/${getIdFromSlug(params.slug)}`)
  const product: IProduct = data.data
  return {
    title: `${product.name}`,
    description: product.description,
    openGraph: {
      title: `${product.name} `,
      description: product.description,
      url: `${appUrl}/product/${params.slug}`,
      type: 'website',
      images: [
        {
          url: product.image,
          width: 400,
          height: 400,
          alt: product.name,
        },
      ],
    },
    twitter: {
      title: `${product.name}`,
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
