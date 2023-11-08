import { Box, Button, Typography } from '@mui/material'
import ManageNav from './ManageNav'
import AdminNav from './AdminNav'
import Link from 'next/link'

const DashboardNav: React.FC = () => (
  <Box>
    <Typography variant="h4" align="center" gutterBottom>
      Dashboard
    </Typography>
    <Button component={Link} href="/" variant="contained" color="secondary" fullWidth>
      Home
    </Button>
    <AdminNav />
    <ManageNav />
  </Box>
)

export default DashboardNav
