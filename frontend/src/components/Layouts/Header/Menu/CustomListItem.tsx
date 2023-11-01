'use client'

import { usePathname } from 'next/navigation'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { Menu } from './nav'

const CustomListItemBtn: React.FC<{ item: Menu }> = ({ item }) => {
  const pathName = usePathname()
  const textColor = (item: Menu) =>
    pathName === item.path
      ? 'text-black dark:text-white'
      : 'text-neutral-400 group-hover:underline underline-offset-8 group-hover:text-neutral-700 dark:group-hover:text-neutral-200'

  return (
    <ListItemButton component={Link} href={item.path} className="group text-sm">
      <ListItemIcon className={`md:hidden ${textColor(item)}`}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} className={textColor(item)} />
    </ListItemButton>
  )
}

export default CustomListItemBtn
