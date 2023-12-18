import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => (
  <main className="flex h-screen w-screen items-center justify-center">
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
  </main>
)

export default Page
