'use client'

import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Page: NextPage = () => {
  const { data } = useSession()

  return <main>{data?.user.userName}</main>
}

export default Page
