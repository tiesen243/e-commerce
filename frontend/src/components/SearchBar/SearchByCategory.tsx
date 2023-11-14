'use client'
import { List, ListItemButton, ListItemText, ListSubheader } from '@mui/material'

import { Category, createUrl } from '@/lib'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const cate = Object.values(Category)
const SearchByCategory: React.FC = () => {
  const searchParams = useSearchParams()
  const pathName = usePathname()
  const currentPath = pathName.split('/')[pathName.split('/').length - 1].replace(/%20/g, ' ')

  return (
    <List
      className="w-full text-sm"
      subheader={
        <ListSubheader component="div" className="main">
          Categories
        </ListSubheader>
      }
    >
      <ListItemButton component={Link} href={createUrl('/search', new URLSearchParams(searchParams.toString()))}>
        <ListItemText
          primary="All"
          className={currentPath === 'search' ? 'underline underline-offset-8' : 'text-gray-400'}
        />
      </ListItemButton>
      {cate.map((category: string, idx: number) => (
        <ListItemButton
          key={idx}
          component={Link}
          href={createUrl(`/search/${category}`, new URLSearchParams(searchParams.toString()))}
        >
          <ListItemText
            primary={category}
            className={currentPath === category ? 'underline underline-offset-8' : 'text-gray-400'}
          />
        </ListItemButton>
      ))}
    </List>
  )
}

export default SearchByCategory
