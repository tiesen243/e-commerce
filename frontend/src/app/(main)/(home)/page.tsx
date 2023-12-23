import { type NextPage } from 'next'

import ThreeItemsGrid from '@/components/home/threeItemsGrid'
import Carousel from '@/components/home/carousel'

export const revalidate = 10
const Page: NextPage = async () => (
  <>
    <ThreeItemsGrid />
    <Carousel />
  </>
)

export default Page
