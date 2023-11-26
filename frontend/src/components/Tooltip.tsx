import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui'

interface Props {
  text: string
  children: React.ReactNode
}

const Tooltip: React.FC<Props> = ({ children, text }) => (
  <TooltipProvider>
    <ShadTooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </ShadTooltip>
  </TooltipProvider>
)

export default Tooltip
