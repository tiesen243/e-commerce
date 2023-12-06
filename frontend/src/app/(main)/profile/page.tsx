'use client'

import { LockIcon, LogOutIcon } from 'lucide-react'
import type { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { formatDate } from '@/lib/utils'

const EditProfile = dynamic(() => import('@/components/profile/edit'), { ssr: false })

const Page: NextPage = () => {
  const { data } = useSession()
  if (!data) return <div>Loading...</div>

  const handleLogout = () => signOut({ redirect: false })

  return (
    <div className="grid grid-cols-2">
      <Image
        src={data.user.avatar}
        alt="Avatar"
        width={128}
        height={128}
        className="aspect-square rounded object-fill"
      />

      <article className="typography">
        <h1>{data.user.userName}</h1>
        <p>Email: {data.user.email}</p>
        <p>Joined: {formatDate(data.user.createdAt)}</p>
      </article>

      <section className="col-span-2 grid grid-cols-2 gap-2 md:grid-cols-3">
        <EditProfile user={data.user} />

        <Button variant="secondary">
          <LockIcon className="mr-2" /> Change password
        </Button>

        <Button variant="destructive" className="col-span-2 md:col-span-1" onClick={handleLogout}>
          <LogOutIcon className="mr-2" /> Log out
        </Button>
      </section>
    </div>
  )
}

export default Page
