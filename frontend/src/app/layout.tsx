export { default as metadata } from './metadata'

import { Notification } from '@/components'
import { AuthProvider, ReduxProvider, ThemeProvider } from '@/providers'
import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReduxProvider>
            <ThemeProvider>
              {children} <Notification />
            </ThemeProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
