'use client'

import { forwardRef, useState } from 'react'
import Dropzone, { DropzoneRef } from 'react-dropzone'

import IField from '@/types/field'
import { Input, useToast } from './ui'

interface Props {
  previewImg?: string
  field: IField
}

const DragAndDrop = forwardRef<DropzoneRef, Props>(({ previewImg, field }, ref) => {
  const [preview, setPreview] = useState<string | undefined>(previewImg ?? undefined)
  const { toast } = useToast()

  const onDrop = (file: File[]) => {
    try {
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result as string)
      reader.readAsDataURL(file[0])
      toast({
        title: 'Success',
        description: 'Image uploaded',
        variant: 'success',
      })

      return field.onChange(file[0] as any)
    } catch (e) {
      toast({
        title: 'Error',
        description: 'Image not uploaded',
        variant: 'destructive',
      })
    }
  }

  return (
    <Dropzone
      onDrop={onDrop}
      multiple={false}
      ref={ref}
      maxSize={5242880}
      accept={{ image: ['image/*'] }}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section
          {...getRootProps({})}
          className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4"
        >
          <Input {...getInputProps()} name={field.name} accept="image/*" />
          <p className="text-gray-400">
            {isDragActive
              ? 'Drop the files here ...'
              : "Drag 'n' drop some files here, or click to select files"}
          </p>

          {preview && <img src={preview} alt="preview" width={100} height={200} loading="lazy" />}
        </section>
      )}
    </Dropzone>
  )
})

export default DragAndDrop

DragAndDrop.displayName = 'DragAndDrop'
