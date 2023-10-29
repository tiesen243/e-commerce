import { logo } from '@/utils'
import { AppBar, Container, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'

const nav = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Terms & Conditions',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    name: 'Privacy Policy',
    link: 'https://www.youtube.com/watch?v=qWNQUvIk954',
  },
]

const Footer = () => {
  return (
    <AppBar position="static" className="main">
      <Container className="grid grid-cols-2">
        <section className="flex flex-col gap-6 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4">
          <Typography className="flex gap-2 md:pt-1 font-bold after:content-['Yuki'] after:mt-1">
            <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
          </Typography>

          <List>
            {nav.map((item) => (
              <ListItem
                component={Link}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                key={item.name}
                className="block p-2 underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block text-sm"
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </section>

        <section className="flex flex-col gap-6 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4">
          <Typography className="font-semibold items-center">Contact</Typography>
          <List>
            <ListItem
              className="before:content-['Email:'] before:mr-2"
              component="a"
              href="mailto:ttien56906@gmail.com"
            >
              ttien56906@gmail.com
            </ListItem>
            <ListItem className="before:content-['Phone:'] before:mr-2" component="a" href="tel:+84366456906">
              +84 366 456 906
            </ListItem>
          </List>
        </section>
      </Container>
      <section className="border-t border-quaternary-light dark:border-quaternary-dark">
        <Container className="flex justify-between items-center  py-6">
          <Typography>© {new Date().getFullYear()} Yuki, Inc. All rights reserved.</Typography>
          <Typography>
            Created by{' '}
            <a href="https://tiesen.id.vn" target="_blank" rel="noreferrer">
              Tiesen
            </a>
          </Typography>
        </Container>
      </section>
    </AppBar>
  )
}

export default Footer
