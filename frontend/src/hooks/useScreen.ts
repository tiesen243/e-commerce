'use client'

import { useEffect, useState } from 'react'

export const useScreen = () => {
  const [screen, setScreen] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screen
}
