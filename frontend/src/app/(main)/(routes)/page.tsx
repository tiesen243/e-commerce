'use client'

import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Page: NextPage = () => {
  const { refresh } = useRouter()
  useEffect(() => refresh(), [])
  return (
    <div>
      <h1>Page</h1>
    </div>
  )
}

export default Page
