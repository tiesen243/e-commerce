'use client'

import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeBtn: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <IconButton onClick={handleClick} color="secondary">
      {theme === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  )
}

export default ThemeBtn
