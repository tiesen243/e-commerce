import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import Link from 'next/link'

const Contact: React.FC = () => (
  <Grid item xs={6} className="grid grid-cols-1 md:grid-cols-3">
    <Typography variant="h6" fontWeight="bold" className="mb-2">
      Contact
    </Typography>

    <List className="col-span-2" disablePadding>
      {contact.map((item, index) => (
        <ListItem key={index} component={Link} href={item.link} disablePadding>
          <ListItemText
            primary={
              <Typography variant="body2">
                <b>{item.name}</b> :{' '}
                <Link href={item.link} className="hover:underline underline-offset-4">
                  {item.link.split(':')[1]}
                </Link>
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </Grid>
)

export default Contact

const contact = [
  {
    name: 'Email',
    link: 'mailto:ttien56906@gmail.com',
  },
  {
    name: 'Phone',
    link: 'tel:+84 905258844',
  },
]
