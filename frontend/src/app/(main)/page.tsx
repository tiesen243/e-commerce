import { Button } from '@/components/ui/button'
import { type NextPage } from 'next'
import { redirect } from 'next/navigation'

const Page: NextPage = () => {
  const action = async () => {
    'use server'
    redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }
  return (
    <div className="h-[10000px]">
      Page
      <form action={action}>
        <Button type="submit">Button</Button>
      </form>
    </div>
  )
}

export default Page
