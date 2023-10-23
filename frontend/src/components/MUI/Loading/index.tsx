import { CircularProgress } from '@mui/material'

interface Props {
  text?: string
}

const Loading: React.FC<Props> = (props) => {
  const { text = 'Loading...' } = props
  return (
    <div className="fixed inset-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black/50">
      <CircularProgress color="info" />
      <p className="animate-pulse text-2xl font-bold">{text}</p>
    </div>
  )
}

export default Loading
