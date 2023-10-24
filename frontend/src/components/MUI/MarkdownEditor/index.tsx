'use client'

import { Box, FormLabel } from '@mui/material'
import MuiMarkdown from 'mui-markdown'
import CustomTextField from '../CustomTextField'

interface Props {
  label?: string
  value: string
  setValue: (value: string) => void
}

const MarkdownEditor: React.FC<Props> = ({ label, value, setValue }) => (
  <Box>
    <FormLabel>{label}</FormLabel>

    <Box className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <CustomTextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        multiline
        rows={10}
        placeholder="Using Markdown to write your description..."
      />

      <section className="rounded border border-gray-500 p-4">
        <MuiMarkdown>{value}</MuiMarkdown>
      </section>
    </Box>
  </Box>
)

export default MarkdownEditor
