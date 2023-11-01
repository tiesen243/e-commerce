import { Paper } from '@mui/material'
import HeaderSkeleton from './HeaderSkeleton'

export const SkeletonLoadPage: React.FC = () => (
  <Paper className="w-screen h-screen trans-color">
    <HeaderSkeleton />
  </Paper>
)
