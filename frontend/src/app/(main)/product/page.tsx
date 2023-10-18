'use client'

import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'

import { useMyProduct } from '@/hooks/useMyProduct'
import { col } from './Head'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const Page: NextPage = () => {
  const { data, isLoading, error } = useMyProduct()

  if (error) {
    return (
      <div className="h-[80vh] overflow-y-hidden flex flex-col items-center justify-center">
        <Typography variant="h1" fontSize={69}>
          {error.message}
        </Typography>
        <Button component={Link} href="product/create" variant="contained">
          Create Product
        </Button>
      </div>
    )
  }

  return !isLoading && data?.data ? (
    <>
      <section className="flex justify-between items-center mb-4">
        <Typography variant="h1" fontSize={69}>
          My Product List
        </Typography>
        <Button component={Link} href="product/create" variant="contained" color="secondary">
          Create Product
        </Button>
      </section>
      <DataGrid columns={col} rows={data.data} pageSizeOptions={[5, 10]} getRowId={(row) => row.code} />
    </>
  ) : (
    <div>Loading...</div>
  )
}

export default Page
