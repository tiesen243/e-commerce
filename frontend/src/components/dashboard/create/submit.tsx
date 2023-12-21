import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import Link from 'next/link'

interface Props {
  isPending: boolean
  handleReset: () => void
}
const FormBtn: React.FC<Props> = ({ isPending, handleReset }) => (
  <CardFooter className="flex justify-end gap-4">
    <Link href="/dashboard" passHref legacyBehavior>
      <Button type="button" disabled={isPending}>
        Cancel
      </Button>
    </Link>

    <Button type="reset" onClick={handleReset} disabled={isPending}>
      Reset
    </Button>

    <Button type="submit" disabled={isPending}>
      Create
    </Button>
  </CardFooter>
)

export default FormBtn
