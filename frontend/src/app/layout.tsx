import type { Metadata } from 'next'

const description =
  'TN E-Commerce is a starter template for building a fast, modern e-commerce store with Next.js, NestJS, Shadcn UI, and Firebase.'
export const metadata: Metadata = {
  metadataBase: new URL('https://tn-ecommerce.vercel.app/'),
  title: 'TN E-Commerce',
  description,
  openGraph: {
    type: 'book',
    locale: 'vi_VN',
    siteName: 'TN E-Commerce',
    url: 'https://tn-ecommerce.vercel.app/',
    title: 'TN E-Commerce',
    description,
    images: [
      {
        url: 'logo.png',
        width: 400,
        height: 400,
        alt: 'TN E-Commerce',
      },
    ],
  },
  twitter: {
    title: 'TN E-Commerce',
    description,
    card: 'summary_large_image',
    images: '/logo.png',
    creator: 'Tiesen',
    creatorId: 'tiesen243',
    site: '@tiesen243',
    siteId: 'tiesen243',
  },
}

import { cn } from '@/lib/utils'
import ThemeProvider from '@/provider/theme.provider'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-screen bg-background font-sans antialiased', GeistSans.variable)}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
