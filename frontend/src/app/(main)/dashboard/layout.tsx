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

import Trigger from '@/components/dashboard/trigger'
import { Tabs } from '@/components/ui/tabs'

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Tabs defaultValue="dashboard">
    <Trigger />

    {children}
  </Tabs>
)

export default DashboardLayout
