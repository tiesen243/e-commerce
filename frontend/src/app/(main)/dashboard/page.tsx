import type { NextPage } from 'next'

import { Tabs, TabsContent } from '@/components/ui/tabs'
import Trigger from './_trigger'
import Products from '@/components/dashboard/products'
import CreateProduct from '@/components/dashboard/create'

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
  </Tabs>
)

export default Page
