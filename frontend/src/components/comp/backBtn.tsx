'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { ChevronLeftIcon } from 'lucide-react'

const BackBtn: React.FC = () => {
  const { back } = useRouter()
  return (
    <Button variant="outline" size="icon" onClick={back}>
      <ChevronLeftIcon />
    </Button>
  )
}

export default BackBtn
