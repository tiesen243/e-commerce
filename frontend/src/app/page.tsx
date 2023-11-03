'use client'

import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Page: NextPage = () => {
  const { data } = useSession()
  console.log(data)
  return <div>Home Page</div>
}

export default Page
