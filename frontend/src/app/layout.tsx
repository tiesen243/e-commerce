import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Yuki E-Commerce',
  description: 'E-Commerce application built with Next.js ,TypeScript,Material UI, and Tailwind CSS',
}

import { poppins } from '@/lib'
import AppProviders from '@/provider'
import './globals.css'

const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={poppins.className}>
      <AppProviders>{children}</AppProviders>
    </body>
  </html>
)

export default RootLayout
