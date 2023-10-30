import { Tag } from '@/lib'
import { NextPage } from 'next'

interface Props {
  params: {
    slug: string
  }
  searchParams: {
    q: string
    tag: Tag[]
    page: number
  }
}
const Page: NextPage<Props> = ({ params, searchParams }) => {
  console.log(params, searchParams)
  return <div>Page {params.slug}</div>
}

export default Page
