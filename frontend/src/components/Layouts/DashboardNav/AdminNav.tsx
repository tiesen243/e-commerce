'use client'

import { AdminPanelSettingsRounded, ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const AdminNav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { data: session } = useSession()
  const className: string = session?.user.role !== 'admin' ? 'hidden' : ''

  return (
    <List className={className}>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <AdminPanelSettingsRounded />
        </ListItemIcon>
        <ListItemText primary="Admin" />

        {open ? <ExpandLessRounded /> : <ExpandMoreRounded />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {adminNav.map((item, idx: number) => (
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

export default AdminNav

const adminNav = [
  {
    name: 'Admin Panel',
    icon: <AdminPanelSettingsRounded />,
    href: '/manage',
  },
]
