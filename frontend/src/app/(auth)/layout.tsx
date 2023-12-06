import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'TN E-Commerce | Authentification',
  description: 'Authentification for TN E-Commerce',
  openGraph: {
    title: 'TN E-Commerce | Authentification',
    description: 'Authentification for TN E-Commerce',
    type: 'website',
  },
  twitter: {
    title: 'TN E-Commerce | Authentification',
    description: 'Authentification for TN E-Commerce',
    card: 'summary',
  },
}

import { Card } from '@/components/ui/card'
import { Toaster } from '@/components/ui/toaster'
const AuthLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
    <Card className="container mx-4 max-w-screen-md">{children}</Card>
    <Toaster />
  </main>
)

export default AuthLayout
