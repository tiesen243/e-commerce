import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const Header: React.FC = () => (
  <DialogHeader>
    <DialogTitle>Edit profile</DialogTitle>
    <DialogDescription>
      Make changes to your profile here. Click save when you are done
    </DialogDescription>
  </DialogHeader>
)

export default Header
