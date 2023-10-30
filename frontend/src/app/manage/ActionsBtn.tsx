import { DeleteRounded, EditRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

import { deleteImage, showErrorToast, showSuccessToast } from '@/lib'

const ActionsBtn = (params: GridRenderCellParams) => {
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
      await deleteImage(fileName, 'product')
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
        onClick={() => handleDelete(params.row._id, params.row.name)}
        endIcon={<DeleteRounded />}
      >
        Delete
      </Button>
    </Box>
  )
}

export default ActionsBtn
