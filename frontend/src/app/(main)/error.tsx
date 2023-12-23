'use client'
import { useEffect } from 'react'
import type { NextPage } from 'next'

import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/use-toast'

interface IError {
  error: Error & { digest?: string }
  reset: () => void
}
const Error: NextPage<IError> = ({ error, reset }) => {
  useEffect(() => {
    toast({
      title: error.name || 'Loading error',
      description: error.message,
      variant: 'destructive',
    })
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
        </CardHeader>

        <CardFooter>
          <Button onClick={reset}>Try again</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Error
