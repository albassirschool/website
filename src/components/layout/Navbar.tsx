'use client'

import Link from 'next/link'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface NavbarProps {
  dict: Dictionary['header']['nav']
  lang: Locale
}

export function Navbar({ dict, lang }: NavbarProps) {
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
    <nav className="hidden md:flex gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-gray-900"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}