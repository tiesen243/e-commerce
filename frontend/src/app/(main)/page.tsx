import type { NextPage } from 'next'

import Carousel from '@/components/home/carousel'
import ThreeItemsGrid from '@/components/home/three-items-grid'

const Page: NextPage = () => (
  <>
    <ThreeItemsGrid />
    <Carousel />
  </>
)

export default Page
