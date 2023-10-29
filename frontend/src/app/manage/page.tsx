'use client'

import { Loading } from '@/components'
import useProductByUser from '@/hooks/useProductByUser'
import { showErrorToast } from '@/utils'
import { NextPage } from 'next'

const Page: NextPage = () => {
  const { products, error, isLoading } = useProductByUser()
  console.log(products, error, isLoading)
  if (isLoading) return <Loading />
  return (
    <div className="h-[10000px]">
      <h1>Page</h1>
    </div>
  )
}

export default Page
