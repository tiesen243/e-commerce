'use client'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const CreateForm = dynamic(() => import('@/components/product/create'), { ssr: false })

const Page: NextPage = () => (
  <main>
    <article className="typography">
      <h1>Create new product</h1>
    </article>

    <CreateForm />
  </main>
)

export default Page
