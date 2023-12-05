import Tooltip from '@/components/comp/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import IUser from '@/interfaces/user.interface'

const UserAvatar: React.FC<{ user: IUser }> = ({ user }) => (
  <DropdownMenuTrigger>
    <Tooltip text="Account">
      <Avatar>
        <AvatarImage src={user.avatar} />
        <AvatarFallback title={user.userName} />
      </Avatar>
    </Tooltip>
  </DropdownMenuTrigger>
)

export default UserAvatar
