'use client'

import { Box, Fab } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '@/redux/slicers/theme.slice'
import { RootState } from '@/redux/store'
import { DarkMode, LightMode } from '@mui/icons-material'

const ThemeBtn = () => {
  const dispatch = useDispatch()
  const theme = useSelector((state: RootState) => state.theme.themeState)

  const handleClick = () => dispatch(toggleTheme())
  return (
    <Box role="presentation" className="fixed bottom-4 right-4" onClick={handleClick}>
      <Fab
        size="small"
        aria-label="toggle theme"
        className="bg-secondary-light text-black transition-all duration-300 ease-linear hover:opacity-60 dark:bg-secondary-dark dark:text-white"
      >
        {theme === 'light' ? <DarkMode /> : <LightMode />}
      </Fab>
    </Box>
  )
}

export default ThemeBtn
