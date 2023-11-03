'use client'

import { Box, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { type IUser } from '@/lib'
import { DeleteRounded } from '@mui/icons-material'
import ConfirmDialog from './ConfirmDialog'

interface Props {
  user: IUser
  token: string
}
const Infomation: NextPage<Props> = ({ user, token }) => {
  const [open, setOpen] = useState<boolean>(false)

  const { push } = useRouter()
  const handleDelete = async () => {
    await fetch('/api/v1/user/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    })
    await signOut({ redirect: false })
    return push('/')
  }

  return (
    <Box className="flex flex-col gap-4">
      <Typography variant="body1">
        <b>Email:</b> {user.email}
      </Typography>

      <Typography variant="body1">
        <b>Role: </b> {user.role}
      </Typography>

      <Button variant="contained" component={Link} href="/account/info" color="secondary">
        Edit profile
      </Button>

      <Button variant="contained" component={Link} href="/account/password" color="secondary">
        Change password
      </Button>

      <Button variant="contained" component="a" endIcon={<DeleteRounded />} onClick={() => setOpen(true)} color="error">
        Delete account
      </Button>

      <ConfirmDialog open={open} setOpen={setOpen} handleDelete={handleDelete} />
    </Box>
  )
}

export default Infomation
