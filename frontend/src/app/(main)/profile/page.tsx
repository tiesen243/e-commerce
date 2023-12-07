'use client'

import { LockIcon, LogOutIcon } from 'lucide-react'
import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

const EditProfile = dynamic(() => import('@/components/profile/edit'), { ssr: false })
const ChangePassword = dynamic(() => import('@/components/profile/changePass'), { ssr: false })

const Page: NextPage = () => {
  const { data, update } = useSession()
  if (!data) return <div>Loading...</div>

  const handleLogout = () => signOut({ redirect: false })

  return (
    <div className="grid grid-cols-3 gap-2">
      <Image
        src={data.user.avatar}
        alt="Avatar"
        width={200}
        height={200}
        className="aspect-square rounded object-cover"
      />

      <article className="typography col-span-2">
        <h1>{data.user.userName}</h1>
        <p>Email: {data.user.email}</p>
        <p>Joined: {formatDate(data.user.createdAt)}</p>
      </article>

      <section className="col-span-3 grid grid-cols-2 gap-2 md:grid-cols-3">
        <EditProfile user={data.user} update={update} />

        <ChangePassword />

        <Button variant="destructive" className="col-span-2 md:col-span-1" onClick={handleLogout}>
          <LogOutIcon className="mr-2" /> Log out
        </Button>
      </section>
    </div>
  )
}

export default Page
