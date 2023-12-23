import { meta } from '@/lib/meta'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: `Terms & Conditions | ${meta.title}`,
  description: 'Terms & Conditions',
  openGraph: {
    title: `${meta.title} | Terms & Conditions`,
    description: 'Terms & Conditions',
  },
  twitter: {
    title: `${meta.title} | Terms & Conditions`,
    description: 'Terms & Conditions',
  },
}

const Page: NextPage = () => (
  <article className="typography">
    <h1>Terms & Conditions</h1>
    <p>
      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint
      ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
      officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
      minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla
      sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia
      voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
      eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris
      sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
    </p>
  </article>
)

export default Page