// Metadata
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Yuki',
  description: 'Yuki Store',
}

import Notification from '@/components/Notification'
import AuthProvider from '@/providers/AuthProvider'
import ReduxProvider from '@/providers/ReduxProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import './globals.css'
import ThemeBtn from '@/components/ThemeBtn'

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
