import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" className="flex cursor-auto items-center space-x-2 text-2xl font-bold">
    <Image src="/logo.svg" width={40} height={40} alt="logo" className="dark:invert" />
    <h1 className="block md:hidden lg:block">E-Commerce</h1>
  </Link>
)

export default Logo
