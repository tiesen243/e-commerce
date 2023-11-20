'use client'

import { Button, Input } from '@/components/ui'
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
    <form onSubmit={handleSearch} className={className}>
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent"
      />
      <Button type="submit" variant="outline" size="icon" className="ml-2">
        <SearchIcon size={16} />
      </Button>
    </form>
  )
}

export default Search
