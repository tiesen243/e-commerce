import { ArrowBackIosNewRounded } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

export const BackBtn: React.FC = () => {
  const { back } = useRouter()
  return (
    <Button onClick={back} variant="outlined" color="secondary">
      <ArrowBackIosNewRounded fontSize="small" /> Back
    </Button>
  )
}
