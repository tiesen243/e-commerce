import { Button } from '@/components/ui'
import Link from 'next/link'

const Page = () => (
  <main className="typography flex flex-col items-center justify-center">
    <h1>Access Denied :(</h1>

    <Button variant="link" asChild>
      <Link href="/">Go home</Link>
    </Button>
  </main>
)

export default Page