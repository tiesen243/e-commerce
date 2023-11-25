'use client'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { signOut, useSession } from 'next-auth/react'
import nextImport from '@/lib/nextImport'

const EditProfileDialog = dynamic(() => import('@/components/profile/update'), { ssr: false })
const Button = nextImport('components/ui/button')

const Page: NextPage = () => {
  const { data, update } = useSession()
  if (!data) return null
  const getIn = new Date().getHours() < 12 ? 'Ohayo' : 'Konbanwa'

  return (
    <div className="grid grid-cols-1 space-x-4 space-y-8 md:grid-cols-3">
      <section className="mx-auto w-1/2 md:w-full">
        <img src={data.user.avatar} alt="hero" className="aspect-square rounded-full object-cover" />
      </section>

      <section className="flex flex-col gap-2 md:col-span-2">
        <article className="typography">
          <h2>{`${getIn}, ${data.user.userName}`}</h2>
          <h3>Information</h3>
          <p>Email: {data.user.email}</p>
          <p>Joined: {new Date(data?.user.createdAt).toLocaleString('vi-VN', { timeZone: 'UTC' })}</p>
        </article>

        <section className="grid grid-cols-1 space-y-4 md:grid-cols-3 md:space-x-4 md:space-y-0">
          <EditProfileDialog user={data.user} update={update} />

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
