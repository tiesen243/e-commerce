import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

import Nav from './Nav'

const DashboardNav: React.FC = () => (
  <Box>
    <Typography variant="h4" align="center" gutterBottom>
      Dashboard
    </Typography>
    <Button component={Link} href="/" variant="contained" color="secondary" fullWidth>
      Home
    </Button>

    <Nav />
  </Box>
)

export default DashboardNav
