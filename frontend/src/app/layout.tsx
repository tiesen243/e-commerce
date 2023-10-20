// Metadata
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Yuki',
  description: 'Yuki Store',
}

import { Notification, ThemeBtn } from '@/components'
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
              <ThemeBtn />
            </ThemeProvider>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
