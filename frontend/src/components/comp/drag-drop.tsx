'use client'

import { forwardRef, useState } from 'react'
import Dropzone, { DropzoneRef } from 'react-dropzone'

import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import IFields from '@/interfaces/fields.interface'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Props extends IFields {
  previewImg?: string
  disabled?: boolean
}

export const DragAndDrop = forwardRef<DropzoneRef, Props>(({ previewImg, ...fields }, ref) => {
  const [preview, setPreview] = useState<string | undefined>(previewImg ?? undefined)
  const isDisabled = fields.disabled ?? false

  const onDrop = (file: File[]) => {
    try {
      const reader = new FileReader()
      reader.onload = () => setPreview(reader.result as string)
      reader.readAsDataURL(file[0])

      toast({ title: 'Upload image successfully', variant: 'success' })
      return fields.onChange(file[0] as any)
    } catch (e) {
      toast({
        title: 'Update Fail',
        description: 'Image must be less than 5MB and in PNG, JPG or JPEG format',
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
          className={cn(
            'flex cursor-not-allowed items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4',
            fields.disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          )}
        >
          <Input {...getInputProps()} name={fields.name} accept="image/*" disabled={isDisabled} />
          <p className="text-gray-400">
            {isDragActive
              ? 'Drop the files here ...'
              : "Drag 'n' drop some files here, or click to select files"}
          </p>

          {preview && (
            <Image src={preview} alt="preview" width={100} height={200} className="rounded" />
          )}
        </section>
      )}
    </Dropzone>
  )
})

DragAndDrop.displayName = 'DragAndDrop'
