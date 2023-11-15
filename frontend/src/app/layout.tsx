import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Next.js App',
  description: 'E-Commerce App built with Next.js and Shadcn/ui',
}

import './globals.css'
import fonts from '@/lib/fonts'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={fonts}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
