'use client'

import Image from 'next/image'
import Link from 'next/link'

import type { IProduct } from '@/types/product'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { makeSlug } from '@/lib/utils'
import { toast } from '../ui/use-toast'

interface Props {
  product: IProduct
  isFirst?: boolean
  hasDetails?: boolean
}

const onError = (e: any) => {
  e.currentTarget.src = '/logo.svg'
  e.currentTarget.classList.add('dark:invert')
}

const ProductCard: React.FC<Props> = ({ product, isFirst = false, hasDetails = false }) => (
  <Card
    className={`${hasDetails && 'group'} relative aspect-square ease-linear hover:border-primary`}
  >
    <CardContent className="absolute flex h-full w-full items-center justify-center">
      <Image
        src={product.image}
        alt={product.name}
        onError={onError}
        width={300}
        height={410}
        className="mt-4 w-2/3 object-contain transition-transform group-hover:scale-105"
      />
    </CardContent>

    <div className="absolute h-full w-full transition-all group-hover:backdrop-blur-lg" />

    <CardHeader className="absolute inset-0 hidden text-pretty group-hover:block">
      <CardTitle>
        {!isFirst
          ? product.name.length > 20
            ? product.name.slice(0, 20) + '...'
            : product.name
          : product.name}
      </CardTitle>
      <CardDescription
        className={`overflow-y-auto text-primary ${
          isFirst ? 'max-h-48' : 'md:max-h-12 lg:max-h-48'
        }`}
      >
        {product.description}
      </CardDescription>
    </CardHeader>

    <CardFooter className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-secondary transition-opacity group-hover:flex-col group-hover:items-start group-hover:bg-secondary/20">
      <CardTitle className="mt-4 group-hover:hidden">
        {product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}
      </CardTitle>

      <CardDescription className="mt-4 text-lg text-primary">
        {product.saleOffPercent === 0 ? (
          product.price + '$'
        ) : (
          <>
            <del>{product.price}$</del>{' '}
            {product.price - (product.price * product.saleOffPercent) / 100}${' '}
            <b className="text-destructive">-{product.saleOffPercent}%</b>
          </>
        )}
      </CardDescription>

      <section className="hidden w-full grid-cols-2 gap-4 group-hover:grid">
        <Button
          className="mt-4"
          variant="default"
          onClick={() => {
            toast({
              title: 'Added to cart',
              description: `Added ${product.name} to cart`,
            })
          }}
        >
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
