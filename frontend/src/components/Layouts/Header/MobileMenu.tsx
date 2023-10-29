'use client'

import { Close, Menu as MenuIcon } from '@mui/icons-material'
import { Slide } from '@mui/material'
import { useState } from 'react'
import Search from './Search'
import Menu from './Menu'

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button
        aria-label="Open mobile menu"
        className="flex h-11 w-11 aspect-square items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </button>

      <Slide
        direction="right"
        in={open}
        mountOnEnter
        unmountOnExit
        className="fixed inset-0 w-screen h-screen bg-white/60 dark:bg-black/60 backdrop-blur py-4 px-8 md:hidden z-50"
      >
        <div>
          <button
            aria-label="Open mobile menu"
            className="flex h-11 w-11 aspect-square items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden"
            onClick={() => setOpen(false)}
          >
            <Close />
          </button>

          <Search />

          <Menu />
        </div>
      </Slide>
    </>
  )
}

export default MobileMenu
