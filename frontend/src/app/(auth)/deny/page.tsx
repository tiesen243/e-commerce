import { Button, Typography } from '@/components/ui'
import Link from 'next/link'

const Page = () => (
  <>
    <Typography variant="h1" fontWeight="medium" textAlign="center">
      Access Denied :(
    </Typography>

    <Button variant="link" asChild className="flex justify-center">
      <Link href="/">Go home</Link>
    </Button>
  </>
)

export default Page
