import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Metadata, NextPage } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Access Denied',
  description: "You don't have permission to access this page.",
  openGraph: {
    title: 'Access Denied',
    description: "You don't have permission to access this page.",
  },
  twitter: {
    title: 'Access Denied',
    description: "You don't have permission to access this page.",
  },
}

const Page: NextPage = () => (
  <Card className="typography prose-p:m-0 prose-a:no-underline">
    <CardHeader>
      <CardTitle>Access Denied :((</CardTitle>
    </CardHeader>

    <CardContent>
      <p>You don&apos;t have permission to access this page.</p>
    </CardContent>

    <CardFooter className="flex justify-center">
      <Link href="/" className={buttonVariants({ variant: 'outline' })}>
        Back to Home
      </Link>
    </CardFooter>
  </Card>
)

export default Page
