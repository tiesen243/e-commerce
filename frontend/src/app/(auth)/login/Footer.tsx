import { CardFooter, Typography } from '@/components/ui'
import Link from 'next/link'

const Footer = () => (
  <CardFooter>
    <Typography variant="small">
      Dont have an account?{' '}
      <Link href="/register" className="underline-offset-4 hover:underline">
        Register
      </Link>
    </Typography>
  </CardFooter>
)

export default Footer
