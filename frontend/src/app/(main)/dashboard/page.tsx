import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: `${meta.title} | Dashboard`,
  description: `Dashboard of ${meta.title}`,
  metadataBase: meta.metadataBase,
  openGraph: {
    title: `${meta.title} | Dashboard`,
    description: `Dashboard of ${meta.title}`,
    url: `${meta.url}/dashboard`,
  },
  twitter: {
    title: `${meta.title} | Dashboard`,
    description: `Dashboard of ${meta.title}`,
  },
}

import { DashboardTable, TableChild, TableError } from '@/components/dashboard/table'
import { API_URL } from '@/lib/axios'
import { GetToken } from '@/lib/getToken'
import { meta } from '@/lib/meta'
import type { IProduct } from '@/types/product'

const Page: NextPage = async () => {
  try {
    const token = await GetToken()
    const res = await fetch(`${API_URL}/product/me`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: ['products'], revalidate: 5 },
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)

    const products: IProduct[] = data.data
    return (
      <DashboardTable length={products.length}>
        {products.map((product: IProduct) => (
          <TableChild key={product._id} product={product} />
        ))}
      </DashboardTable>
    )
  } catch (e: any) {
    return (
      <DashboardTable>
        <TableError message={e.message} />
      </DashboardTable>
    )
  }
}

export default Page
