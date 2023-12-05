import { NextPage } from 'next'
import React from 'react'

interface Props {
  searchParams: {
    q: string
  }
}

const Page: NextPage<Props> = ({ searchParams }) => {
  return <div>Page {searchParams.q}</div>
}

export default Page
