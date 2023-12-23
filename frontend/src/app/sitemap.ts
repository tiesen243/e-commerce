import axios from '@/lib/axios'
import { makeSlug } from '@/lib/utils'
import { Category } from '@/types/enum'
import { IProduct } from '@/types/product'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'search', 'cart'].map((route) => ({
    url: `${appUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const productsPromise = axios
    .get('/product')
    .then((res) => res.data.data)
    .then((products: IProduct[]) =>
      products.map((product) => ({
        url: `${appUrl}/product/${makeSlug(product)}`,
        lastModified: new Date(product.updatedAt).toISOString(),
      }))
    )

  const categoriesPromise = Object.values(Category).map((cate) => ({
    url: `${appUrl}/search/${cate}`,
    lastModified: new Date().toISOString(),
  }))

  let fetchedRoutes: Route[] = []

  try {
    fetchedRoutes = (await Promise.all([categoriesPromise, productsPromise])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }

  return [...routesMap, ...fetchedRoutes]
}
