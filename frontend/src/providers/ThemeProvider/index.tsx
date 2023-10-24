'use client'

import { Box, Fab, IconButton, ThemeProvider as Provider, createTheme } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { RootState } from '@/redux/store'
import { DarkMode, LightMode } from '@mui/icons-material'
import { toggleTheme } from '@/redux/slicers/ui.slice'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeState = useSelector((state: RootState) => state.ui.themeState)
  const theme = createTheme({
    palette: {
      mode: themeState === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#6190E8',
      },
    },
    typography: {
      fontFamily: 'unset, sans-serif',
      h1: {
        fontFamily: 'fantasy, sans-serif',
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      subtitle2: {
        fontFamily: 'monospace',
      },
    },
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeState === 'dark')
  }, [themeState])

  const dispatch = useDispatch()
  return (
    <Provider theme={theme}>
      {children}

      <Box sx={{ position: 'fixed', bottom: 16, right: 16 }} role="presentation">
        <Fab
          size="small"
          onClick={() => dispatch(toggleTheme())}
          className="bg-secondary-light text-black transition-colors duration-300 ease-linear dark:bg-secondary-dark dark:text-white"
        >
          {themeState === 'light' ? <DarkMode /> : <LightMode />}
        </Fab>
      </Box>
    </Provider>
  )
}

export default ThemeProvider
