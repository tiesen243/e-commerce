'use client'

import { useSession } from 'next-auth/react'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'

const Trigger: React.FC = () => {
  const { data, status } = useSession()
  if (status === 'loading' || !data) return <LoadingTrigger />

  const role = data.user.role

  return (
    <TabsList className={`grid w-full ${role === 'admin' ? 'grid-cols-3' : 'grid-cols-2'}`}>
      <TabsTrigger value="products">Products</TabsTrigger>
      <TabsTrigger value="create">Create product</TabsTrigger>
      {role === 'admin' && <TabsTrigger value="orders">Orders</TabsTrigger>}
    </TabsList>
  )
}

export default Trigger

const LoadingTrigger: React.FC = () => (
  <TabsList className="grid w-full grid-cols-4">
    {Array.from({ length: 4 }).map((_, i) => (
      <TabsTrigger key={i} value="dashboard">
        Loading...
      </TabsTrigger>
    ))}
  </TabsList>
)
