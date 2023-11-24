import { CardFooter } from '@/components/ui'
import Link from 'next/link'

interface Props {
  text: string
  href: string
  hrefText: string
}

const Footer: React.FC<Props> = ({ text, href, hrefText }) => (
  <CardFooter className="typography">
    <h6>
      {text}
      <Link href={href} className="underline-offset-4 hover:underline">
        {hrefText}
      </Link>
    </h6>
  </CardFooter>
)

export default Footer
