import { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-md font-medium transition-colors',
        {
          'bg-[#1A237E] text-white hover:bg-[#1A237E]/90': variant === 'primary',
          'bg-white text-[#1A237E] hover:bg-gray-100': variant === 'secondary',
          'px-3 py-1 text-sm': size === 'sm',
          'px-4 py-2': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  )
}