import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'TN E-Commerce | Dashboard',
  description: 'dashboard of TN E-Commerce',
  metadataBase: new URL('https://tn-e-commerce.tiesen.id.vn'),
  openGraph: {
    title: 'TN E-Commerce | Dashboard',
    description: 'dashboard of TN E-Commerce',
    url: '/dashboard',
    type: 'website',
  },
  twitter: {
    title: 'TN E-Commerce | Dashboard',
    description: 'dashboard of TN E-Commerce',
    card: 'summary_large_image',
    site: '@tiesen243',
    creator: '@tiesen243',
  },
}

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>

export default DashboardLayout
