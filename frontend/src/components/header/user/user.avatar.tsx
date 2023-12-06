import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import IUser from '@/interfaces/user.interface'

const UserAvatar: React.FC<{ user: IUser }> = ({ user }) => (
  <DropdownMenuTrigger>
    <Avatar className="ring-1 ring-primary hover:ring-2">
      <AvatarImage src={user.avatar} />
      <AvatarFallback title={user.userName} />
    </Avatar>
  </DropdownMenuTrigger>
)

export default UserAvatar
