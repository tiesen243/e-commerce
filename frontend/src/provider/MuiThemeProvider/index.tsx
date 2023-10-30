'use client'

import { CssBaseline, GlobalStyles, ThemeProvider, createTheme, css } from '@mui/material'
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
      <GlobalStyles styles={globalStyles} />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
})

export const globalStyles = css`
  :root {
    body {
      background-color: #f0f2f5;
      color: #000000;
    }
  }
  [class='dark'] {
    body {
      background-color: #18191a;
      color: #fff;
    }
  }
`
