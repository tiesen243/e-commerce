'use client'

import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const Page: NextPage = () => {
  const { slug } = useParams()
  return <div>{slug} page</div>
}

export default Page
