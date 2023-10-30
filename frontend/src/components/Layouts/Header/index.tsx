import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import AccountMenu from './AccountMenu'
import Search from './Search'
import { Avatar, Typography } from '@mui/material'
import { logo } from '@/utils'

const Header: React.FC = () => (
  <AppBar position="sticky">
    <Container maxWidth="lg">
      <Toolbar disableGutters className="flex justify-between gap-2">
        <MobileMenu />

        <section className="flex items-center">
          <Avatar alt="Logo" src={logo} sx={{ width: 32, height: 32, mr: 1 }} />
          <Typography variant="h6" component="div" className="font-bold block md:hidden lg:block">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </Typography>

          <section className="hidden md:block ml-2">
            <Menu />
          </section>
        </section>

        <section className="hidden md:block flex-grow">
          <Search />
        </section>

        <AccountMenu />
      </Toolbar>
    </Container>
  </AppBar>
)

export default Header
