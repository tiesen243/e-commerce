import axios from '@/lib/axios'
import { IProduct } from '@/types/product'
import ProductCard from '../productCard'
import Link from 'next/link'
import { makeSlug } from '@/lib/utils'

const Carousel: React.FC = async () => {
  const { data } = await axios.get('/product?limit=13')

  const products: IProduct[] = data.data.slice(3)

  return (
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
}

export default Carousel
