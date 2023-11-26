import Tooltip from '@/components/Tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { IUser } from '@/types/user'

const UserAvatar: React.FC<{ user: IUser }> = ({ user }) => (
  <Tooltip text={user.userName}>
    <Avatar>
      <AvatarImage alt="Avatar" src={user.avatar} />
      <AvatarFallback>{user.userName}</AvatarFallback>
    </Avatar>
  </Tooltip>
)

export default UserAvatar
