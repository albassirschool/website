'use client'

import { useState, useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface ClientLayoutProps {
  children: React.ReactNode
  dict: Dictionary
  lang: Locale
}

export function ClientLayout({ children, dict, lang }: ClientLayoutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen flex flex-col">{children}</div>
  }

  return (
    <>
      <Header dict={dict.header} lang={lang} />
      <main className="flex-grow">{children}</main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  )
}