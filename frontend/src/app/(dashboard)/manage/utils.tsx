import { Button, FormHelperText, LinearProgress, TextField, TextFieldProps, Typography } from '@mui/material'
import {
  GridColDef,
  GridRenderCellParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from '@mui/x-data-grid'
import Link from 'next/link'
import { Fetcher } from 'swr'

import { TableActionsBtn } from '@/components'
import { IProduct, axios } from '@/lib'

export interface FormStatus {
  error: string | string[]
  isUpdating: boolean
}

export const FormError: React.FC<{ error: string | string[] }> = ({ error }) =>
  error && (
    <FormHelperText error>
      {typeof error === 'string' ? `* ${error}` : error.map((e, i) => <p key={i}>* {e}</p>)}
    </FormHelperText>
  )

export const StyledTextField: React.FC<TextFieldProps> = (props) => (
  <TextField required fullWidth color="secondary" {...props} />
)

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
    renderCell: (params: GridRenderCellParams) => <TableActionsBtn {...params} />,
  },
]

export const Toolbar = () => (
  <GridToolbarContainer className="flex justify-around">
    <Typography variant="caption" fontWeight="bold" className="text-2xl">
      Manage Product
    </Typography>
    <GridToolbarColumnsButton sx={{ color: 'text.primary' }} />
    <GridToolbarFilterButton sx={{ color: 'text.primary' }} />
    <GridToolbarDensitySelector sx={{ color: 'text.primary' }} />
    <GridToolbarExport sx={{ color: 'text.primary' }} />
  </GridToolbarContainer>
)
export const NotFound: React.FC = () => (
  <div className="flex flex-col items-center gap-4 w-full h-full justify-center">
    <Typography variant="h4" fontWeight="bold">
      You have no products
    </Typography>

    <Button variant="contained" color="secondary" component={Link} href="/manage/create">
      Create new product
    </Button>
  </div>
)

export const fetcher: Fetcher<IProduct[], [string, string]> = async ([url, token]) => {
  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data.data
  } catch (error: any) {
    throw new Error(error.response.data.message, {
      cause: error.response.status,
    })
  }
}

export const Loading: React.FC = () => <LinearProgress color="secondary" />
