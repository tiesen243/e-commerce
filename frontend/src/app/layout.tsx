// Metadata
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Yuki',
  description: 'Yuki Store',
}

import ReduxProvider from '@/providers/ReduxProvider'
import ThemeProvider from '@/providers/ThemeProvider'

import './globals.css'
import GlobalProvider from '@/providers/GlobalProvider'
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeProvider>
            <GlobalProvider>{children}</GlobalProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}

export default RootLayout
