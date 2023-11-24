import CreateForm from '@/components/product/create'
import { NextPage } from 'next'

const Page: NextPage = () => (
  <main>
    <article className="typography">
      <h1>Create new product</h1>
    </article>

    <CreateForm />
  </main>
)

export default Page
