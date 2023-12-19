import { meta } from '@/lib/meta'
import type { Metadata, NextPage } from 'next'

const description = 'Authentification for TN E-Commerce'
export const metadata: Metadata = {
  title: `${meta.title} | Authentification`,
  description,
  openGraph: {
    title: `${meta.title} | Authentification`,
    description,
  },
  twitter: {
    title: `${meta.title} | Authentification`,
    description,
    card: 'summary_large_image',
  },
}

const AuthLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <main className="flex h-screen w-screen items-center justify-center overflow-hidden">
    {children}
  </main>
)

export default AuthLayout
