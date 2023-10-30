import { CircularProgress, Typography } from '@mui/material'

interface Props {
  text?: string
}
export const Loading: React.FC<Props> = ({ text = 'Loading...' }) => (
  <div className="fixed inset-0 w-screen h-screen bg-white/50 dark:bg-black/50 backdrop-blur z-50 flex flex-col gap-8 items-center justify-center">
    <CircularProgress />
    <Typography variant="h5" className="animate-pulse">
      {text}
    </Typography>
  </div>
)
