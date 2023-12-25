import Result from '@/components/search/result'
import { Metadata, NextPage } from 'next'

interface Props {
  params: {
    category: string
  }
  searchParams: SearchParams
}

const formatCate = (s: string): string =>
  s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: formatCate(params.category),
  description: `Search ${params.category}`,
  openGraph: {
    title: formatCate(params.category),
    description: `Search ${params.category}`,
  },
  twitter: {
    title: formatCate(params.category),
    description: `Search ${params.category}`,
  },
})

const Page: NextPage<Props> = ({ params, searchParams }) => {
  const category = { category: formatCate(params.category) }
  return <Result {...category} {...searchParams} />
}

export default Page
