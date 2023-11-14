'use client'
import { Checkbox, FormControlLabel, List, ListSubheader, Typography } from '@mui/material'

import { Tag } from '@/lib'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const tags = Object.values(Tag)
const SearchByTag: React.FC = () => {
  const searchParams = useSearchParams()

  const [value, setvalue] = useState<string[]>(searchParams.get('tag')?.split(',') ?? [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: tag, checked } = event.target
    if (checked) setvalue([...value, tag])
    else setvalue(value.filter((v) => v !== tag))
  }

  return (
    <List
      className="max-h-96 overflow-y-auto grid grid-cols-1"
      subheader={
        <ListSubheader className="main flex gap-4 items-center">
          <Typography>Tags</Typography>
          <Link className="hover:underline underline-offset-8" href={`?tag=${value.join(',')}`}>
            Apply
          </Link>
          <Link className="hover:underline underline-offset-8" href="?tag=" onClick={() => setvalue([])}>
            Clear
          </Link>
        </ListSubheader>
      }
    >
      {tags.map((tag: string, idx: number) => (
        <FormControlLabel
          key={idx}
          control={<Checkbox color="secondary" value={tag} onChange={handleChange} checked={value.includes(tag)} />}
          value={tag}
          label={tag}
        />
      ))}
    </List>
  )
}

export default SearchByTag
