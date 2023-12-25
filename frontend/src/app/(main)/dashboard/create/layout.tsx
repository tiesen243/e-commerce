import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create a new product',
  description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
  openGraph: {
    title: 'Create a new product',
    description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
    url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard/create`,
  },
  twitter: {
    title: 'Create a new product',
    description: `Fill in the form below to create a new product. Make sure you fill in all the required`,
  },
}
const CreateLayout: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>

export default CreateLayout
