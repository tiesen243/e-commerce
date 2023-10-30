'use client'

import { LightModeRounded, DarkModeRounded } from '@mui/icons-material'
import { Fab } from '@mui/material'
import { useTheme } from 'next-themes'

const ThemeBtn: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const handleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  return (
    <Fab onClick={handleTheme} size="small" variant="circular" className="bottom-4 right-4 fixed main rounded-full">
      {resolvedTheme === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
    </Fab>
  )
}

export default ThemeBtn
