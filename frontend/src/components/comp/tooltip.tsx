import {
  Tooltip as ShadTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const Tooltip: React.FC<React.PropsWithChildren<{ text: string }>> = ({ children, text }) => (
  <TooltipProvider>
    <ShadTooltip>
      <TooltipTrigger>{children}</TooltipTrigger>

      <TooltipContent className="mt-2">
        <p>{text}</p>
      </TooltipContent>
    </ShadTooltip>
  </TooltipProvider>
)

export default Tooltip
