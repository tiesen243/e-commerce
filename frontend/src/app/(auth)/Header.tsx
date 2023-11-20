import { CardHeader, Typography } from '@/components/ui'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => (
  <CardHeader>
    <Typography variant="h1" className="text-center">
      {title}
    </Typography>
  </CardHeader>
)

export default Header
