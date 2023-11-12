import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { Button, Box } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import Link from 'next/link'
import { useContext } from 'react'

import { ManageContext } from '@/contexts'
import { axios, deleteImage, showErrorToast, showSuccessToast } from '@/lib'

export const TableActionsBtn = (params: GridRenderCellParams) => {
  const { mutate, token } = useContext(ManageContext)
  const handleDelete = async (id: string, fileName: string) => {
    try {
      await axios.delete(`/product/delete/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      await deleteImage(fileName, 'product')
      showSuccessToast('Product deleted successfully')
      mutate()
    } catch (err: any) {
      showErrorToast(err.response.data.message)
    }
  }
  return (
    <Box className="flex w-full items-center justify-between">
      <Button
        variant="text"
        component={Link}
        href={`/manage/products/${params.row._id}`}
        color="info"
        endIcon={<EditRounded />}
      >
        Edit
      </Button>
      <Button
        variant="text"
        color="error"
        onClick={() => handleDelete(params.row._id, params.row.code)}
        endIcon={<DeleteRounded />}
      >
        Delete
      </Button>
    </Box>
  )
}
