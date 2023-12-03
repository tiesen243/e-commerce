import { NextPage } from 'next'

interface Props {
  params: {
    id: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  return <div className="typography"></div>
}

export default Page
