import { AppBar, Container, Paper, Toolbar } from '@mui/material'
import HeaderSkeleton from './HeaderSkeleton'

export const SkeletonLoadPage: React.FC = () => (
  <Paper className="h-screen w-screen">
    <HeaderSkeleton />
  </Paper>
)
