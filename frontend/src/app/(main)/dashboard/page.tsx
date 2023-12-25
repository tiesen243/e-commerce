import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: `Dashboard`,
  description: `Manage your products here.`,
  openGraph: {
    title: `Dashboard`,
    description: `Manage your products here.`,
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`,
  },
  twitter: {
    title: `Dashboard`,
    description: `Manage your products here.`,
  },
}

import { DashboardTable, TFooter, TableChild, TableError } from '@/components/dashboard/table'
import { TableBody } from '@/components/ui/table'
import { API_URL } from '@/lib/axios'
import { GetToken } from '@/lib/getToken'

interface Props {
  searchParams: { page: number }
}

const Page: NextPage<Props> = async ({ searchParams }) => {
  const page = +searchParams.page || 1

  try {
    const token = await GetToken()
    const res = await fetch(`${API_URL}/product/me?page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { tags: ['products'], revalidate: 5 },
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)

    const products: IProduct[] = data.data
    const totalPage = data.totalPage
    return (
      <DashboardTable>
        <TableBody>
          {products.map((product: IProduct) => (
            <TableChild key={product._id} product={product} />
          ))}
        </TableBody>

        <TFooter page={page} totalPage={totalPage} />
      </DashboardTable>
    )
  } catch (e: any) {
    return (
      <DashboardTable>
        <TableBody>
          <TableError message={e.message} />
        </TableBody>
      </DashboardTable>
    )
  }
}

export default Page
