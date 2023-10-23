'use client'

import {
  AltRouteRounded,
  AutoStoriesRounded,
  Book,
  Category,
  ContactMailRounded,
  ExpandLess,
  ExpandMore,
  Home,
  MenuBookRounded,
  Search,
} from '@mui/icons-material'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

const Menubar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => setOpen(!open)

  return (
    <List className="md:w-1/6 md:fixed">
      <ListItemButton component={Link} href="/shop" sx={{ '&:hover': { borderBottom: '2px solid #6190e8' } }}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton component={Link} href="/search" sx={{ '&:hover': { borderBottom: '2px solid #6190e8' } }}>
        <ListItemIcon>
          <Search />
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItemButton>

      <ListItemButton sx={{ '&:hover': { borderBottom: '2px solid #6190e8' } }} onClick={handleClick}>
        <ListItemIcon>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {categories.map((cate, idx: number) => (
            <ListItemButton
              component={Link}
              href={`/shop/${cate.name}`}
              key={idx}
              sx={{ ml: 4, '&:hover': { borderBottom: '2px solid #6190e8' } }}
            >
              <ListItemIcon>{cate.icon}</ListItemIcon>
              <ListItemText primary={cate.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>

      <ListItemButton component={Link} href="/contact" sx={{ '&:hover': { borderBottom: '2px solid #6190e8' } }}>
        <ListItemIcon>
          <ContactMailRounded />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItemButton>
    </List>
  )
}

export default Menubar

const categories = [
  {
    name: 'Novel',
    icon: <MenuBookRounded />,
  },
  {
    name: 'Light Novel',
    icon: <Book />,
  },
  {
    name: 'Manga',
    icon: <AutoStoriesRounded />,
  },
  {
    name: 'Other',
    icon: <AltRouteRounded />,
  },
]
