'use client'

import { ExpandLessRounded, ExpandMoreRounded, InventoryRounded } from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
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
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Products" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}

export default ManageNav
