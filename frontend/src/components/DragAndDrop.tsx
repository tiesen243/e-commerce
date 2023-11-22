import Dropzone, { DropzoneProps } from 'react-dropzone'
import { Input, Typography } from './ui'
import { useState } from 'react'

interface Props extends DropzoneProps {
  onChange: (value: any) => void
  preview?: string
}

export const DragAndDrop: React.FC<Props> = ({ onChange, ...rest }) => {
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const onDrop = (file: File[]) => {
    const reader = new FileReader()
    reader.onload = () => setPreview(reader.result as string)
    reader.readAsDataURL(file[0])
    return onChange(file[0])
  }

  return (
    <Dropzone onDrop={onDrop} multiple={false} maxSize={5242880}>
      {({ getRootProps, getInputProps, isDragActive }) => (
        <section
          {...getRootProps({})}
          className="flex items-center justify-between rounded-md border-2 border-dashed border-gray-400 p-4"
        >
          <Input {...getInputProps()} accept="image/*" />
          <Typography className="text-gray-400">
            {isDragActive ? 'Drop the files here ...' : "Drag 'n' drop some files here, or click to select files"}
          </Typography>
          {preview && <img src={preview} alt="preview" className="w-16" />}
        </section>
      )}
    </Dropzone>
  )
}
