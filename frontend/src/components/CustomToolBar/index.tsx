'use client'

import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid'
import { Typography } from '@mui/material'

const CustomToolbar = () => (
  <GridToolbarContainer className="flex justify-around">
    <Typography variant="caption" fontWeight="bold" className="text-2xl">
      Manage Product
    </Typography>
    <GridToolbarColumnsButton sx={{ color: 'text.primary' }} />
    <GridToolbarFilterButton sx={{ color: 'text.primary' }} />
    <GridToolbarDensitySelector sx={{ color: 'text.primary' }} />
    <GridToolbarExport sx={{ color: 'text.primary' }} />
  </GridToolbarContainer>
)

export default CustomToolbar
