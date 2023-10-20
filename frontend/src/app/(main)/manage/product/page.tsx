'use client'

import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'

import { useMyProduct } from '@/hooks/useMyProduct'
import { col } from './Head'
import { Button, CircularProgress, Typography } from '@mui/material'
import Link from 'next/link'
import Loading from '@/components/Loading'

const Page: NextPage = () => {
  const { products, isLoading, error } = useMyProduct()

  if (error) {
    return (
      <div className="h-[80vh] overflow-y-hidden flex flex-col gap-8 items-center justify-center">
        <Typography variant="h1" fontSize={69}>
          {error.message}
        </Typography>
        <Button component={Link} href="/shop/product/create" color="info" variant="contained">
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
        <Button component={Link} href="/shop/product/create" variant="contained" color="info">
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
