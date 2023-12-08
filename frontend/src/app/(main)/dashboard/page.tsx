import CreateProduct from '@/components/dashboard/create'
import Trigger from '@/components/dashboard/trigger'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <Tabs defaultValue="dashboard">
    <Trigger />

    <TabsContent value="dashboard">Dashboard content</TabsContent>
    <TabsContent value="create">
      <CreateProduct />
    </TabsContent>
    <TabsContent value="orders">Orders content</TabsContent>
    <TabsContent value="users">Users content</TabsContent>
  </Tabs>
)

export default Page
