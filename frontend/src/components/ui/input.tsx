import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input: React.FC<InputProps> = ({ className, label, ...rest }) => (
  <label className="flex flex-col">
    {label && (
      <span>
        {rest.required && '* '}
        {label
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())}
      </span>
    )}

    <input
      className={cn(
        className,
        'rounded bg-secondary focus:border-transparent focus:outline-none focus:ring-1 focus:ring-primary'
      )}
      {...rest}
    />
  </label>
)
