'use client'

import { DataGrid } from '@mui/x-data-grid'
import { NextPage } from 'next'
import { useContext } from 'react'

import { ManageContext } from '@/contexts'
import { col, Loading, NotFound, Toolbar } from './utils'

const Page: NextPage = () => {
  const { products, isLoading } = useContext(ManageContext)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        columns={col}
        rows={products || []}
        getRowId={(row) => row.code}
        slots={{
          toolbar: Toolbar,
          loadingOverlay: Loading,
          noRowsOverlay: NotFound,
        }}
        loading={isLoading || !products}
      />
    </div>
  )
}

export default Page
