import { AppBar, Box, Container, Grid, Typography } from '@mui/material'

import Contact from './Contact'
import Nav from './Nav'

export const Footer: React.FC = () => (
  <AppBar position="static" className="trans-colors">
    <Container maxWidth="lg">
      <Grid container spacing={2} marginY={1}>
        <Nav />

        <Contact />
      </Grid>

      <Box className="flex justify-between items-center border-t border-gray-300 py-4">
        <Typography variant="body2">© {new Date().getFullYear()} Yuki. All rights reserved.</Typography>

        <Typography variant="body2" align="center">
          Made by{' '}
          <a
            href="https://tiesen.id.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Tiesen
          </a>
        </Typography>
      </Box>
    </Container>
  </AppBar>
)
