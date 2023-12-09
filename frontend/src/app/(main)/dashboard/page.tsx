'use client'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import Trigger from '@/components/dashboard/trigger'
const CreateProduct = dynamic(() => import('@/components/dashboard/create'), { ssr: false })
const Products = dynamic(() => import('@/components/dashboard/products'), { ssr: false })

const Page: NextPage = () => (
  <Tabs defaultValue="products">
    <Trigger />

    <TabsContent value="products">
      <Products />
    </TabsContent>

    <TabsContent value="create">
      <CreateProduct />
    </TabsContent>

    <TabsContent value="orders">Orders content</TabsContent>

    <TabsContent value="users">Users content</TabsContent>
  </Tabs>
)

export default Page
