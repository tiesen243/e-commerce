import Dropzone, { DropzoneRef } from 'react-dropzone'
import { Input, Typography } from './ui'
import { forwardRef, useState } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  preview?: string
  name: string
  setValues: (value: any) => any
}

export const DragAndDrop = forwardRef<DropzoneRef, Props>(({ name, setValues, ...rest }, ref) => {
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const onDrop = (file: File[]) => {
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file[0])
    return setValues(file[0])
  }

  return (
    <Dropzone onDrop={onDrop} multiple={false} ref={ref}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section
          {...getRootProps({})}
          className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4"
        >
          <Input {...getInputProps()} name={name} accept="image/*" />
          <Typography className="text-gray-400">
            {isDragActive ? 'Drop the files here ...' : "Drag 'n' drop some files here, or click to select files"}
          </Typography>
          {preview && <img src={preview} alt="preview" className="w-16" />}
        </section>
      )}
    </Dropzone>
  )
})

DragAndDrop.displayName = 'DragAndDrop'
