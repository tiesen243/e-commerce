import { meta } from '@/lib/meta'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: `Your cart | ${meta.title}`,
  description: 'Use your cart to save products that you want to buy later.',
  openGraph: {
    title: `Your cart | ${meta.title}`,
    description: 'Use your cart to save products that you want to buy later.',
  },
  twitter: {
    title: `Your cart | ${meta.title}`,
    description: 'Use your cart to save products that you want to buy later.',
  },
}

const Page: NextPage = () => {
  return <div>Page</div>
}

export default Page
