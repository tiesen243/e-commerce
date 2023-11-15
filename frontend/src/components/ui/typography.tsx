'use client'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'code'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted'
}
export const Typography: React.FC<Props> = ({
  variant = 'p',
  className,
  children,
}) => {
  const renderSwitch = (variant: string) => {
    switch (variant) {
      case 'h1':
        return (
          <h1
            className={cn(
              className,
              'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'
            )}
          >
            {children}
          </h1>
        )

      case 'h2':
        return (
          <h2
            className={cn(
              className,
              'scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'
            )}
          >
            {children}
          </h2>
        )

      case 'h3':
        return (
          <h3
            className={cn(
              className,
              'scroll-m-20 text-2xl font-semibold tracking-tight'
            )}
          >
            {children}
          </h3>
        )

      case 'h4':
        return (
          <h4
            className={cn(
              className,
              'scroll-m-20 text-xl font-semibold tracking-tight'
            )}
          >
            {children}{' '}
          </h4>
        )
      case 'p':
        return (
          <p className={cn(className, 'leading-7 [&:not(:first-child)]:mt-6')}>
            {children}
          </p>
        )

      case 'blockquote':
        return (
          <blockquote className={cn(className, 'mt-6 border-l-2 pl-6 italic')}>
            {children}
          </blockquote>
        )

      case 'code':
        return (
          <code
            className={cn(
              className,
              'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
            )}
          >
            {children}
          </code>
        )

      case 'lead':
        return (
          <p className={cn(className, 'text-xl text-muted-foreground')}>
            {children}
          </p>
        )

      case 'large':
        return (
          <div className={cn(className, 'text-lg font-semibold')}>
            {children}
          </div>
        )

      case 'small':
        return (
          <small className={cn(className, 'text-sm font-medium leading-none')}>
            {children}
          </small>
        )

      case 'muted':
        return (
          <p className={cn(className, 'text-sm text-muted-foreground')}>
            {children}
          </p>
        )
    }
  }

  return (
    <div className="prose prose-zinc dark:prose-invert">
      {renderSwitch(variant)}
    </div>
  )
}
