'use client'
import { NextPage } from 'next'
import React from 'react'
import useFetch from './useFetch'
import { Button, Typography } from '@/components/ui'
import Link from 'next/link'

const Page: NextPage = () => {
  const { data, error } = useFetch()

  if (error)
    return (
      <div className="flex flex-col items-center gap-4">
        <Typography variant="h1" fontWeight="semibold">
          {error}
        </Typography>
        <Button asChild>
          <Link href="/manage/create">Create a new product</Link>
        </Button>
      </div>
    )

  console.log(data)

  return <div>Page</div>
}

export default Page
