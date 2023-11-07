import DashboardNav from '@/components/Layouts/DashboardNav'
import { Container, Grid, Typography } from '@mui/material'

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container maxWidth="xl" className="min-h-screen flex flex-col items-center justify-center">
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <div className="sticky top-0">
          <Typography variant="h6">Dashboard</Typography>
          <DashboardNav />
        </div>
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default DashboardLayout
