'use client'

import { ThemeProvider as Provider, createTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setTheme } from '@/redux/slicers/theme.slice'
import { RootState } from '@/redux/store'
import { darkTheme, lightTheme } from './opts'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const themeState = useSelector((state: RootState) => state.theme.themeState)
  const theme = createTheme({
    palette: {
      mode: themeState === 'dark' ? 'dark' : 'light',
      ...(themeState === 'dark' ? darkTheme : lightTheme),
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Provider theme={theme}>{children}</Provider>
}

export default ThemeProvider
