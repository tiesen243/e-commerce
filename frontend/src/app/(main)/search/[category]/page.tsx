import { Metadata, NextPage } from 'next'

interface Props {
  params: {
    category: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: params.category,
  description: `Search ${params.category}`,
  openGraph: {
    title: params.category,
    description: `Search ${params.category}`,
  },
  twitter: {
    title: params.category,
    description: `Search ${params.category}`,
  },
})

const Page: NextPage<Props> = ({ params }) => {
  return <div>{params.category}</div>
}

export default Page
