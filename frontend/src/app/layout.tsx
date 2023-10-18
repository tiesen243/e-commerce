// Metadata
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Yuki',
  description: 'Yuki Store',
}

import Notification from '@/components/Notification'
import ReduxProvider from '@/providers/ReduxProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            {children} <Notification />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout
