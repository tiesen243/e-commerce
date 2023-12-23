'use client'

import Link from 'next/link'
import Image from 'next/image'

import type { IProduct } from '@/types/product'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from './ui/button'
import { makeSlug } from '@/lib/utils'

interface Props {
  product: IProduct
  hasDetails?: boolean
}

const onError = (e: any) => {
  e.currentTarget.src = '/logo.svg'
  e.currentTarget.classList.add('dark:invert')
}

const ProductCard: React.FC<Props> = ({ product, hasDetails = false }) => (
  <Card className={`${hasDetails && 'group'} relative aspect-square hover:border-primary`}>
    <CardContent className="absolute flex h-full w-full items-center justify-center">
      <Image
        src={product.image}
        alt={product.name}
        onError={onError}
        width={200}
        height={300}
        className="mt-4 h-full w-2/3 object-contain transition-transform group-hover:scale-105"
      />
    </CardContent>

    <div className="absolute h-full w-full transition-all group-hover:backdrop-blur-lg" />

    <CardHeader className="absolute inset-0 hidden text-pretty group-hover:block">
      <CardTitle>{product.name}</CardTitle>
      <CardDescription className="max-h-40 overflow-y-auto text-primary">
        {product.description}
      </CardDescription>
    </CardHeader>

    <CardFooter className="absolute bottom-0 left-0 flex w-full flex-col items-start bg-secondary transition-opacity group-hover:bg-secondary/20">
      <CardTitle className="mt-4 group-hover:hidden">{product.name}</CardTitle>

      <CardDescription className="mt-4 hidden text-lg text-primary group-hover:block">
        {product.saleOffPercent === 0 ? (
          product.price
        ) : (
          <>
            <del>{product.price}$</del>{' '}
            {product.price - (product.price * product.saleOffPercent) / 100}${' '}
            <b className="text-destructive">-{product.saleOffPercent}%</b>
          </>
        )}
      </CardDescription>

      <section className="hidden w-full grid-cols-2 gap-4 group-hover:grid">
        <Button className="mt-4" variant="default">
          Add to cart
        </Button>

        <Button className="mt-4" variant="secondary" asChild>
          <Link href={`/product/${makeSlug(product)}`}>Details</Link>
        </Button>
      </section>
    </CardFooter>
  </Card>
)

export default ProductCard
