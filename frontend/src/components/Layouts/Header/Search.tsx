'use client'

import { SearchRounded } from '@mui/icons-material'
import { FormControl, IconButton, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const { push } = useRouter()
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    push(`/search?query=${search}`)
  }
  return (
    <FormControl fullWidth component="form" onSubmit={handleSearch}>
      <TextField
        required
        variant="outlined"
        label="Search"
        color="secondary"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <SearchRounded />
            </IconButton>
          ),
        }}
      />
    </FormControl>
  )
}

export default Search
