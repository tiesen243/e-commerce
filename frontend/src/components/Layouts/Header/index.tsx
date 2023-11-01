import { AppBar, Container, Toolbar } from '@mui/material'

import AccountMenu from './AccountMenu'
import Logo from './Logo'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Search from './Search'
import ThemeBtn from './ThemeBtn'

export const Header: React.FC = () => (
  <AppBar position="sticky" className="trans-colors">
    <Container maxWidth="lg">
      <Toolbar disableGutters className="flex justify-between gap-2 py-2">
        <MobileMenu />

        <section className="flex items-center">
          <Logo />

          <section className="hidden md:block ml-2">
            <Menu />
          </section>
        </section>

        <section className="hidden md:block flex-grow">
          <Search />
        </section>

        <section className="flex items-center gap-2">
          <ThemeBtn />
          <AccountMenu />
        </section>
      </Toolbar>
    </Container>
  </AppBar>
)
