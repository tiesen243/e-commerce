'use client'

import poppins from '@/utils/font'
import { ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from 'next-themes'

const MuiThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { theme: nextTheme } = useTheme()

  const theme = createTheme({
    palette: {
      mode: nextTheme === 'dark' ? 'dark' : 'light',
      ...(nextTheme === 'dark' ? darkPalette : lightPalette),
    },
    typography: {
      fontFamily: poppins.style.fontFamily,
    },
  })
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiThemeProvider

const lightPalette = {
  secondary: {
    main: '#242526',
  },
}

const darkPalette = {
  secondary: {
    main: '#ffffff',
  },
}
