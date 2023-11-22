'use client'
import { NextPage } from 'next'
import React from 'react'
import { Typography } from '@/components/ui'
import CreateForm from '@/components/product/create'

const Page: NextPage = () => {
  return (
    <div>
      <Typography variant="h1" className="text-center font-bold">
        Create
      </Typography>

      <CreateForm />
    </div>
  )
}

export default Page
