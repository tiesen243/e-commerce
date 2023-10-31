import { NextPage } from 'next'

import { API_URL } from '@/lib'
import UpdateForm from './UpdateForm'

interface Props {
  params: {
    id: string
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const res = await fetch(`${API_URL}/product/${params.id}`)
  const { data: product } = await res.json()

  return (
    <>
      <UpdateForm product={product} />
    </>
  )
}

export default Page
