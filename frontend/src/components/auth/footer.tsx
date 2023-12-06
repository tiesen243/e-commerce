import Link from 'next/link'

import { LoadingSpinner } from '@/components/comp/loading'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'

interface Props {
  btnText: string
  isPending: boolean
  text: string
  href: string
}
const Footer: React.FC<Props> = ({ btnText, isPending, text, href }) => (
  <CardFooter className="flex flex-col items-stretch">
    <article>
      {text}
      <Button variant="link" className="capitalize" asChild>
        <Link href={href}>{href.substring(1)}</Link>
      </Button>
    </article>

    <section className="flex items-center justify-around">
      <Button variant="ghost" asChild>
        <Link href="/">Cancel</Link>
      </Button>

      <Button type="submit" disabled={isPending}>
        {isPending ? <LoadingSpinner /> : btnText}
      </Button>
    </section>
  </CardFooter>
)

export default Footer
