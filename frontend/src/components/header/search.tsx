import { redirect } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface Props {
  className: string
}
const Search: React.FC<Props> = ({ className }) => {
  const handleSubmit = async (formData: FormData) => {
    'use server'
    const search = formData.get('search')
    redirect(`/search?q=${search}`)
  }

  return (
    <form action={handleSubmit} className={cn('w-full md:w-1/2', className)}>
      <Input name="search" type="search" placeholder="Search" autoFocus={false} />
    </form>
  )
}

export default Search
