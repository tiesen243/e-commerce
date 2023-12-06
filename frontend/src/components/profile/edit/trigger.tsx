import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { EditIcon } from 'lucide-react'

const Trigger = () => (
  <DialogTrigger asChild>
    <Button>
      <EditIcon className="mr-2" /> Edit profile
    </Button>
  </DialogTrigger>
)

export default Trigger
