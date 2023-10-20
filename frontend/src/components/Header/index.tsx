'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'
import AccountMenu from './AccountMenu'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="secondary" className="transition-colors duration-300 ease-linear">
      <Toolbar className="flex justify-between">
        <Typography variant="h1" component={Link} href="/shop">
          Yuki's Shop
        </Typography>

        <AccountMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
