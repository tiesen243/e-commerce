import { Tooltip, IconButton, Avatar } from '@mui/material'

import type IUser from '@/types/user.type'
interface Props {
  user: IUser
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
  open: boolean
}

const UserAvatar: React.FC<Props> = ({ user, open, handleClick }) => (
  <Tooltip title="Account settings">
    <IconButton
      onClick={handleClick}
      size="small"
      sx={{ ml: 2 }}
      aria-controls={open ? 'account-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
    >
      <Avatar src={user.avatar} alt={user.userName} />
    </IconButton>
  </Tooltip>
)

export default UserAvatar
