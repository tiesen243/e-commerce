import { LoadingSpinner, Typography } from './ui'

interface Props {
  text?: string
}

const Loading: React.FC<Props> = ({ text = 'Loading...' }) => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-primary/50 backdrop-blur">
    <LoadingSpinner className="text-xl" />
    <Typography variant="h4" className="animate-pulse">
      {text}
    </Typography>
  </div>
)

export default Loading
