import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-4">
    <Image src="/logo.svg" width={40} height={40} alt="Logo" className="dark:invert" />

    <article className="typography block font-bold md:hidden lg:block">
      <h5>{process.env.NEXT_PUBLIC_APP_NAME}</h5>
    </article>
  </Link>
)

export default Logo
