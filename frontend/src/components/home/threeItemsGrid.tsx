import { IProduct } from '@/types/product'
import ProductCard from '../productCard'

const ThreeItemsGrid: React.FC<{ products: IProduct[] }> = async ({ products }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
    {products.map((product, i: number) => (
      <section
        key={product._id}
        className={`h-full w-full ${i === 0 && 'md:col-span-2 md:row-span-2'}`}
      >
        <ProductCard product={product} hasDetails />
      </section>
    ))}
  </div>
)

export default ThreeItemsGrid
