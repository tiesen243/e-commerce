'use client'

import { NextPage } from 'next'

import { Loading } from '@/components'
import useProductByUser from '@/hooks/useProductByUser'
import { DataGrid } from '@mui/x-data-grid'
import Toolbar from './Toolbar'
import { col } from './otps'

const Page: NextPage = () => {
  const { products, isLoading, error } = useProductByUser()

  if (isLoading || !products) return <Loading />
  else if (error) return <div>{error.message}</div>
  return (
    <DataGrid
      slots={{ toolbar: Toolbar, noRowsOverlay: Loading }}
      columns={col}
      rows={products}
      pageSizeOptions={[1, 2]}
      getRowId={(row) => row.code}
    />
  )
}

export default Page
