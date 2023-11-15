import { Button } from '@/components/ui'
import Link from 'next/link'

const AuthMenu: React.FC = () => {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}

export default AuthMenu
