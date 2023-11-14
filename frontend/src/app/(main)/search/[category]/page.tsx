import { Tag } from '@/lib'
import { NextPage } from 'next'

interface Props {
  params: {
    category: string
  }
  searchParams: {
    q: string
    tag: Tag[]
    page: number
  }
}
const Page: NextPage<Props> = ({ params }) => {
  return <div>Page {params.category}</div>
}

export default Page
