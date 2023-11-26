'use client'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CreateForm = dynamic(() => import('@/components/product/create'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const Page: NextPage = () => (
  <div className="typography">
    <h1 className="text-center">Create new Product</h1>
    <CreateForm />
  </div>
)

export default Page
