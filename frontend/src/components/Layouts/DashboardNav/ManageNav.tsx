'use client'

import {
  CreateRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  Inventory2Rounded,
  InventoryRounded,
} from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

const ManageNav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <List>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <InventoryRounded />
        </ListItemIcon>
        <ListItemText primary="Manage Products" />

        {open ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {manageNav.map((item, idx: number) => (
            <ListItemButton sx={{ pl: 4 }} component={Link} href={item.href} key={idx}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  )
}

export default ManageNav

const manageNav = [
  {
    name: 'Manage Products',
    icon: <Inventory2Rounded />,
    href: '/manage',
  },
  {
    name: 'Create Product',
    icon: <CreateRounded />,
    href: '/manage/create',
  },
]
