import Result from '@/components/search/result'
import { Metadata, NextPage } from 'next'

interface Props {
  searchParams: SearchParams
}

export const generateMetadata = ({ searchParams }: Props): Metadata => {
  const title = searchParams.q ? `Search ${searchParams.q}` : 'Search'
  return {
    title,
    description: `Search results for ${searchParams.q}`,
    openGraph: {
      title,
      description: `Search results for ${searchParams.q}`,
    },
    twitter: {
      title,
      description: `Search results for ${searchParams.q}`,
    },
  }
}

const Page: NextPage<Props> = ({ searchParams }) => {
  return <Result {...searchParams} />
}

export default Page
