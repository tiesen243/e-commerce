import { Button, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { NextPage } from 'next'

const Page: NextPage = () => {
  return (
    <Container maxWidth="lg" className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Typography variant="h1" fontSize={69}>
        Welcome to Yuki&apos;s Shop
      </Typography>

      <Typography variant="subtitle1" fontSize={24}>
        This is a simple e-commerce website You can create, update, delete, and view products <br /> You can also add
        products to your cart and checkout
        <br />
        In admin page, you can manage products, orders, and users
        <br /> This website is made with Next.js, Nest.js, Material-UI, MongoDB and Firebase
      </Typography>

      <Typography variant="subtitle2" fontSize={14}>
        You can find the source code on{' '}
        <a
          className="hover:text-gray-400"
          href="https://github.com/tiesen243/e-commerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </Typography>

      <Button component={Link} href="/shop" variant="contained" color="info">
        Go to Shop
      </Button>
    </Container>
  )
}

export default Page
