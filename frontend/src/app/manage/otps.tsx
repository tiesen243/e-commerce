import {
  GridColDef,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

import ActionsBtn from './ActionsBtn'

export const col: GridColDef[] = [
  { field: 'code', headerName: 'Code', width: 100, type: 'number' },
  { field: 'name', headerName: 'Name', width: 250, type: 'string' },
  { field: 'category', headerName: 'Category', width: 150, type: 'string' },
  { field: 'price', headerName: 'Price', width: 100, type: 'number' },
  { field: 'stock', headerName: 'Stock', width: 100, type: 'number' },
  { field: 'createdAt', headerName: 'Created At', width: 200, type: 'Date' },
  { field: 'updatedAt', headerName: 'Updated At', width: 200, type: 'Date' },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params: GridRenderCellParams) => <ActionsBtn {...params} />,
  },
]

export const Toolbar = () => (
  <GridToolbarContainer className="flex justify-around">
    <Typography variant="caption" fontWeight="bold" className="text-2xl">
      Manage Product
    </Typography>
    <Button component={Link} href="/manage/create" variant="text" color="secondary">
      Create Product
    </Button>
    <GridToolbarColumnsButton sx={{ color: 'text.primary' }} />
    <GridToolbarFilterButton sx={{ color: 'text.primary' }} />
    <GridToolbarDensitySelector sx={{ color: 'text.primary' }} />
    <GridToolbarExport sx={{ color: 'text.primary' }} />
  </GridToolbarContainer>
)
