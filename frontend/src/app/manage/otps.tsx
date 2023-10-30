import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

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
