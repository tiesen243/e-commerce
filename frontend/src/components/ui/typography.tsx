'use client'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  subtitle: 'h6',
  body: 'p',
  caption: 'span',
  code: 'code',
  quote: 'blockquote',
}

const typographyVariants = cva('', {
  variants: {
    fontSize: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    colors: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-green-500',
      info: 'text-blue-500',
      warning: 'text-yellow-500',
      danger: 'text-red-500',
    },

    fontWeight: {
      serif: 'font-serif',
      sans: 'font-sans',
      mono: 'font-mono',
      thin: 'font-thin',
      light: 'font-light',
      extralight: 'font-extralight',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    fontSmoothing: {
      antialiased: 'antialiased',
      subpixel: 'subpixel-antialiased',
    },
    fontStyle: {
      italic: 'italic',
      normal: 'not-italic',
      underline: 'underline underline-offset-2',
      'line-through': 'line-through',
    },
  },
  defaultVariants: {
    colors: 'primary',
    fontSize: 'base',
    fontWeight: 'normal',
    fontSmoothing: 'antialiased',
    fontStyle: 'normal',
  },
})

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'subtitle' | 'body' | 'caption' | 'code' | 'quote'
  asChild?: boolean
}
export const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant = 'body', asChild = false, className, ...rest }, ref) => {
    const Comp = asChild ? Slot : variantMapping[variant] || 'p'
    const Wrapper = variant === 'code' ? 'pre' : React.Fragment

    const { fontSize, fontWeight, fontStyle, fontSmoothing, colors } = rest

    return (
      <article className="prose prose-zinc dark:prose-invert lg:prose-lg">
        <Wrapper>
          <Comp
            ref={ref}
            className={cn(
              typographyVariants({
                fontSize,
                fontWeight,
                fontStyle,
                fontSmoothing,
                colors,
                className,
              })
            )}
            {...rest}
          />
        </Wrapper>
      </article>
    )
  }
)

Typography.displayName = 'Typography'
