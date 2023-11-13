import SearchByTag from '@/components/SearchBar/SearchByTag'
import { Grid } from '@mui/material'

const SearchLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Grid container spacing={2}>
    <Grid item xs={0} md={2} className="hidden md:block">
      <SearchByTag />
    </Grid>
    <Grid item xs={12} md={8}>
      {children}
    </Grid>
    <Grid item xs={0} md={2} className="hidden md:block">
      dda
    </Grid>
  </Grid>
)

export default SearchLayout
