'use client'

import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'

import Loading from '@/components/Loading'
import { useMyProduct } from '@/hooks/useMyProduct'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import { col } from './Head'

const Page: NextPage = () => {
  const { products, isLoading, error } = useMyProduct()

  if (error) {
    return (
      <div className="h-[80vh] overflow-y-hidden flex flex-col gap-8 items-center justify-center">
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
    <>
      <section className="flex justify-between items-center mb-4">
        <Typography variant="h1" fontSize={40}>
          My Product List
        </Typography>
        <Button component={Link} href="/manage/product/create" variant="contained" color="info">
          Create Product
        </Button>
      </section>
      <DataGrid columns={col} rows={products} pageSizeOptions={[5, 10]} getRowId={(row) => row.code} />
    </>
  ) : (
    <Loading />
  )
}

export default Page
