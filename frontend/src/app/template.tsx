'use client'
import { Toaster } from '@/components/ui'

const RootTemplate: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <Toaster />
  </>
)

export default RootTemplate
