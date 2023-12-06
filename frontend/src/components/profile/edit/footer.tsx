import { LoadingSpinner } from '@/components/comp/loading'
import { Button } from '@/components/ui/button'
import { DialogFooter } from '@/components/ui/dialog'

const Footer: React.FC<{ disabled: boolean }> = ({ disabled }) => (
  <DialogFooter>
    <Button type="submit" disabled={disabled}>
      {disabled ? <LoadingSpinner /> : 'Save changes'}
    </Button>
  </DialogFooter>
)

export default Footer
