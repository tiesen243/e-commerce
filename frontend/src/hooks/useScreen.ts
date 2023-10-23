import { useEffect, useState } from 'react'

const useScreen = () => {
  const [screen, setScreen] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

  const handleResize = () => setScreen(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screen
}

export default useScreen
