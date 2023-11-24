import CreateForm from '@/components/product/create'
import { NextPage } from 'next'
import { Suspense } from 'react'

const Page: NextPage = () => (
  <main>
    <article className="typography">
      <h1>Create new product</h1>
    </article>

    <Suspense>
      <CreateForm />
    </Suspense>
  </main>
)

export default Page
