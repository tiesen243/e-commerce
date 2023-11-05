import React from 'react'
import { Grid } from '@mui/material'
import { SearchBar } from '@/components'

const SearchLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <SearchBar />
      </Grid>
      <Grid item xs={12} md={8}>
        {children}
      </Grid>
    </Grid>
  )
}

export default SearchLayout
