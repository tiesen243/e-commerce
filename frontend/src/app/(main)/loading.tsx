import type { NextPage } from 'next'

import { CarouselSkeleton, ThreeItemsGridSkeleton } from '@/components/home/skeleton'

const LoadingPage: NextPage = () => (
  <>
    <ThreeItemsGridSkeleton />
    <CarouselSkeleton />
  </>
)

export default LoadingPage
