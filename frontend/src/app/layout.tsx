import type { Metadata } from 'next'

const appName = process.env.NEXT_PUBLIC_APP_NAME || ''
const appUrl = process.env.NEXT_PUBLIC_APP_URL || ''
const description =
  'A simple e-commerce website built with Next.js, TypeScript, MongoDB, and Tailwind CSS.'
export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: appName,
    template: '%s | ' + appName,
  },
  description: description,
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: appName,
    url: appUrl,
    title: {
      default: appName,
      template: '%s | ' + appName,
    },
    description: description,
    images: [
      {
        url: '/logo.png',
        width: 400,
        height: 400,
        alt: appName,
      },
    ],
  },
  twitter: {
    title: appName,
    description: description,
    card: 'summary_large_image',
    images: '/logo.png',
    creator: 'Tiesen',
    creatorId: 'tiesen243',
    site: '@tiesen243',
    siteId: 'tiesen243',
  },
}

import { cn } from '@/lib/utils'
import { AppProvider } from '@/provider'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-dvh bg-background font-sans antialiased', GeistSans.variable)}>
      <AppProvider>{children}</AppProvider>
    </body>
  </html>
)

export default RootLayout
