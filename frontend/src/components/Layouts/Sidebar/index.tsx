'use client'

import { Avatar, Box, Typography } from '@mui/material'
import Menubar from './Menubar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { toggleMenu } from '@/redux/slicers/ui.slice'

const Sidebar: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.ui.isMenuOpen)
  const dispatch = useDispatch()

  return (
    <>
      <Box
        onClick={() => dispatch(toggleMenu())}
        className="fixed inset-0 z-50 h-screen w-screen"
        style={{ display: isOpen ? 'block' : 'none' }}
      />

      <Box
        className="fixed inset-0 z-50 h-full w-1/2 transform-gpu bg-secondary-light p-4 transition-all duration-300 ease-linear dark:bg-secondary-dark md:w-1/3"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <Box className="flex items-center gap-4">
          <Avatar src="https://raw.githubusercontent.com/tiesen243/albums/main/logo.png" />
          <Typography variant="h1">Yuki</Typography>
        </Box>

        <Menubar />
      </Box>
    </>
  )
}

export default Sidebar
