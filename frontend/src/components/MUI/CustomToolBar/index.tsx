'use client'

import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid'
import { Button, Typography } from '@mui/material'
import Link from 'next/link'

const CustomToolbar = () => (
  <GridToolbarContainer className="flex justify-around">
    <Typography variant="caption" fontWeight="bold" className="text-2xl">
      Manage Product
    </Typography>
    <Button component={Link} href="/manage/product/create" variant="text" color="info">
      Create Product
    </Button>
    <GridToolbarColumnsButton sx={{ color: 'text.primary' }} />
    <GridToolbarFilterButton sx={{ color: 'text.primary' }} />
    <GridToolbarDensitySelector sx={{ color: 'text.primary' }} />
    <GridToolbarExport sx={{ color: 'text.primary' }} />
  </GridToolbarContainer>
)

export default CustomToolbar
