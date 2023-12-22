'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { ChevronLeftIcon } from 'lucide-react'

const BackBtn: React.FC<{ className?: string }> = ({ className }) => {
  const { back } = useRouter()
  return (
    <Button variant="outline" size="icon" className={className} onClick={back}>
      <ChevronLeftIcon />
    </Button>
  )
}

export default BackBtn
