import { Home } from '@mui/icons-material'
import { Avatar, Box, IconButton, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const settings = ['Profile', 'Cart', 'Logout']
const User: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const { user } = useSession().data || {}
  if (!user) return null

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = () => setAnchorElUser(null)
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Account settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.userName} src={user.avatar} />
        </IconButton>
      </Tooltip>

      <Menu
        keepMounted
        className="mt-4 md:-ml-8"
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={PaperProps}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            component={Link}
            href={`/manage/${setting.toLowerCase()}`}
            onClick={handleCloseUserMenu}
          >
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
export default User

const PaperProps = {
  elevation: 0,
  sx: {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    bgcolor: 'secondary.main',
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
      bgcolor: 'secondary.main',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  },
}
