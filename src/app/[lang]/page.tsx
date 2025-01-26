// src/app/[lang]/page.tsx
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { CoursePreview } from '@/components/home/CoursePreview'
import { Testimonials } from '@/components/home/Testimonials'
import { CallToAction } from '@/components/home/CallToAction'
import { Stats } from '@/components/home/Stats'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'

interface HomePageProps {
  params: { lang: Locale }
}

export default async function Home({
  params,
}: HomePageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <main>
      <Hero dict={dict.home.hero} lang={params.lang} />
      <Stats dict={dict.home.stats} />
      <Features dict={dict.home.features} />
      <CoursePreview dict={dict.home.courses} lang={params.lang} />
      <Testimonials dict={dict.home.testimonials} />
      <CallToAction dict={dict.home.cta} lang={params.lang} />
    </main>
  )
}