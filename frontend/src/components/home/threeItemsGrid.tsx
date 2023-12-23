import axios from '@/lib/axios'
import { IProduct } from '@/types/product'
import ProductCard from '../productCard'

const ThreeItemsGrid = async () => {
  const { data } = await axios('/product?limit=3')

  const products: IProduct[] = data.data
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
      {products.map((product, i) => (
        <section key={i} className={`h-full w-full ${i === 0 && 'md:col-span-2 md:row-span-2'}`}>
          <ProductCard product={product} hasDetails />
        </section>
      ))}
    </div>
  )
}

export default ThreeItemsGrid
