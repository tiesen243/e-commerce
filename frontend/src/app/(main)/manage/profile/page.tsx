'use client'

import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Page: NextPage = () => {
  const { data } = useSession()

  return <div>{data?.user.userName}</div>
}

export default Page
