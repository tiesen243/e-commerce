import { deleteImage } from '@/utils/firebase'
import { ErrorToast, SuccessToast } from '@/utils/notify'
import { Box, Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { useSession } from 'next-auth/react'
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
      const { data } = useSession()
      const handleDelete = async (id: string, fileName: string) => {
        const res = await fetch(`/api/v1/product/delete/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${data?.token}`,
          },
        })
        if (res.status === 204) {
          await deleteImage(fileName)
          SuccessToast('Product deleted')
        } else ErrorToast(await res.text())
      }
      return (
        <Box className="flex justify-between items-center w-full">
          <Button variant="contained" color="info" component={Link} href={`/manage/product/${params.row._id}`}>
            Edit
          </Button>
          <Button
            variant="contained"
            component="a"
            color="error"
            onClick={() => handleDelete(params.row._id, params.row.name)}
          >
            Delete
          </Button>
        </Box>
      )
    },
  },
]
