import { Button } from '@/components/ui'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => setOpen(!open)
  return (
    <section className="block md:hidden">
      <Button variant="outline" size="icon" onClick={handleClick}>
        {!open ? (
          <HamburgerMenuIcon className="h-5 w-5" />
        ) : (
          <Cross2Icon className="h-5 w-5" />
        )}
      </Button>
    </section>
  )
}

export default MobileMenu
