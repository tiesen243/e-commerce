import CreateForm from '@/components/dashboard/create'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Create a new product',
  description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
  openGraph: {
    title: 'Create a new product',
    description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard/create`,
  },
  twitter: {
    title: 'Create a new product',
    description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
  },
}

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
