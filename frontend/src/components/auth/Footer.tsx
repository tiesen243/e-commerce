'use client'

import Link from 'next/link'

import nextImport from '@/lib/nextImport'
const CardFooter = nextImport('CardFooter')

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
