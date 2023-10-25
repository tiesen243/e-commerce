import { AppBar, Container, Toolbar } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="lg">
        <Toolbar>
          <p>Footer</p>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
