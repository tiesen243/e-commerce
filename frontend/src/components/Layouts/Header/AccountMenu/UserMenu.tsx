import {
  AdminPanelSettingsRounded,
  DarkModeRounded,
  Inventory2Rounded,
  LightModeRounded,
  Logout,
  ShoppingCartRounded,
} from '@mui/icons-material'
import { Avatar, Divider, Menu, PaperProps } from '@mui/material'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { MuiMenuItem } from '@/components'
import { IUser, showSuccessToast } from '@/lib'
import { useTheme } from 'next-themes'

interface Props {
  user: IUser
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
}

const UserMenu: React.FC<Props> = (props) => {
  const { user, anchorEl, open, handleClose } = props

  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const { push } = useRouter()
  const handleLogout = async () => {
    await signOut({ redirect: false })
    showSuccessToast('Logout successful')
    push('/')
  }
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={paperProps}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MuiMenuItem icon={<Avatar src={user.avatar} alt={user.userName} />} title={user.userName} href="/account" />
      <MuiMenuItem icon={<ShoppingCartRounded fontSize="small" />} title="My cart" href="/account/cart" />

      <Divider />

      {user.role === 'admin' && (
        <MuiMenuItem icon={<AdminPanelSettingsRounded fontSize="small" />} title="Admin panel" href="/admin" />
      )}
      {user.role !== 'user' && (
        <MuiMenuItem icon={<Inventory2Rounded fontSize="small" />} title="Product Manager" href="/manage" />
      )}

      <Divider />

      <MuiMenuItem
        icon={theme === 'light' ? <DarkModeRounded fontSize="small" /> : <LightModeRounded fontSize="small" />}
        title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        onClick={handleClick}
      />

      <MuiMenuItem icon={<Logout fontSize="small" />} title="Logout" onClick={handleLogout} />
    </Menu>
  )
}

export default UserMenu

const paperProps: PaperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    backgroundColor: 'primary.main',
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
      backgroundColor: 'primary.main',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}
