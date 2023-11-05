'use client'

import { Collapse, List, ListItemButton, ListSubheader } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

import { Tag } from '@/lib'
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'

const tag = Object.values(Tag)
const SearchByTag: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [tagList, setTagList] = useState<string[]>([])

  return (
    <List
      className="w-full"
      subheader={
        <ListItemButton component="div" className="main" onClick={() => setOpen(!open)}>
          Tag <span className="ml-auto">{open ? <ExpandLessRounded /> : <ExpandMoreRounded />}</span>
        </ListItemButton>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List subheader={<ListItemButton />}>
          <ListSubheader component={Link} href={`?tag=${tagList.join(',')}`} className="text-sky-500 w-full">
            Apply
          </ListSubheader>
          {tag.map((item: string, idx: number) => (
            <ListItemButton key={idx} onClick={() => setTagList([...tagList, item])}>
              {item}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  )
}

export default SearchByTag
