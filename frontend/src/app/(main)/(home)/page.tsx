import { type NextPage } from 'next'

import Carousel from '@/components/home/carousel'
import ThreeItemsGrid from '@/components/home/threeItemsGrid'
import axios from '@/lib/axios'

export const revalidate = 3
const Page: NextPage = async () => {
  const { data } = await axios.get('/product?limit=13&sortBy=createdAt&isAscending=false')

  const threeItemsData = data.data.slice(0, 3)
  const carouselData = data.data.slice(3, 13)
  return (
    <>
      <ThreeItemsGrid products={threeItemsData} />
      <Carousel products={carouselData} />
    </>
  )
}

export default Page
