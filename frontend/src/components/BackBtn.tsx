'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from './ui'
import { useRouter } from 'next/navigation'

interface Props {
  className?: string
}

const BackBtn: React.FC<Props> = ({ className }) => {
  const { push } = useRouter()
  const back = () => push('/')
  return (
    <Button variant="outline" size="icon" onClick={back} className={className}>
      <ChevronLeft />
    </Button>
  )
}

export default BackBtn
