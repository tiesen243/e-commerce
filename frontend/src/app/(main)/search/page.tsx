import { meta } from '@/lib/meta'
import { Metadata, NextPage } from 'next'
import React from 'react'

interface Props {
  searchParams: {
    q: string
  }
}

export const generateMetadata = ({ searchParams }: Props): Metadata => ({
  title: searchParams.q ? `Search results for ${searchParams.q} | ${meta.title}` : meta.title,
  description: searchParams.q ? `Search results for ${searchParams.q}` : meta.description,
  openGraph: {
    title: searchParams.q ? `Search results for ${searchParams.q} | ${meta.title}` : meta.title,
    description: searchParams.q ? `Search results for ${searchParams.q}` : meta.description,
    url: `${meta.url}/search${searchParams.q ? `?q=${searchParams.q}` : ''}`,
  },
  twitter: {
    title: searchParams.q ? `Search results for ${searchParams.q} | ${meta.title}` : meta.title,
    description: searchParams.q ? `Search results for ${searchParams.q}` : meta.description,
  },
})

const Page: NextPage<Props> = ({ searchParams }) => {
  return <div>Page {searchParams.q}</div>
}

export default Page
