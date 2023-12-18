import CheckProvider from '@/provider/check.provider'
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

const AuthLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <CheckProvider>
    <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
      {children}
    </main>
  </CheckProvider>
)

export default AuthLayout
