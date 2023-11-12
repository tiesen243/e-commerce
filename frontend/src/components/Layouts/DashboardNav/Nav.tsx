'use client'

import { ExpandLessRounded, ExpandMoreRounded, InventoryRounded } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

interface NavProps {
  icon: React.ReactNode
  title: string
  items: {
    name: string
    icon: any
    href: string
  }[]
}

const Nav: React.FC<NavProps> = ({ icon, title, items }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(!open)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  return (
    <List>
      <ListItemButton
        onClick={open ? handleClose : handleClick}
        component="button"
        className="w-full"
        id="manage-button"
        aria-controls={open ? 'manage-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={title} />

        {open ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit className="hidden md:flex">
        {items.map((item, idx: number) => (
          <ListItemButton className="md:pl-8" component={Link} href={item.href} key={idx}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </Collapse>

      <Menu
        id="manage-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'manage-button',
        }}
        className="flex md:hidden"
      >
        <List component="div" disablePadding onClick={handleClose}>
          {items.map((item, idx: number) => (
            <ListItemButton className="md:pl-8" component={Link} href={item.href} key={idx}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </List>
  )
}

export default Nav
