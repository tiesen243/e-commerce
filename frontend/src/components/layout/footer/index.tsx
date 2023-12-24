import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import FooterMenu from './footer-menu'

const copyrightDate = new Date().getFullYear()
const Footer: React.FC = () => (
  <footer className="border bg-card text-card-foreground shadow-sm">
    <div className="container mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-2 xl:px-0">
      <div>
        <Link className="flex items-center gap-2 text-black md:pt-1 dark:text-white" href="/">
          <div className="flex size-7 flex-none items-center justify-center rounded-lg border bg-background">
            <Image src="/logo.svg" alt="logo" width={10} height={10} className="dark:invert" />
          </div>
          <span className="uppercase">{process.env.NEXT_PUBLIC_APP_NAME}</span>
        </Link>
      </div>

      <FooterMenu />
    </div>
    <Separator />

    <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
        <p>&copy; {copyrightDate} TN. All rights reserved.</p>
        <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
        <p>Designed in Vietnam</p>
        <p className="md:ml-auto">
          <a href="https://tiesen.id.vn" className="text-black dark:text-white">
            Crafted by Tiesen
          </a>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
