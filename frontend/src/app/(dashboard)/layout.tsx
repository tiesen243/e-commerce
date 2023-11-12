import DashboardNav from '@/components/Layouts/DashboardNav'
import { Container, Grid } from '@mui/material'

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Container maxWidth="xl" className="min-h-screen flex flex-col items-center justify-center">
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <DashboardNav />
      </Grid>

      <Grid item xs={12} md={9} className="max-h-[80vh] h-[80vh] overflow-auto">
        {children}
      </Grid>
    </Grid>
  </Container>
)

export default DashboardLayout
