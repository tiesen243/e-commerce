import { DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface Props {
  title: string
  description: string
}
const Header: React.FC<Props> = ({ title, description }) => (
  <DialogHeader>
    <DialogTitle>{title}</DialogTitle>
    <DialogDescription>{description}</DialogDescription>
  </DialogHeader>
)

export default Header
