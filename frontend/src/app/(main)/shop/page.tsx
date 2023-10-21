'use client'

import { useProduct } from '@/hooks'
import { NextPage } from 'next'

import { Loading } from '@/components'

const Page: NextPage = () => {
  const { products, error, isLoading } = useProduct()
  return !isLoading ? (
    <div>
      <h1>
        {products.map((prod) => (
          <div key={prod._id}>{prod.name}</div>
        ))}
      </h1>
    </div>
  ) : (
    <Loading />
  )
}

export default Page
