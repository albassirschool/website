import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
  variant?: 'white' | 'dark'
  image?: {
    src: string
    alt: string
  }
  href?: string
}

export function Card({
  title,
  description,
  className,
  children,
  variant = 'dark',
  image,
  href,
  ...props
}: CardProps) {
  const content = (
<div
  className={cn(
    'flex flex-col rounded-lg overflow-hidden h-full w-full',
    variant === 'dark' ? 'bg-[#1A237E]' : 'bg-white',
    'border border-gray-200 shadow-sm hover:shadow-md transition-shadow',
    className
  )}
  {...props}
>
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className={cn(
          'text-xl font-semibold mb-2',
          variant === 'dark' ? 'text-white' : 'text-black'
        )}>
          {title}
        </h3>
        <p className={cn(
          'mb-4',
          variant === 'dark' ? 'text-white' : 'text-gray-600'
        )}>
          {description}
        </p>
        {children}
      </div>
    </div>
  )

  return href ? (
    <Link href={href}>
      {content}
    </Link>
  ) : content
}