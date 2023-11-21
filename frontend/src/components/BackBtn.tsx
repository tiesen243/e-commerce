import { ChevronLeft } from 'lucide-react'
import { Button } from './ui'
import Link from 'next/link'

interface Props {
  className?: string
}

const BackBtn: React.FC<Props> = ({ className }) => (
  <Button variant="outline" size="icon" className={className} asChild>
    <Link href="/">
      <ChevronLeft />
    </Link>
  </Button>
)

export default BackBtn
