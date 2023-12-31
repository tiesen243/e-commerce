import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { handleSearch } from '@/lib/actions/search'

export const Logo: React.FC = () => (
  <Link href="/" className="flex cursor-pointer items-center space-x-2 text-2xl font-bold">
    <Image src="/logo.svg" width={40} height={40} alt="logo" className="dark:invert" />
    <h1 className="block md:hidden lg:block">Store</h1>
  </Link>
)

export const Search: React.FC<{ className: string }> = ({ className }) => (
  <form action={handleSearch} className={cn('w-full space-x-2 md:w-1/3', className)}>
    <Input
      type="search"
      name="search"
      placeholder="Typing to search..."
      className="focus-visible:ring-1 focus-visible:ring-offset-0"
    />
    <Button variant="outline" size="icon" type="submit">
      <SearchIcon size={16} />
    </Button>
  </form>
)
