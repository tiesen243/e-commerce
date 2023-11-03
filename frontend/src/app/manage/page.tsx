'use client'

import { Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'
import Link from 'next/link'
import { useContext } from 'react'

import { Loading } from '@/components'
import { ManageContext } from './manageContext'
import { Toolbar, col } from './otps'

const Page: NextPage = () => {
  const { products, error, isLoading } = useContext(ManageContext)
  if (isLoading) return <Loading text="Loading products..." />
  else if (error) {
    const { cause } = error
    if (cause.status === 404)
      return (
        <div className="flex flex-col items-center gap-4">
          <Typography variant="h4" fontWeight="bold">
            You have no products
          </Typography>

          <Button variant="contained" color="secondary" component={Link} href="/manage/create">
            Create new product
          </Button>
        </div>
      )
    else return <div>Something went wrong</div>
  }

  return (
    products && (
      <DataGrid
        columns={col}
        rows={products}
        getRowId={(row) => row.code}
        slots={{
          noRowsOverlay: () => <div>No data</div>,
          toolbar: () => <Toolbar />,
        }}
      />
    )
  )
}

export default Page
