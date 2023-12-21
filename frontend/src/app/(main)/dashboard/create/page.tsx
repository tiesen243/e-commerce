import type { NextPage } from 'next'

import CreateForm from '@/components/dashboard/create'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Page: NextPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create a new product</CardTitle>
      <CardDescription>
        Fill in the form below to create a new product. Make sure you fill in all the required
      </CardDescription>
    </CardHeader>

    <CreateForm />
  </Card>
)

export default Page
