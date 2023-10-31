'use client'

import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'

import { Loading } from '@/components'
import { useProductByUser } from '@/lib'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import Toolbar from './Toolbar'
import { col } from './otps'

const Page: NextPage = () => {
  const { products, isLoading, error } = useProductByUser()
  if (isLoading) return <Loading text="Loading products..." />
  else if (error)
    return (
      <div className="flex flex-col items-center gap-8">
        <Typography variant="h3" textAlign="center" fontWeight="bold">
          {error.message}
        </Typography>

        <Button component={Link} variant="outlined" color="secondary" href="/manage/create">
          Create Product
        </Button>
      </div>
    )

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
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    )
  )
}

export default Page
