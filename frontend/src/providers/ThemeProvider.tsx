'use client'

import { setTheme } from '@/redux/slicers/theme.slice'
import { RootState } from '@/redux/store'
import { ThemeProvider as Provider, createTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const darkPalette = {
  primary: {
    main: '#6190E8',
    hover: '#4d4e4f',
    sub: '#18191',
  },
  secondary: {
    main: '#242526',
    sub: '#000428',
  },
}

const lightPalette = {
  primary: {
    main: '#6190E8',
    hover: '#e4e6e9',
    sub: '#f0f2f5',
  },
  secondary: {
    main: '#ffffff',
    sub: '#000428',
  },
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeState = useSelector((state: RootState) => state.theme.themeState)
  const theme = createTheme({
    palette: {
      mode: themeState === 'dark' ? 'dark' : 'light',
      ...(themeState === 'dark' ? darkPalette : lightPalette),
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

  const dispatch = useDispatch()
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'dark'
    document.documentElement.classList.toggle('dark', localTheme === 'dark')
    dispatch(setTheme(localTheme))
  }, [])

  return <Provider theme={theme}>{children}</Provider>
}

export default ThemeProvider
