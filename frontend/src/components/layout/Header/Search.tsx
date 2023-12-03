'use client'

import { Button, Input } from '@/components/ui'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'

interface SearchProps {
  className: string
}
const Search: React.FC<SearchProps> = ({ className }) => {
  const [search, setSearch] = useState<string>('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) return
    console.log(search)
  }
  return (
    <form onSubmit={handleSearch} className={cn('relative h-10 w-auto', className)}>
      <Input
        className="pr-10"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button
        type="submit"
        variant="link"
        size="icon"
        className="absolute right-3 top-1/2 grid h-5 w-5 -translate-y-1/2 place-items-center"
      >
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
