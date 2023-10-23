'use client'

import { Box, Button, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { Prod } from '@/types/product.type'
import { showErrorToast } from '@/utils'

interface Props {
  preview?: string
  setProd: React.Dispatch<React.SetStateAction<Prod>>
  setIsChanged?: React.Dispatch<React.SetStateAction<boolean>>
}

const DragAndDrop: React.FC<Props> = (props) => {
  const { setProd, setIsChanged } = props

  const [preview, setPreview] = useState<string>()
  useEffect(() => setPreview(props.preview), [props.preview])
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0].size > 5 * 1024 * 1024) return showErrorToast('Image size must be less than 5MB')
    else if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/))
      return showErrorToast('Image must be .jpg or .png or .jpeg')
    else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(acceptedFiles[0])
      setProd((prev) => ({ ...prev, img: acceptedFiles[0] }))
      if (setIsChanged) setIsChanged(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Box className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4">
        <Button variant="contained" color="info" component="label">
          Choose image <input onChange={getInputProps().onChange} type="file" hidden />
        </Button>
        <Box {...getRootProps()}>
          <input {...getInputProps} hidden />
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

export default DragAndDrop
