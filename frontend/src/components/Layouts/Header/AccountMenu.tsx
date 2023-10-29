'use client'

import { AdminPanelSettingsRounded, Inventory2Rounded, Logout, ShoppingCartRounded } from '@mui/icons-material'
import { Avatar, Button, Divider, IconButton, Menu, Tooltip } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

import { MuiMenuItem } from '@/components'
import { showSuccessToast } from '@/utils'

const AccountMenu: React.FC = () => {
  const { user } = useSession().data ?? {}

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const handleLogout = async () => {
    await signOut({ redirect: false })
    showSuccessToast('Logout successful')
  }

  return user ? (
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
          <Avatar src={user.avatar} alt={user.userName} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={PaperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MuiMenuItem icon={<Avatar src={user.avatar} alt={user.userName} />} title={user.userName} href="/account" />
        <MuiMenuItem icon={<ShoppingCartRounded fontSize="small" />} title="My cart" href="/account/cart" />

        {user.role === 'admin' && (
          <MuiMenuItem icon={<AdminPanelSettingsRounded fontSize="small" />} title="Admin panel" href="/admin" />
        )}
        {user.role !== 'user' && (
          <MuiMenuItem icon={<Inventory2Rounded fontSize="small" />} title="Product Manager" href="/manage" />
        )}

        <Divider />
        <MuiMenuItem icon={<Logout fontSize="small" />} title="Logout" onClick={handleLogout} />
      </Menu>
    </>
  ) : (
    <Button variant="contained" component={Link} color="secondary" href="/auth/login">
      Login
    </Button>
  )
}

export default AccountMenu

const PaperProps = {
  elevation: 0,
  className: 'bg-secondary-light dark:bg-secondary-dark before:bg-secondary-light dark:before:bg-secondary-dark',
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
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}
