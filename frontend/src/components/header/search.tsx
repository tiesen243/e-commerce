import { redirect } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const Search: React.FC<{ className: string }> = ({ className }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const search = formData.get('search')
    redirect(`/search?q=${search}`)
  }

  return (
    <form action={handleSubmit} className={cn('w-full md:w-1/3', className)}>
      <Input name="search" type="search" placeholder="Search" autoFocus={false} />
    </form>
  )
}

export default Search
