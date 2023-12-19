import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: meta.metadataBase,
  title: meta.title,
  description: meta.description,
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: meta.title,
    url: meta.url,
    title: meta.title,
    description: meta.description,
    images: meta.images,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    card: 'summary_large_image',
    images: meta.images[0].url,
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
import { meta } from '@/lib/meta'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-screen bg-background font-sans antialiased', GeistSans.variable)}>
      <AppProvider>{children}</AppProvider>
    </body>
  </html>
)

export default RootLayout
