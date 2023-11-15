'use client'

import { Card, Typography } from '@/components/ui'

const Footer: React.FC = () => (
  <Card className="flex items-center justify-center p-2">
    <Typography variant="small">
      &copy; {new Date().getFullYear()}. All rights reserved
    </Typography>
  </Card>
)

export default Footer
