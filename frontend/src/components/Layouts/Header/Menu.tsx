'use client'

import { Home, Info } from '@mui/icons-material'
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Menu = {
  name: string
  icon: JSX.Element
  path: string
}
const menu: Menu[] = [
  {
    name: 'Home',
    icon: <Home />,
    path: '/',
  },
  {
    name: 'About',
    icon: <Info />,
    path: '/about',
  },
]
const Menu = () => {
  const pathName = usePathname()
  const textColor = (item: Menu) =>
    pathName === item.path
      ? 'text-black dark:text-white'
      : 'text-neutral-500 hover:underline underline-offset-8 hover:text-black dark:hover:text-white'

  return (
    <List className="gap-6 text-sm md:flex md:items-center">
      {menu.map((item: Menu, idx: number) => (
        <ListItemButton component={Link} href={item.path} key={idx} className={textColor(item)}>
          <ListItemIcon className={`block md:hidden ${textColor(item)}`}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </List>
  )
}

export default Menu
