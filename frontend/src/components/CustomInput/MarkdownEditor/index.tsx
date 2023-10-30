import { FormControl, FormControlLabel, Switch, TextField, TextFieldProps, Typography } from '@mui/material'
import MuiMarkdown from 'mui-markdown'
import { useState } from 'react'

interface Props {
  label: string
  value: string
  setValue: (value: string) => void
}

export const MarkdownEditor: React.FC<Props & TextFieldProps> = ({ label, value, setValue, ...rest }) => {
  const [preview, setPreview] = useState<boolean>(false)
  return (
    <FormControl fullWidth>
      <section className="flex items-center justify-between">
        <Typography variant="subtitle1">{label}</Typography>

        <FormControlLabel
          control={<Switch checked={preview} onChange={(e) => setPreview(e.target.checked)} color="secondary" />}
          label="Preview"
        />
      </section>

      {!preview ? (
        <TextField
          color="secondary"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          multiline
          rows={10}
          {...rest}
        />
      ) : (
        <section className="max-h-[261px] h-[261px] overflow-auto border border-black dark:border-white rounded px-3 py-4">
          <MuiMarkdown>{value}</MuiMarkdown>
        </section>
      )}
    </FormControl>
  )
}
