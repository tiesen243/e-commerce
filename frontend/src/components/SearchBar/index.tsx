import { AppBar, Toolbar, Typography } from '@mui/material'

import SearchByCategory from './SearchByCategory'
import SearchByTag from './SearchByTag'
import Search from '../Layouts/Header/Search'

export const SearchBar: React.FC = () => {
  return (
    <AppBar position="sticky" className="w-full z-0 max-h-[60vh] h-[60vh] overflow-y-auto">
      <Toolbar className="flex flex-col w-full gap-4 my-4">
        <Search />

        <SearchByCategory />
        <SearchByTag />
      </Toolbar>
    </AppBar>
  )
}
