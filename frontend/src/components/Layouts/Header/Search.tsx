'use client'

import { SearchRounded } from '@mui/icons-material'
import { FormControl, IconButton, TextField } from '@mui/material'
import { useState } from 'react'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search)
  }
  return (
    <FormControl fullWidth component="form" onSubmit={handleSearch}>
      <TextField
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
