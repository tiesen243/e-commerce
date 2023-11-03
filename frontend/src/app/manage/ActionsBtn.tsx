import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { GridRenderCellParams } from '@mui/x-data-grid'
import Link from 'next/link'
import { useContext } from 'react'

import { deleteImage, showErrorToast, showSuccessToast } from '@/lib'
import { ManageContext } from './manageContext'

const ActionsBtn = (params: GridRenderCellParams) => {
  const { mutate, token } = useContext(ManageContext)
  const handleDelete = async (id: string, fileName: string) => {
    const res = await fetch(`/api/v1/product/delete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    })
    if (res.status === 204) {
      await deleteImage(fileName, 'product')
      await mutate()
      showSuccessToast('Product deleted')
    } else showErrorToast(await res.text())
  }
  return (
    <Box className="flex w-full items-center justify-between">
      <Button variant="text" component={Link} href={`/manage/${params.row._id}`} color="info" endIcon={<EditRounded />}>
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

export default ActionsBtn
