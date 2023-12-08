import Link from 'next/link'

import { LoadingSpinner } from '@/components/comp/loading'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'

interface Props {
  btnText: string
  isPending: boolean
  cancel?: boolean
}
const Footer: React.FC<Props> = ({ btnText, isPending, cancel: isCancel = false }) => (
  <CardFooter className="flex flex-col items-stretch">
    <section className={`flex items-center ${isCancel ? 'justify-end' : 'justify-around'}`}>
      {!isCancel && (
        <Button variant="ghost" asChild>
          <Link href="/">Cancel</Link>
        </Button>
      )}

      <Button type="submit" disabled={isPending}>
        {isPending ? <LoadingSpinner /> : btnText}
      </Button>
    </section>
  </CardFooter>
)

export default Footer
