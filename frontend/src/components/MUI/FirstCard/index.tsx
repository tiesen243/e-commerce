'use client'

import { showSuccessToast } from '@/utils'
import { AddCircleRounded, RemoveCircleRounded } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@mui/material'

import Link from 'next/link'
import { useState } from 'react'

import Product from '@/types/product.type'
import { MuiMarkdown } from 'mui-markdown'
interface Props {
  product: Product
}

const FirstCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1)
  const handleIncrease = () => setQuantity((prev) => prev + 1)
  const handleDecrease = () => {
    if (quantity === 1) return
    setQuantity((prev) => prev - 1)
  }

  const handleAddToCart = () => {
    showSuccessToast(`Added ${quantity} ${product.name} to cart`)
  }
  return (
    <Card className="mb-8 grid h-[300px] w-full grid-cols-3 gap-2 rounded-2xl bg-secondary-light transition-colors duration-300 ease-linear dark:bg-secondary-dark md:w-2/3">
      <img src={product.image} alt={product.name} className="m-4 h-[268px] rounded-lg" />

      <section className="col-span-2">
        <CardContent className="flex flex-col gap-4">
          <Typography className="text-xl font-medium">{product.name}</Typography>

          <section className="max-h-32 overflow-y-auto">
            <MuiMarkdown>{product.description}</MuiMarkdown>
          </section>

          <section className="flex items-center justify-between">
            <Typography className="flex items-center gap-2 text-xl font-medium text-blue-light">
              Price:{' '}
              {product.saleOffPercent !== 0 ? (
                <>
                  <del>${product.price}</del>
                  <span className="text-red-600">
                    {' $' + (product.price - (product.price * product.saleOffPercent) / 100).toFixed(2)}
                  </span>

                  <span className="ml-2 text-sm font-bold text-green-600">-{product.saleOffPercent}%</span>
                </>
              ) : (
                <>${product.price}</>
              )}
            </Typography>

            <div className="flex h-8 w-24 items-center justify-between rounded-full bg-blue-light">
              <IconButton onClick={handleDecrease}>
                <RemoveCircleRounded fontSize="medium" className="text-white" />
              </IconButton>

              <span className="font-bold text-white">{quantity}</span>

              <IconButton onClick={handleIncrease}>
                <AddCircleRounded fontSize="medium" className="text-white" />
              </IconButton>
            </div>
          </section>
        </CardContent>

        <CardActions className="flex justify-around">
          <Button variant="outlined" onClick={handleAddToCart}>
            Add to cart
          </Button>
          <Button variant="contained" className="bg-blue-light" component={Link} href={`/shop/product/${product._id}`}>
            Details
          </Button>
        </CardActions>
      </section>
    </Card>
  )
}

export default FirstCard
