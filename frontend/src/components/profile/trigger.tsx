import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'

const Trigger: React.FC<React.PropsWithChildren> = ({ children }) => (
  <DialogTrigger asChild>
    <Button>{children}</Button>
  </DialogTrigger>
)

export default Trigger
