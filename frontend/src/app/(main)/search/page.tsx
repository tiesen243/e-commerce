import { NextPage } from 'next'

interface Props {
  searchParams: {
    tag: string
    q: string
    page: string
  }
}
const Page: NextPage<Props> = (props) => {
  console.log(props.searchParams.tag)
  return <div>Page</div>
}

export default Page
