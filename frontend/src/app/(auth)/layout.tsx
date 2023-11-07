'use client'

import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { Container, IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Container maxWidth="sm" className="bg-tertiary-light dark:bg-tertiary-dark trans-colors rounded-lg shadow-lg">
        {children}
      </Container>
      <IconButton
        className="fixed right-4 bottom-4"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <LightModeRounded /> : <DarkModeRounded />}
      </IconButton>
    </div>
  )
}
export default AuthLayout
