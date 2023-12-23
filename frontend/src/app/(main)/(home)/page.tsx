import { type NextPage } from 'next'

import ThreeItemsGrid from '@/components/home/threeItemsGrid'
import Carousel from '@/components/home/carousel'

const Page: NextPage = async () => (
  <>
    <ThreeItemsGrid />
    <Carousel />
  </>
)

export default Page
