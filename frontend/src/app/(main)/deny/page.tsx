import { Button, Typography } from '@/components/ui'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <Typography variant="h1">Access Denied</Typography>

      <Button variant="link" asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  )
}

export default Page
