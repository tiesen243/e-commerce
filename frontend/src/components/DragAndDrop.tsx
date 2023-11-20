'use client'

import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button, Label, Typography, useToast } from './ui'

interface Props {
  preview?: string
  name: string
  setValue: (value: any) => void
}

export const DragAndDrop: React.FC<Props> = (props) => {
  const { name, setValue } = props
  const { toast } = useToast()

  // set preview image
  const [preview, setPreview] = useState<string>()
  useEffect(() => setPreview(props.preview), [props.preview])

  // handle drop image
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0].size > 5 * 1024 * 1024)
      return toast({
        title: 'Image size must be less than 5MB',
        variant: 'destructive',
      })
    else if (!acceptedFiles[0].name.match(/\.(jpg|jpeg|png)$/))
      return toast({
        title: 'Image must be jpg, jpeg or png',
        variant: 'destructive',
      })
    else {
      const file = new FileReader()
      file.onload = () => setPreview(file.result as string)
      file.readAsDataURL(acceptedFiles[0])

      setValue(acceptedFiles[0])
      toast({ title: 'Image uploaded', variant: 'success' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <section className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4">
        <Button asChild>
          <Label>
            Choose image <input onChange={getInputProps().onChange} type="file" accept="image/*" hidden />
          </Label>
        </Button>
        <section {...getRootProps()}>
          <input {...getInputProps} hidden name={name} accept=".png" />
          {isDragActive ? (
            <Typography className="ml-4">Drop image here...</Typography>
          ) : (
            <Typography className="ml-4">Or drag image here</Typography>
          )}
        </section>
      </section>
      {preview && <img src={preview} alt="preview" className="w-32" />}
    </>
  )
}
