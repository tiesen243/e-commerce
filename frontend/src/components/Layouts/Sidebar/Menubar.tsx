'use client'

import { CustomListItemButton2 } from '@/components'
import { useScreen } from '@/hooks'
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
import { Collapse, List, Menu } from '@mui/material'
import { useState } from 'react'

const Menubar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isMobile = useScreen() < 768

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(!isOpen)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <List className="md:flex md:gap-4">
      <CustomListItemButton2 href="/shop" icon={<Home />} text="Home" />

      <CustomListItemButton2 icon={<Search />} href="/shop/search" text="Search" />

      <CustomListItemButton2 icon={<Category />} onClick={handleClick} text="Category" id="cate">
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </CustomListItemButton2>

      {isMobile ? (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {categories.map((cate, idx: number) => (
              <CustomListItemButton2 key={idx} icon={cate.icon} text={cate.name} className="ml-8 md:ml-0" />
            ))}
          </List>
        </Collapse>
      ) : (
        <Menu
          id="cate"
          open={isOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          onClick={handleClick}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <List component="div" disablePadding>
            {categories.map((cate, idx: number) => (
              <CustomListItemButton2 key={idx} icon={cate.icon} text={cate.name} className="ml-8 md:ml-0" />
            ))}
          </List>
        </Menu>
      )}

      <CustomListItemButton2 href="/shop/contact" icon={<ContactMailRounded />} text="Contact" />
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
