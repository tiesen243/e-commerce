'use client'

import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import useSWR from 'swr'

import { column, fetcher } from '@/components/product/table'
import { ColumnDef } from '@tanstack/react-table'

const DataTable = dynamic(() => import('@/components/DataTable'), { ssr: false })

const Page: NextPage = () => {
  const { data, error } = useSWR('/api/product/me', fetcher as any)
  if (error || !data) return <div>{error}</div>

  return <DataTable columns={column as ColumnDef<unknown, unknown>[]} data={data} filter="name" />
}

export default Page
