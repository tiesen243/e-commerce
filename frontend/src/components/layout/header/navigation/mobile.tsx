import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Navigation } from '.'
import { Logo, Search } from '../utils'

export const MobileMenu: React.FC = () => (
  <Sheet>
    <SheetTrigger className="flex md:hidden" asChild>
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
    </SheetTrigger>

    <SheetContent side="left" className="block space-y-4 md:hidden">
      <Logo />

      <Search className="flex md:hidden" />

      <Navigation className="flex md:hidden" />
    </SheetContent>
  </Sheet>
)
