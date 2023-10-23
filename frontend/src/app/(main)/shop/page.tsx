'use client'

import { useProduct } from '@/hooks'
import { NextPage } from 'next'

import { FirstCard, Loading, ProdCard } from '@/components'
import { Grid, Typography } from '@mui/material'

const Page: NextPage = () => {
  const { products, error, isLoading } = useProduct()
  return !isLoading ? (
    <div>
      <Typography variant="h1" className="font-bold mb-4">
        New Arrival
      </Typography>
      <FirstCard product={products[0]} />
      <Grid container spacing={2}>
        {products.slice(1).map((prod) => (
          <Grid item xs={6} sm={4} md={3} lg={12 / 5} key={prod._id}>
            <ProdCard product={prod} />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <Loading />
  )
}

export default Page
