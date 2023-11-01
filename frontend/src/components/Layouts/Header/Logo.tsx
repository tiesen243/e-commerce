import { Avatar, Typography } from '@mui/material'
import Link from 'next/link'

import { logo } from '@/lib'

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-2">
    <Avatar alt="Logo" src={logo} sx={{ width: 32, height: 32 }} />
    <Typography variant="h6" component="div" className="font-bold block md:hidden lg:block">
      {process.env.NEXT_PUBLIC_SITE_NAME}
    </Typography>
  </Link>
)

export default Logo
