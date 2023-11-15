import { Input, Label } from './ui'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const TextFields: React.FC<Props> = ({ label, ...rest }) => (
  <div className="grid grid-cols-4 items-center gap-4">
    <Label htmlFor={label} className="text-right">
      {label}
    </Label>
    <Input id={label} className="col-span-3" {...rest} />
  </div>
)

export default TextFields
