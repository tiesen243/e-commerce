import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { NextPage } from 'next'

const Page: NextPage = () => (
  <Card>
    <CardHeader>
      <CardTitle>Create a new product</CardTitle>
      <CardDescription>
        Fill in the form below to create a new product. Make sure you fill in all the required
      </CardDescription>
    </CardHeader>

    {/* <CreateForm /> */}
  </Card>
)

export default Page
