import { NextPage } from 'next'

interface Props {
  params: {
    cate: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  return <div>Page {params.cate}</div>
}

export default Page
