import { Metadata, NextPage } from 'next'

interface Props {
  params: {
    category: string
  }
}

const formatTitle = (s: string): string =>
  s
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => ({
  title: formatTitle(params.category),
  description: `Search ${params.category}`,
  openGraph: {
    title: formatTitle(params.category),
    description: `Search ${params.category}`,
  },
  twitter: {
    title: formatTitle(params.category),
    description: `Search ${params.category}`,
  },
})

const Page: NextPage<Props> = ({ params }) => {
  return <div>{params.category}</div>
}

export default Page
