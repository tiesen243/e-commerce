'use client'

import { useProduct } from '@/hooks'
import { NextPage } from 'next'

import { Loading, ProdCard } from '@/components'
import { Grid } from '@mui/material'

const Page: NextPage = () => {
  const { products, error, isLoading } = useProduct()

  return !isLoading ? (
    <div>
      <Grid container spacing={2}>
        {products.map((prod) => (
          <Grid item xs={6} sm={4} lg={3} key={prod._id}>
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
