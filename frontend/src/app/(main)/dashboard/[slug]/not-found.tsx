'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getIdFromSlug } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NotFound = () => {
  const pathName = usePathname()
  const id = getIdFromSlug(pathName.split('/').pop() || '')
  const slug = pathName.split('/').pop()?.split('-')
  const name = slug?.slice(0, slug.length - 1).join(' ') || ''

  return (
    <div className="flex h-[80vh] items-center justify-center">
      <Card className="typography prose-h3:m-0">
        <CardHeader>
          <CardTitle className="text-center font-bold">404</CardTitle>
          <CardDescription>The product which you are looking for is not found.</CardDescription>
        </CardHeader>

        <CardContent>
          <h5>Product ID: {id}</h5>
          <h5>Product Name: {name}</h5>
        </CardContent>

        <CardFooter className="flex justify-center prose-a:underline-offset-4">
          <Link href="/dashboard">Back to Dashboard</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default NotFound
