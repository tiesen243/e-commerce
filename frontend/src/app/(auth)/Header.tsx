import { CardHeader } from '@/components/ui'

interface Props {
  title: string
}

const Header: React.FC<Props> = ({ title }) => (
  <CardHeader className="typography">
    <h1 className="text-center font-bold">{title}</h1>
  </CardHeader>
)

export default Header
