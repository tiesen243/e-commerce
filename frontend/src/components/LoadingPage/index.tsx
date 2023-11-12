import { logo } from '@/lib'
import { Avatar, Paper, Typography } from '@mui/material'
import { NextPage } from 'next'

export const LoadingPage: NextPage = () => (
  <Paper className="w-screen h-screen flex flex-col gap-8 items-center justify-center">
    <Avatar src={logo} sx={{ width: 300, height: 300 }} />
    <Typography variant="h3" fontWeight="bold" className="font-bold animate-pulse">
      {process.env.NEXT_PUBLIC_SITE_NAME}
    </Typography>
  </Paper>
)
