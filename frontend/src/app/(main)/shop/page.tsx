'use client'

import Loading from '@/components/Loading'
import useProduct from '@/hooks/useProduct'
import { NextPage } from 'next'

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
