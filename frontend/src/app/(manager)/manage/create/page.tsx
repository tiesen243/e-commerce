'use client'
import { NextPage } from 'next'
import React from 'react'
import CreateForm from './CreateForm'
import { Typography } from '@/components/ui'

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
