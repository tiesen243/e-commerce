'use client'

import { Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'

import { formatDate } from '@/lib'
import Infomation from './Infomation'

const Page: NextPage = () => {
  const { user, token } = useSession().data || {}
  if (!user) return null

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <img src={user.avatar} alt={user.name} />
      </Grid>

      <Grid item xs={8}>
        <Typography variant="h3" fontWeight="bold" textAlign="center">
          Account Center
        </Typography>

        <Typography variant="h5" textAlign="center">
          {user.userName}
        </Typography>

        <Typography variant="h6" textAlign="center">
          Joined: {formatDate(user.createdAt)}
        </Typography>

        <Infomation user={user} token={token || ''} />
      </Grid>
    </Grid>
  )
}

export default Page
