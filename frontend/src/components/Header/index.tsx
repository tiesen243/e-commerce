'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import AccountMenu from './AccountMenu'

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="secondary" className="transition-colors duration-300 ease-linear">
      <Toolbar className="flex justify-between">
        <Typography variant="h1" component={Link} href="/shop">
          Yuki&apos;s Shop
        </Typography>

        <AccountMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
