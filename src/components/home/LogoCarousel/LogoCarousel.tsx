// src/components/home/LogoCarousel/LogoCarousel.tsx
'use client'

import { useEffect, useRef } from 'react'
import { LogoCarouselItem } from './LogoCarouselItem'

interface LogoCarouselProps {
  logos: Array<{
    src: string
    alt: string
  }>
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current || logos.length === 0) return

    const scrollContent = scrollRef.current
    const container = containerRef.current

    // Calculate the width of a single logo item including its padding
    const logoItem = scrollContent.children[0] as HTMLElement
    const logoItemWidth = logoItem.offsetWidth
    const totalWidth = logoItemWidth * logos.length // Width of one complete set

    let scrollPosition = 0
    let animationFrameId: number

    const scroll = () => {
      scrollPosition += 1.5 // Adjust speed by changing this value
      
      // Reset position when we've scrolled through one complete set
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0
      }

      scrollContent.style.transform = `translateX(-${scrollPosition}px)`
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    // Pause/Resume on hover
    const pauseAnimation = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const resumeAnimation = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(scroll)
    }

    container.addEventListener('mouseenter', pauseAnimation)
    container.addEventListener('mouseleave', resumeAnimation)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', pauseAnimation)
      container.removeEventListener('mouseleave', resumeAnimation)
    }
  }, [logos])

  // Create multiple sets of logos for seamless looping
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-white"
    >
      <div
        ref={scrollRef}
        className="flex"
        style={{ 
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitFontSmoothing: 'antialiased'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <LogoCarouselItem
            key={`${logo.alt}-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="w-[200px]"
          />
        ))}
      </div>
    </div>
  )
}