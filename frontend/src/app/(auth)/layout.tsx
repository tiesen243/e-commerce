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

import { Toaster } from '@/components/ui/toaster'
const AuthLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
    {children}
    <Toaster />
  </main>
)

export default AuthLayout
