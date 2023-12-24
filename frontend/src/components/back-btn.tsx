'use client'

import { ChevronLeftIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

const BackBtn: React.FC<{ className?: string }> = ({ className }) => {
  const { back } = useRouter()
  return (
    <Button variant="outline" size="icon" className={className} onClick={back}>
      <ChevronLeftIcon />
    </Button>
  )
}

export default BackBtn
