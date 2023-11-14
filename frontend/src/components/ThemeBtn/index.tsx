'use client'

import { useTheme } from 'next-themes'
import { Button } from '../ui'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export const ThemeBtn = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const toggleTheme = () =>
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
