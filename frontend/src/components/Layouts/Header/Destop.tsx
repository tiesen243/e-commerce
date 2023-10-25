import AdbIcon from '@mui/icons-material/Adb'
import { Box, Button } from '@mui/material'

import Title from './Title'
import Link from 'next/link'
interface DestopProps {
  title: string
  pages: string[]
}

const Destop: React.FC<DestopProps> = ({ title, pages }) => (
  <>
    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    <Title title={title} display={{ xs: 'flex', md: 'none' }} />

    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button component={Link} href={page} key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
          {page}
        </Button>
      ))}
    </Box>
  </>
)

export default Destop
