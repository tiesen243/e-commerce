'use client'

import { Loading } from '@/components'
import { Avatar, Button, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import AvatarPopup from './AvatarPopup'

const Page: NextPage = () => {
  const { data } = useSession()
  const user = data?.user
  const [isShow, setShow] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  if (!user) return <Loading />

  return (
    <main className="flex flex-col items-center gap-4">
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
      </Typography>
    </main>
  )
}

export default Page
