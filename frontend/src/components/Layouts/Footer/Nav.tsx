import { Avatar, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'

import { logo } from '@/lib'

const Nav: React.FC = () => (
  <Grid item xs={4} className="grid grid-cols-1 md:grid-cols-3">
    <section className="flex gap-2 mb-2">
      <Avatar src={logo} sx={{ width: 30, height: 30 }} />
      <Typography variant="h6" fontWeight="bold">
        Yuki
      </Typography>
    </section>

    <List className="col-span-2" disablePadding>
      {nav.map((item, index) => (
        <ListItem
          key={index}
          component={Link}
          href={item.link}
          {...(item.link.startsWith('http') && {
            target: '_blank',
            rel: 'noopener noreferrer',
          })}
          className="hover:underline underline-offset-4 whitespace-nowrap"
          disablePadding
        >
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  </Grid>
)

export default Nav

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
