import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Next.js App',
  description: 'E-Commerce App built with Next.js and Shadcn/ui',
}

import { cn } from '@/lib/utils'
import { AuthProvider, ThemeProvider } from '@/providers'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-screen bg-background font-sans antialiased', GeistSans.variable)}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </body>
  </html>
)

export default RootLayout
