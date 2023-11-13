'use client'

import { CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material'
import { useTheme } from 'next-themes'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { LoadingPage } from '@/components'
import { poppins } from '@/lib'

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState(darkTheme)
  const [mounted, setMounted] = useState<boolean>(false)
  setTimeout(() => setMounted(true), 1000)

  useEffect(() => {
    resolvedTheme === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [resolvedTheme])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {mounted ? <Paper className="trans-colors"> {children}</Paper> : <LoadingPage />}
    </ThemeProvider>
  )
}

export default MuiThemeProvider

const defaultOpts = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
}

const lightTheme = createTheme({
  ...defaultOpts,
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#242526',
    },
    background: {
      paper: '#f0f2f5',
    },
  },
})

const darkTheme = createTheme({
  ...defaultOpts,
  palette: {
    mode: 'dark',
    primary: {
      main: '#242526',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      paper: '#18191a',
    },
  },
})
