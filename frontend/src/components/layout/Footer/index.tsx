import { Card } from '@/components/ui'

const Footer: React.FC = () => (
  <footer className="w-screen">
    <Card className="flex items-center justify-center">
      <article className="typography">
        <p>&copy; {new Date().getFullYear()}. All rights reserved</p>
      </article>
    </Card>
  </footer>
)

export default Footer
