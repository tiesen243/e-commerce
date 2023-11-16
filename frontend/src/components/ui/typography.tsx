import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const typeVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      body: 'leading-7 [&:not(:first-child)]:mt-6',
      quote: 'mt-6 border-l-2 pl-6 italic',
      list: 'my-6 ml-6 list-disc [&>li]:mt-2',
      code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
      lead: 'text-xl text-muted-foreground',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typeVariants> {
  asChild?: boolean
}

export const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant, className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : variant
    return (
      <article className="prose prose-slate dark:prose-invert lg:prose-lg">
        <Comp ref={ref} className={typeVariants({ variant, className })} {...rest} />
      </article>
    )
  }
)

Typography.displayName = 'Typography'
