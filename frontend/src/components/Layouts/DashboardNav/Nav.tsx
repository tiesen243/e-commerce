'use client'

import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { adminNav, manageNav } from './utils'
import { useSession } from 'next-auth/react'

const Nav: React.FC = () => {
  const { user } = useSession().data || {}

  return (
    <List className="flex flex-row md:flex-col overflow-x-auto">
      {user.role === 'admin' &&
        adminNav.map((item, idx) => (
          <ListItemButton key={idx} component={Link} href={item.href}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      {manageNav.map((item, idx) => (
        <ListItemButton key={idx} component={Link} href={item.href}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </List>
  )
}

export default Nav
