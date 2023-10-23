import { Typography } from '@mui/material'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="main w-screen p-5">
      <Typography variant="body1" align="center">
        © {new Date().getFullYear() + ' '} -{' '}
        <a href="https://tiesen.id.vn" target="_blank" rel="noopener noreferrer">
          Tiesen
        </a>{' '}
        - All rights reserved.
      </Typography>
    </footer>
  )
}

export default Footer
