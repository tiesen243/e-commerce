'use client'

import { DarkMode, LightMode } from '@mui/icons-material'
import { ThemeProvider, createTheme, Box, IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme, setTheme } = useTheme()
  const muiTheme = createTheme({
    palette: {
      mode: theme === 'light' ? 'light' : 'dark',
    },
  })

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <ThemeProvider theme={muiTheme}>
      {children}
      <Box role="presentation" className="fixed bottom-4 right-4" onClick={handleToggleTheme}>
        <IconButton color="inherit">{theme === 'light' ? <DarkMode /> : <LightMode />}</IconButton>
      </Box>
    </ThemeProvider>
  )
}

export default MuiThemeProvider
