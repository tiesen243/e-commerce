export { default as metadata } from './metadata'

import { Notification } from '@/components'
import { CssBaseline } from '@mui/material'
import './globals.css'
import AppProvider from '@/providers'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <CssBaseline />
          {children} <Notification />
        </AppProvider>
      </body>
    </html>
  )
}

export default RootLayout
