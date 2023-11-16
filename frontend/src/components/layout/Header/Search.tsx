'use client'

import { Input } from '@/components/ui'
import { useState } from 'react'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!search) return
    console.log(search)
  }
  return (
    <form onSubmit={handleSearch} className="hidden md:flex">
      <Input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent"
      />
    </form>
  )
}

export default Search
