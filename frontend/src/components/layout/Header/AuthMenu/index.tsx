import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

import UserAvatar from './UserAvatar'
import UserControl from './UserControl'

const AuthMenu: React.FC = () => {
  const { data } = useSession()
  if (!data)
    return (
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full">
          <UserAvatar user={data.user} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <UserControl user={data.user} />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AuthMenu
