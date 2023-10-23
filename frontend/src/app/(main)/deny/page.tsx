import { Container, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const Page: NextPage = () => {
  return (
    <Container maxWidth="lg" className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Typography variant="h1" fontSize={69}>
        PERMISSION DENIED
      </Typography>
      <Typography variant="h5">You don&apos;t have permission to access this page.</Typography>

      <Typography variant="subtitle2">
        Go back to <Link href="/shop">home</Link>
      </Typography>
    </Container>
  )
}

export default Page
