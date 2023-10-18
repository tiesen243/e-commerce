import { deleteImage } from '@/utils/firebase'
import { ErrorToast, SuccessToast } from '@/utils/notify'
import { Box, Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { getCookie } from 'cookies-next'
import Link from 'next/link'

export const col: GridColDef[] = [
  { field: 'code', headerName: 'Code', width: 100, type: 'number' },
  { field: 'name', headerName: 'Name', width: 250, type: 'string' },
  { field: 'price', headerName: 'Price', width: 100, type: 'number' },
  { field: 'stock', headerName: 'Stock', width: 100, type: 'number' },
  { field: 'createdAt', headerName: 'Created At', width: 200, type: 'Date' },
  { field: 'updatedAt', headerName: 'Updated At', width: 200, type: 'Date' },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      const handleDelete = async (id: string, fileName: string) => {
        await fetch(`/api/product/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('token')}`,
          },
        })
        await deleteImage(fileName)
          .catch((err) => ErrorToast(err.message))
          .then(() => SuccessToast('Product deleted successfully'))
      }
      return (
        <Box className="flex justify-between items-center w-full">
          <Button variant="contained" color="primary" component={Link} href={`/product/${params.row._id}`}>
            Edit
          </Button>
          <Button variant="contained" color="error" onClick={() => handleDelete(params.row._id, params.row.name)}>
            Delete
          </Button>
        </Box>
      )
    },
  },
]
