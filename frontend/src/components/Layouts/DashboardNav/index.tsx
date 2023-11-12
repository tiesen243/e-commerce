import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'

import { AdminPanelSettingsRounded, InventoryRounded } from '@mui/icons-material'
import Nav from './Nav'
import { adminNav, manageNav } from './utils'

const DashboardNav: React.FC = () => (
  <Box>
    <Typography variant="h4" align="center" gutterBottom>
      Dashboard
    </Typography>
    <Button component={Link} href="/" variant="contained" color="secondary" fullWidth>
      Home
    </Button>

    <Box className="flex justify-around md:flex-col">
      <Nav icon={<AdminPanelSettingsRounded />} title="Admin Panel" items={adminNav} />
      <Nav icon={<InventoryRounded />} title="Products Manage" items={manageNav} />
    </Box>
  </Box>
)

export default DashboardNav
