import { CardFooter, Typography } from '@/components/ui'
import Link from 'next/link'

const Footer: React.FC = () => (
  <CardFooter>
    <Typography variant="subtitle">
      Already have an account?{' '}
      <Link href="/login" className="underline-offset-4 hover:underline">
        Login
      </Link>
    </Typography>
  </CardFooter>
)

export default Footer
