'use client'
import { Tag } from '@/lib'
import { MultiSelect } from '@/components'
import { useState } from 'react'
import { Button, FormGroup } from '@mui/material'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const tags = Object.values(Tag)
const MobileTag = () => {
  const search = useSearchParams()
  const tag = search.get('tags')
  const [value, setValue] = useState<string[]>(tag?.split(',') ?? [])

  return (
    <FormGroup className="grid grid-cols-8 gap-4 items-center mb-4 md:hidden">
      <MultiSelect className="col-span-6" value={value} setValue={setValue} label="Tags" data={tags} />
      <Button variant="contained" color="secondary" component={Link} href={`?tags=${value.join(',')}`}>
        Apply
      </Button>
      <Button variant="contained" color="secondary" component={Link} href="?tags=" onClick={() => setValue([])}>
        Clear
      </Button>
    </FormGroup>
  )
}

export default MobileTag
