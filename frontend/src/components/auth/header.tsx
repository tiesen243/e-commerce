import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Header: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <CardHeader>
    <CardTitle className="font-bold">{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
)

export default Header
