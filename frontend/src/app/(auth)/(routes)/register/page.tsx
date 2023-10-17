'use client'

import StyledTextField from '@/components/StyledTextField'
import { toggleTheme } from '@/redux/slicers/theme.slice'
import { Typography } from '@mui/material'
import { NextPage } from 'next'
import { useDispatch } from 'react-redux'

const Page: NextPage = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Typography variant="h1" className="text-center">
        Register New User
      </Typography>

      <StyledTextField label="Username" />
      <button className="btn" onClick={() => dispatch(toggleTheme())}>
        Register
      </button>
    </>
  )
}

export default Page
