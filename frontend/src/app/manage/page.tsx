'use client'

import { NextPage } from 'next'
import { DataGrid } from '@mui/x-data-grid'

import { Loading } from '@/components'
import { col } from './otps'
import Toolbar from './Toolbar'
import { useProductByUser } from '@/lib'

const Page: NextPage = () => {
  const { products, isLoading } = useProductByUser()
  if (isLoading) return <Loading />

  return (
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
}

export default Page
