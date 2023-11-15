import {
  Avatar,
  Button,
  Card,
  CardContent,
  Tooltip,
  TooltipTrigger,
  Typography,
} from '@/components/ui'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { TooltipContent, TooltipProvider } from '@radix-ui/react-tooltip'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const AuthMenu: React.FC = () => {
  const { data } = useSession()
  if (!data)
    return (
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    )

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar>
            <AvatarImage alt="Avatar" src={data.user.avatar} />
            <AvatarFallback>{data.user.userName}</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent className="mt-4 rounded bg-secondary p-2">
          {data.user.userName}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default AuthMenu
