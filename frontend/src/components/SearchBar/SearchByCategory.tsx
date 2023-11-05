'use client'
import { Collapse, List, ListItemButton } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

import { Category, createUrl } from '@/lib'
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'
import { useSearchParams } from 'next/navigation'

const cate = Object.values(Category)
const SearchByCategory: React.FC = () => {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()
  const newParams = new URLSearchParams(searchParams.toString())
  console.log(newParams.toString())
  return (
    <List
      className="w-full"
      subheader={
        <ListItemButton component="div" className="main" onClick={() => setOpen(!open)}>
          Categories <span className="ml-auto">{open ? <ExpandLessRounded /> : <ExpandMoreRounded />}</span>
        </ListItemButton>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton className="w-full" component={Link} href={createUrl('/search', newParams)}>
          All
        </ListItemButton>
        {cate.map((item: string, idx: number) => (
          <ListItemButton key={idx} className="w-full" component={Link} href={`/search/${createUrl(item, newParams)}`}>
            {item}
          </ListItemButton>
        ))}
      </Collapse>
    </List>
  )
}

export default SearchByCategory
