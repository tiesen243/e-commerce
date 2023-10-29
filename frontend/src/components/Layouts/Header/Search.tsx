import { SearchRounded } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'
import { useState } from 'react'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(search)
  }
  return (
    <form className="my-4" onSubmit={handleSearch}>
      <TextField
        fullWidth
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
    </form>
  )
}

export default Search
