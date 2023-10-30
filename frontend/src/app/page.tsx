'use client'

import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { useTheme } from 'next-themes'

const Page: NextPage = () => {
  const { theme, setTheme } = useTheme()
  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div>
      <Typography variant="h1">{theme}</Typography>

      <button onClick={handleTheme}>Light</button>
    </div>
  )
}

export default Page
