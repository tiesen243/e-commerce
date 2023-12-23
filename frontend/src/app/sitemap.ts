import axios from '@/lib/axios'
import { meta } from '@/lib/meta'
import { makeSlug } from '@/lib/utils'
import { Category } from '@/types/enum'
import { IProduct } from '@/types/product'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'search', 'cart'].map((route) => ({
    url: `${meta.url}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const productsPromise = axios
    .get('/product')
    .then((res) => res.data.data)
    .then((products: IProduct[]) =>
      products.map((product) => ({
        url: `${meta.url}/product/${makeSlug(product)}`,
        lastModified: new Date(product.updatedAt).toISOString(),
      }))
    )

  const categoriesPromise = Object.values(Category).map((cate) => ({
    url: `${meta.url}/search/${cate}`,
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
