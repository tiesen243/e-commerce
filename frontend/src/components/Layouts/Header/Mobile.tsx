import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { useState } from 'react'

import Tittle from './Title'
interface MobileProps {
  title: string
  pages: string[]
}

const Mobile: React.FC<MobileProps> = ({ title, pages }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    )
      return
    setIsOpen(open)
  }
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Tittle title={title} display={{ xs: 'none', md: 'flex' }} />
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box className="p-4">
          <Typography>{title}</Typography>
          <List>
            {pages.map((page, index) => (
              <ListItemButton key={index} onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <AdbIcon />
                </ListItemIcon>
                <ListItemText primary={page} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Mobile
