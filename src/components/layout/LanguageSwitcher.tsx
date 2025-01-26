// src/components/layout/LanguageSwitcher.tsx
'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { locales, type Locale } from '@/lib/i18n/config'

interface LanguageSwitcherProps {
  currentLang: Locale
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (locale: string) => {
    if (!pathname) return

    const segments = pathname.split('/')
    segments[1] = locale
    router.push(segments.join('/'))
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLanguageChange(locale)}
          className={`px-3 py-1 rounded ${
            currentLang === locale
              ? 'bg-[#1A237E] text-white'
              : 'bg-gray-100 text-[#1A237E]'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}