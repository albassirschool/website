import { ClientOnly } from '@/components/shared/ClientOnly'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Navbar } from './Navbar'
import { MobileNav } from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Container } from '@/components/shared/Container'

interface HeaderProps {
  dict: Dictionary['header']
  lang: Locale
}

export function Header({ dict, lang }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Al Bassir School"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          <Navbar dict={dict.nav} lang={lang} />
          
          <ClientOnly>
            <div className="flex items-center gap-4">
              <LanguageSwitcher currentLang={lang} />
              <MobileNav dict={dict.nav} lang={lang} />
            </div>
          </ClientOnly>
        </div>
      </Container>
    </header>
  )
}