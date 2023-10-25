import { Typography } from '@mui/material'
import Link from 'next/link'

const Title: React.FC<{ title: string; display: any }> = ({ title, display }) => (
  <Typography
    variant="h5"
    noWrap
    component={Link}
    href="/"
    sx={{
      mr: 2,
      display: display,
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    {title}
  </Typography>
)

export default Title
