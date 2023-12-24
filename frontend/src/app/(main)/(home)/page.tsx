import { type NextPage } from 'next'

import HomeCarousel from '@/components/home/carousel'
import ThreeItemsGrid from '@/components/home/three-items-grid'
import { getProducts } from '@/lib/actions/product'

export const revalidate = 5
const Page: NextPage = async () => {
  const products = await getProducts({ limit: 13, sortBy: 'createdAt' })

  return (
    <>
      <ThreeItemsGrid products={products.slice(0, 3)} />
      <HomeCarousel products={products.slice(3, 13)} />
    </>
  )
}

export default Page
