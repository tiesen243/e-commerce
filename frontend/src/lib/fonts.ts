import { Poppins } from 'next/font/google'
import { cn } from './utils'

const poppins = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

const fonts = cn('min-h-screen bg-background font-sans antialiased', poppins.variable)

export default fonts
