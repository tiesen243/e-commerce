'use client'

import { AppBar, Avatar, Container, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

import Menu from './Menu'
import MobileMenu from './MobileMenu'
import Search from './Search'
import AccountMenu from './AccountMenu'
import { logo } from '@/utils'

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" className="main">
      <Toolbar>
        <Container maxWidth="lg" className="flex justify-between items-center p-4 md:p-0">
          <MobileMenu />

          <section className="flex w-full md:w-1/3">
            <Link href="/" className="mr-2 flex w-full items-center justify-center lg:mr-6">
              <Avatar src={logo} alt="logo" />
              <Typography className="ml-2 flex-none text-xl font-bold uppercase md:hidden lg:block">Yuki</Typography>
            </Link>

            <section className="hidden md:block w-full">
              <Menu />
            </section>
          </section>

          <section className="hidden md:flex justify-center">
            <Search />
          </section>

          <AccountMenu />
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
