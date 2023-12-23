import { makeSlug } from '@/lib/utils'
import { IProduct } from '@/types/product'
import Link from 'next/link'
import ProductCard from '../productCard'

const Carousel: React.FC<{ products: IProduct[] }> = ({ products }) => (
  <div className="mt-4 w-full overflow-x-auto pb-6 pt-1">
    <ul className="flex h-fit animate-carousel gap-4">
      {products.map((product) => (
        <Link href={`/product/${makeSlug(product)}`} key={product._id} passHref legacyBehavior>
          <li className="relative aspect-square w-2/3 max-w-[475px] flex-none cursor-pointer md:w-1/3">
            <ProductCard product={product} />
          </li>
        </Link>
      ))}
    </ul>
  </div>
)

export default Carousel
