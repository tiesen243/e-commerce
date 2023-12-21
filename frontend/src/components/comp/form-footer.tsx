import Link from 'next/link'

import { LoadingSpinner } from '@/components/comp/loading'
import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'

interface Props {
  btnText: string
  isPending: boolean
  type?: 'button' | 'reset'
  onClick?: () => void
  cancel?: boolean
}
const FormFooter: React.FC<Props> = ({
  btnText,
  isPending,
  onClick,
  type = 'button',
  cancel = false,
}) => (
  <CardFooter className="flex flex-col items-stretch">
    <section className={`flex items-center gap-4 ${cancel ? 'justify-end' : 'justify-around'}`}>
      {cancel && (
        <Link href={type === 'button' ? '/' : '#'} passHref legacyBehavior>
          <Button variant="ghost" type={type} onClick={onClick} disabled={isPending}>
            Cancel
          </Button>
        </Link>
      )}

      <Button type="submit" className="w-1/6 " disabled={isPending}>
        {isPending ? <LoadingSpinner /> : btnText}
      </Button>
    </section>
  </CardFooter>
)

export default FormFooter
