'use client'

import { AppBar, Container, Toolbar } from '@mui/material'

import Destop from './Destop'
import Mobile from './Mobile'
import User from './User'

const pages = ['Products', 'Pricing', 'Blog']

const Header: React.FC = () => {
  const title = 'Yuki'

  return (
    <AppBar position="sticky" color="secondary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Mobile title={title} pages={pages} />
          <Destop title={title} pages={pages} />
          <User />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
