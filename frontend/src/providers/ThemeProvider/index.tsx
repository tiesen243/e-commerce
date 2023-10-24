'use client'

import { ThemeProvider as Provider, createTheme } from '@mui/material'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
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

  return <Provider theme={theme}>{children}</Provider>
}

export default ThemeProvider
