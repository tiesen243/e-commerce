import { Avatar, AvatarFallback, AvatarImage, Typography } from '@/components/ui'
import { logo } from '@/lib/constants'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-4">
    <Avatar>
      <AvatarImage src={logo} alt="logo" />
      <AvatarFallback>Logo Icon</AvatarFallback>
    </Avatar>

    <Typography variant="h3" className="block font-bold md:hidden lg:block">
      {process.env.NEXT_PUBLIC_APP_NAME}
    </Typography>
  </Link>
)

export default Logo
