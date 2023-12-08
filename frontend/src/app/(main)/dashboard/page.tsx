'use client'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { TabsContent } from '@/components/ui/tabs'
const CreateProduct = dynamic(() => import('@/components/dashboard/create'), { ssr: false })

const Page: NextPage = () => (
  <>
    <TabsContent value="dashboard">Dashboard content</TabsContent>

    <TabsContent value="create">
      <CreateProduct />
    </TabsContent>

    <TabsContent value="orders">Orders content</TabsContent>

    <TabsContent value="users">Users content</TabsContent>
  </>
)

export default Page
