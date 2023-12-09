import BackBtn from '@/components/comp/backBtn'
import type { NextPage } from 'next'

interface Props {
  params: {
    id: string
  }
}
const Page: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <BackBtn />
      <h1>{params.id}</h1>
    </div>
  )
}

export default Page
