// src/components/home/CallToAction.tsx
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import Link from 'next/link'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface CallToActionProps {
  dict: Dictionary['home']['cta']
  lang: Locale
}

export function CallToAction({ dict, lang }: CallToActionProps) {
  return (
    <div className="bg-[#1A237E] text-white py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">{dict.title}</h2>
          <p className="text-lg mb-8">{dict.description}</p>
          <Link href={`/${lang}/contact`} className="inline-block">
            <Button variant="secondary" size="lg">
              {dict.buttonText}
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}