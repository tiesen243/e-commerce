import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import { Button } from '../ui/button'

const Search: React.FC<{ className: string }> = ({ className }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const search = formData.get('search')
    redirect(`/search?q=${search}`)
  }

  return (
    <form action={handleSubmit} className={cn('w-full space-x-2 md:w-1/3', className)}>
      <Input
        name="search"
        type="search"
        placeholder="Typing to search..."
        className="focus-visible:ring-1 focus-visible:ring-offset-0"
      />
      <Button variant="outline" size="icon" type="submit">
        <SearchIcon size={16} />
      </Button>
    </form>
  )
}

export default Search
