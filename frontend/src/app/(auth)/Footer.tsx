import { CardFooter, Typography } from '@/components/ui'
import Link from 'next/link'

interface Props {
  text: string
  href: string
  hrefText: string
}

const Footer: React.FC<Props> = ({ text, href, hrefText }) => (
  <CardFooter>
    <Typography variant="subtitle">
      {text}
      <Link href={href} className="underline-offset-4 hover:underline">
        {hrefText}
      </Link>
    </Typography>
  </CardFooter>
)

export default Footer
