// src/components/home/LogoCarousel/LogoCarouselItem.tsx
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoCarouselItemProps {
  src: string
  alt: string
  className?: string
}

export function LogoCarouselItem({ src, alt, className }: LogoCarouselItemProps) {
  return (
    <div 
      className={cn(
        'flex items-center justify-center px-8',
        'flex-shrink-0 select-none',
        className
      )}
    >
      <div 
        className="relative w-32 h-16"
        onMouseEnter={e => {
          const img = e.currentTarget.querySelector('img')
          if (img) img.style.filter = 'grayscale(0%)'
        }}
        onMouseLeave={e => {
          const img = e.currentTarget.querySelector('img')
          if (img) img.style.filter = 'grayscale(100%)'
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="128px"
          priority
          className="object-contain select-none"
          style={{ 
            filter: 'grayscale(100%)',
            transition: 'filter 0.3s ease'
          }}
        />
      </div>
    </div>
  )
}