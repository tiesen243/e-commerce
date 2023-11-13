'use client'

import { usePathname } from 'next/navigation'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import { Menu } from './nav'
import { useScreen } from '@/hooks'

const CustomListItemBtn: React.FC<{ item: Menu }> = ({ item }) => {
  const pathName = usePathname()
  const isMobile = useScreen() < 768

  const textColor = (item: Menu) =>
    pathName === `/search/${item.name.replace(' ', '%20')}`
      ? 'text-black dark:text-white'
      : 'text-neutral-400 group-hover:underline underline-offset-8 group-hover:text-neutral-700 dark:group-hover:text-neutral-200'

  return (
    <ListItem
      button={isMobile as false}
      component={Link}
      href={`/search/${item.name}`}
      className="group md:text-center whitespace-nowrap"
    >
      <ListItemIcon className={`md:hidden ${textColor(item)}`}>{item.icon}</ListItemIcon>
      <ListItemText
        primary={item.name}
        className={textColor(item)}
        primaryTypographyProps={{ className: 'text-xl md:text-sm' }}
      />
    </ListItem>
  )
}

export default CustomListItemBtn
