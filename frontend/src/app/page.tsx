import { NextPage } from 'next'

import { Carousel, ThreeItemsGrid } from '@/components'
import { Suspense } from 'react'

const Page: NextPage = () => {
  return (
    <>
      <ThreeItemsGrid />
      <Suspense>
        <Carousel />
      </Suspense>
    </>
  )
}

export default Page
