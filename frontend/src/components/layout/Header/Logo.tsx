import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { logo } from '@/lib/constants'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-4">
    <Avatar>
      <AvatarImage src={logo} alt="logo" />
      <AvatarFallback>Logo Icon</AvatarFallback>
    </Avatar>

    <article className="typography block font-bold md:hidden lg:block">
      <h5>{process.env.NEXT_PUBLIC_APP_NAME}</h5>
    </article>
  </Link>
)

export default Logo
