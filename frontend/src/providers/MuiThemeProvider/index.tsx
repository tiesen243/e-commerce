'use client'

import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, PaletteMode, ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { darkPalette, lightPalette } from './opts'

const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useTheme()
  const muiTheme = createTheme({
    palette: {
      mode: theme as PaletteMode,
      ...(theme === 'light' ? lightPalette : darkPalette),
    },
  })
  const handleToggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  // Prevents SSR issues
  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <ThemeProvider theme={muiTheme}>
      {children}
      <Box className="fixed bottom-4 right-4" onClick={handleToggleTheme}>
        <IconButton>{theme === 'light' ? <DarkMode /> : <LightMode />}</IconButton>
      </Box>
    </ThemeProvider>
  )
}

export default MuiThemeProvider
