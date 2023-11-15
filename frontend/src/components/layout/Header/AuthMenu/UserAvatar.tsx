import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui'
import { IUser } from '@/types/user'

const UserAvatar: React.FC<{ user: IUser }> = ({ user }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar>
          <AvatarImage alt="Avatar" src={user.avatar} />
          <AvatarFallback>{user.userName}</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent className="mt-4 rounded bg-secondary p-2">
        {user.userName}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default UserAvatar
