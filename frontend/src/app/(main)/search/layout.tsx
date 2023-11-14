import { MobileTag, SearchByCategory, SearchByTag } from '@/components/SearchBar'
import { Grid } from '@mui/material'

const SearchLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Grid container spacing={2}>
    <Grid item xs={0} md={2} className="hidden md:block">
      <SearchByCategory />
    </Grid>
    <Grid item xs={12} md={7}>
      <MobileTag />
      {children}
    </Grid>
    <Grid item xs={0} md={3} className="hidden md:block">
      <SearchByTag />
    </Grid>
  </Grid>
)

export default SearchLayout
