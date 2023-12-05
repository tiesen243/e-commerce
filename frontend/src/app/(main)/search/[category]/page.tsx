import { NextPage } from 'next'

interface Props {
  params: {
    category: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  return <div>{params.category}</div>
}

export default Page
