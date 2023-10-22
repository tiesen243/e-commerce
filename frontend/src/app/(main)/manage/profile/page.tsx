'use client'

import { ModeEditRounded } from '@mui/icons-material'
import { Avatar, Button, IconButton, Tooltip, Typography } from '@mui/material'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import { useState } from 'react'

import { Loading } from '@/components'
import { formatDate } from '@/utils'
import AvatarPopup from './AvatarPopup'
import NamePopup from './NamePopup'
import Link from 'next/link'

const Page: NextPage = () => {
  const { data } = useSession()
  const user = data?.user
  const [isShow, setShow] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isChange, setIsChange] = useState<boolean>(false)

  if (!user) return <Loading />

  return (
    <main className="flex flex-col items-center  gap-4 main p-4 rounded">
      <Typography variant="h1" className="text-4xl">
        Acount Infomation
      </Typography>

      <Avatar
        sx={{ width: 200, height: 200 }}
        {...(user.avatar ? { src: user.avatar } : { sx: { bgcolor: 'gray' } })}
        className="transition-transform duration-300 ease-in-out hover:scale-105 mb-4"
        onClick={() => setShow((prev) => !prev)}
      />
      <Button variant="outlined" color="info" hidden={!isShow} onClick={() => setIsOpen(true)}>
        Change avatar
      </Button>
      {isOpen && <AvatarPopup setIsOpen={setIsOpen} user={user} token={data.token} />}

      <Typography variant="h1" className="text-4xl">
        {user.userName}
        <Tooltip title="Change username">
          <IconButton className="ml-2" onClick={() => setIsChange(true)}>
            <ModeEditRounded />
          </IconButton>
        </Tooltip>
      </Typography>
      {isChange && <NamePopup setIsChange={setIsChange} token={data.token} name={user.userName} />}

      <Typography variant="subtitle1" className="text-xl">
        Role: {user.role}
      </Typography>

      <Typography variant="subtitle1" className="text-xl">
        Email: {user.email}
      </Typography>

      <Typography variant="subtitle1" className="text-xl">
        Join at: {formatDate(user.createdAt)}
      </Typography>

      <Button variant="contained" color="info" component={Link} href="/manage/profile/change-password">
        Change password
      </Button>
    </main>
  )
}

export default Page
