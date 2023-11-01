'use client'

import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

const ThemeBtn: FC = () => {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const handleClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <IconButton onClick={handleClick} color="secondary" size="small">
      {theme === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
    </IconButton>
  )
}

export default ThemeBtn
