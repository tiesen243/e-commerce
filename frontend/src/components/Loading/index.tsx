import { CircularProgress } from '@mui/material'

interface Props {
  text?: string
}

const Loading: React.FC<Props> = (props) => {
  const { text = 'Loading...' } = props
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black/50 flex flex-col justify-center items-center gap-4">
      <CircularProgress color="info" />
      <p className="text-2xl font-bold animate-pulse">{text}</p>
    </div>
  )
}

export default Loading
