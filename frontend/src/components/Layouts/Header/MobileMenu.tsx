'use client'

import { Close, Menu as MenuIcon } from '@mui/icons-material'
import { Container, Slide } from '@mui/material'
import { useState } from 'react'

import Menu from './Menu'
import Search from './Search'

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <button aria-label="Open mobile menu" className="icon-btn" onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>

      <Slide
        direction="right"
        in={open}
        mountOnEnter
        unmountOnExit
        className="fixed inset-0 w-screen h-screen bg-white/60 dark:bg-black/10 backdrop-blur pt-2 md:pt-3 z-50"
      >
        <Container maxWidth="lg">
          <button className="icon-btn mb-4" onClick={() => setOpen(false)}>
            <Close />
          </button>

          <Search />

          <Menu />
        </Container>
      </Slide>
    </>
  )
}

export default MobileMenu
