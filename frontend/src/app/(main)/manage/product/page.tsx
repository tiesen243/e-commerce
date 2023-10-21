'use client'

import { Button, Typography } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { NextPage } from 'next'
import Link from 'next/link'

import { CustomToolBar, Loading } from '@/components'
import { useMyProduct } from '@/hooks'
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
      <section className="flex justify-end items-center mb-4">
        <Button component={Link} href="/manage/product/create" variant="contained" color="info">
          Create Product
        </Button>
      </section>
      <DataGrid
        slots={{ toolbar: CustomToolBar }}
        columns={col}
        rows={products}
        pageSizeOptions={[5, 10]}
        getRowId={(row) => row.code}
      />
    </>
  ) : (
    <Loading />
  )
}

export default Page
