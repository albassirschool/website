import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { CoursePreview } from '@/components/home/CoursePreview'
import { Testimonials } from '@/components/home/Testimonials'
import { CallToAction } from '@/components/home/CallToAction'
import { Stats } from '@/components/home/Stats'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Partners } from '@/components/home/Partners'

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface HomePageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Home({
  params,
}: HomePageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang)

  return (
    <main>
      <Hero dict={dict.home.hero} lang={lang} />
      <Stats dict={dict.home.stats} />
      {dict.home.partners && <Partners dict={dict.home.partners} />}
      <Features dict={dict.home.features} />
      <CoursePreview dict={dict.courses} lang={lang} />
      <Testimonials dict={dict.home.testimonials} lang={lang} />
      <CallToAction dict={dict.home.cta} lang={lang} />
    </main>
  )
}