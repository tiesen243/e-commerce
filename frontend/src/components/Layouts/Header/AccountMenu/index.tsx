'use client'

import { Button } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

import useRefreshToken from '@/hooks/useRefreshToken'
import UserAvatar from './UserAvatar'
import UserMenu from './UserMenu'

const AccountMenu: React.FC = () => {
  const user = useRefreshToken()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return user ? (
    <>
      <UserAvatar user={user} handleClick={handleClick} open={open} />
      <UserMenu user={user} anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </>
  ) : (
    <Button variant="contained" component={Link} color="secondary" href="/auth/login">
      Login
    </Button>
  )
}

export default AccountMenu
