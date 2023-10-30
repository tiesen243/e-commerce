'use client'

import { CssBaseline, GlobalStyles, Paper, ThemeProvider, createTheme, css } from '@mui/material'
import { useTheme } from 'next-themes'
import { FC, PropsWithChildren, useEffect, useState } from 'react'

import { poppins } from '@/lib'

const MuiThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState(darkTheme)

  useEffect(() => {
    resolvedTheme === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme)
  }, [resolvedTheme])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Paper className="trans-colors"> {children}</Paper>
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
    background: {
      paper: '#f0f2f5',
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
    background: {
      paper: '#18191a',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
})

const globalStyles = css`
  body {
    transition: all 0.2s ease;
  }
`
