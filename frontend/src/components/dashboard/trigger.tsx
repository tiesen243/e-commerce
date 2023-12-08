'use client'

import { useSession } from 'next-auth/react'
import { TabsList, TabsTrigger } from '../ui/tabs'

const Trigger: React.FC = () => {
  const { data } = useSession()
  if (!data) return null
  const role = data.user.role

  return (
    <TabsList className={`grid w-full ${role === 'admin' ? 'grid-cols-4' : 'grid-cols-2'}`}>
      <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
      <TabsTrigger value="create">Create product</TabsTrigger>
      {role === 'admin' && (
        <>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </>
      )}
    </TabsList>
  )
}

export default Trigger
