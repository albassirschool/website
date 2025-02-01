import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface HeroProps {
  dict: Dictionary['home']['hero']
  lang: Locale
}

export function Hero({ dict, lang }: HeroProps) {
  return (
    <div className="relative h-[600px]">
      <Image 
        src="/images/school.jpg"
        alt="Al Bassir School"
        fill
        className="object-cover w-full brightness-95"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {dict.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">{dict.subtitle}</p>
            <Link href={`/${lang}/courses`} className="inline-block">
              <Button size="lg">{dict.cta}</Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}