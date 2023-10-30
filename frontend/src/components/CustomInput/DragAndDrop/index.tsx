'use client'

import { Box, Button, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { showErrorToast, showSuccessToast } from '@/lib'

interface Props {
  preview?: string
  name: string
  setValue: (value: any) => void
}

export const DragAndDrop: React.FC<Props> = (props) => {
  const { name, setValue } = props

  // set preview image
  const [preview, setPreview] = useState<string>()
  useEffect(() => setPreview(props.preview), [props.preview])

  // handle drop image
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0].size > 5 * 1024 * 1024) return showErrorToast('Image size must be less than 5MB')
    else if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/))
      return showErrorToast('Image must be .jpg or .png or .jpeg')
    else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(acceptedFiles[0])

      setValue(acceptedFiles[0])
      showSuccessToast('Image uploaded successfully')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Box className="flex justify-between items-center border-2 border-dashed border-gray-400 rounded-md p-4">
        <Button variant="contained" color="secondary" component="label">
          Choose image <input onChange={getInputProps().onChange} type="file" hidden />
        </Button>
        <Box {...getRootProps()}>
          <input {...getInputProps} hidden name={name} />
          {isDragActive ? (
            <Typography variant="subtitle2" className="ml-4">
              Drop image here...
            </Typography>
          ) : (
            <Typography variant="subtitle2" className="ml-4">
              Or drag image here
            </Typography>
          )}
        </Box>
      </Box>
      {preview && <img src={preview} alt="preview" className="w-32" />}
    </>
  )
}
