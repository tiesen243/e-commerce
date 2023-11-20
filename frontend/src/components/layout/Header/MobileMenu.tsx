import { Button, Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui'

import { MenuIcon } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'
import Search from './Search'

const MobileMenu: React.FC = () => (
  <aside className="block md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon size={24} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <Search className="mt-4 flex md:hidden" />
        <Nav />
      </SheetContent>
    </Sheet>
  </aside>
)

export default MobileMenu
