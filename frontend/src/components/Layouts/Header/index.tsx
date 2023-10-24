'use client'

import { Close, Menu } from '@mui/icons-material'
import { AppBar, Avatar, IconButton, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { useScreen } from '@/hooks'
import { toggleMenu } from '@/redux/slicers/ui.slice'
import { RootState } from '@/redux/store'
import Menubar from '../Sidebar/Menubar'
import AccountMenu from './AccountMenu'

const Header: React.FC = () => {
  const isMobile = useScreen() < 768
  const isOpen = useSelector((state: RootState) => state.ui.isMenuOpen)
  const dispatch = useDispatch()

  return (
    <AppBar position="fixed" color="inherit" className="z-40 transition-colors duration-300 ease-linear">
      <Toolbar className="mx-0 flex items-center justify-between md:mx-8">
        <Link href="/shop" className="flex items-center gap-4">
          <Avatar src="https://raw.githubusercontent.com/tiesen243/albums/main/logo.png" />
          <Typography variant="h1">Yuki</Typography>
        </Link>

        {!isMobile && <Menubar />}

        <section className="flex items-center gap-4">
          <AccountMenu />

          {isMobile && <IconButton onClick={() => dispatch(toggleMenu())}>{isOpen ? <Close /> : <Menu />}</IconButton>}
        </section>
      </Toolbar>
    </AppBar>
  )
}

export default Header
