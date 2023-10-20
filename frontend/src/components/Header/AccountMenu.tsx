'use client'

import { AdminPanelSettingsRounded, Inventory2Rounded, Logout, ShoppingCartRounded } from '@mui/icons-material'
import { Avatar, Button, Divider, IconButton, Menu, Tooltip } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

import IUser from '@/types/user.type'
import { SuccessToast } from '@/utils/notify'
import { useRouter } from 'next/navigation'
import StyledMenuItem from '../StyledMenuItem'

const AccountMenu: React.FC = () => {
  const { data } = useSession()
  const { push } = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleLogout = () => {
    signOut({ redirect: false })
    SuccessToast('Logout success')
    push('/shop')
  }

  if (!data)
    return (
      <Button component={Link} href="/login" variant="text" color="info">
        Login
      </Button>
    )

  const user: IUser = data.user
  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar src={user.avatar}></Avatar>
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={papperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <StyledMenuItem text={user.userName} disabled />
        <StyledMenuItem icon={<Avatar />} text="Profile" href="/manage/profile" />
        <StyledMenuItem icon={<ShoppingCartRounded />} text="My Cart" href="/manage/cart" />
        {user.role === 'seller' || user.role === 'admin' ? (
          <StyledMenuItem icon={<Inventory2Rounded />} text="Product" href="/manage/product" />
        ) : null}
        {user.role === 'admin' && (
          <StyledMenuItem icon={<AdminPanelSettingsRounded />} text="Admin" href="/manage/admin" />
        )}
        <Divider />
        <StyledMenuItem icon={<Logout />} text="Logout" onClick={handleLogout} />
      </Menu>
    </>
  )
}

export default AccountMenu

const papperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}
