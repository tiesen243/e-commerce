'use client'

import { CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from 'next-themes'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import poppins from '@/utils/font'

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState(darkTheme)

  useEffect(() => {
    resolvedTheme === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [resolvedTheme])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#242526',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#242526',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
})
