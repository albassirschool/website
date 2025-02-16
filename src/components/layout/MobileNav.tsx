'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface MobileNavProps {
  dict: Dictionary['header']['nav']
  lang: Locale
}

export function MobileNav({ dict, lang }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const links = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/about`, label: dict.about },
    { href: `/${lang}/courses`, label: dict.courses },
    { href: `/${lang}/for-students`, label: dict.forStudents },
    { href: `/${lang}/for-companies`, label: dict.forCompanies },
    { href: `/${lang}/contact`, label: dict.contact },
    { href: `/${lang}/resources`, label: dict.resources }
  ]

  return (
    <div className="md:hidden">
      <Button
        variant="secondary"
        onClick={toggleMenu}
        className="p-2"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        type="button"
      >
        <span className="sr-only">
          {isOpen ? 'Close menu' : 'Open menu'}
        </span>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50"
        >
          <nav className="flex flex-col p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-gray-600 hover:text-gray-900"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}