import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material'

import AccountMenu from './AccountMenu'
import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Search from './Search'
import Link from 'next/link'
import ThemeBtn from './ThemeBtn'
import { logo } from '@/lib'

export const Header: React.FC = () => (
  <AppBar position="sticky" className="trans-colors">
    <Container maxWidth="lg">
      <Toolbar disableGutters className="flex justify-between gap-2">
        <MobileMenu />

        <section className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Avatar alt="Logo" src={logo} sx={{ width: 32, height: 32 }} />
            <Typography variant="h6" component="div" className="font-bold block md:hidden lg:block">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Typography>
          </Link>

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
