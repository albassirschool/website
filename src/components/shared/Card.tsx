import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
}

export function Card({
  title,
  description,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 p-6 shadow-sm',
        className
      )}
      {...props}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white-600">{description}</p>
      {children}
    </div>
  )
}