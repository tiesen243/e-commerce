'use client'

import { Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'
import Link from 'next/link'

import { CustomToolBar, Loading } from '@/components'
import { useMyProduct } from '@/hooks'
import { col } from './options'

const Page: NextPage = () => {
  const { products, isLoading, error } = useMyProduct()

  if (error) {
    return (
      <div className="flex h-[80vh] flex-col items-center justify-center gap-8 overflow-y-hidden">
        <Typography variant="h1" fontSize={69}>
          {error.message}
        </Typography>
        <Button component={Link} href="/manage/product/create" color="info" variant="contained">
          Create Product
        </Button>
      </div>
    )
  }

  return !isLoading && products ? (
    <DataGrid
      slots={{ toolbar: CustomToolBar }}
      columns={col}
      rows={products}
      pageSizeOptions={[5, 10]}
      getRowId={(row) => row.code}
    />
  ) : (
    <Loading />
  )
}

export default Page
