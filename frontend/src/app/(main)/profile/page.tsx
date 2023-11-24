'use client'

import { Button } from '@/components/ui'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import EditProfileDialog from './EditProfile'
import { Suspense } from 'react'

const Page: NextPage = () => {
  const { data, update } = useSession()
  if (!data) return null
  const getIn = new Date().getHours() < 12 ? 'Ohayo' : 'Konbanwa'

  return (
    <div className="grid grid-cols-1 space-x-4 space-y-8 md:grid-cols-3">
      <section className="mx-auto w-1/2 md:w-full">
        <img src={data.user.avatar} alt="hero" className="aspect-square rounded-full object-cover" />
      </section>

      <section className="typography flex flex-col gap-2 md:col-span-2">
        <h2>
          {getIn}, {data.user.userName}
        </h2>

        <h3>Information</h3>

        <p>Email: {data.user.email}</p>
        <p>
          Joined:{' '}
          {new Date(data?.user.createdAt).toLocaleString('vi-VN', {
            timeZone: 'UTC',
          })}
        </p>

        <section className="grid grid-cols-1 space-y-4 md:grid-cols-3 md:space-x-4 md:space-y-0">
          <Suspense>
            <EditProfileDialog user={data.user} update={update} />
          </Suspense>

          <Button>Change password</Button>

          <Button variant="destructive" onClick={() => signOut({ callbackUrl: '/' })}>
            Log out
          </Button>
        </section>
      </section>
    </div>
  )
}

export default Page
