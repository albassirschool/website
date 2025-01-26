// src/app/[lang]/about/page.tsx
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Container } from '@/components/shared/Container'
import Image from 'next/image'

export default async function About({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="w-full min-h-screen bg-white">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#202F49] mb-6">{dict.about.title}</h1>
          <div className="prose prose-lg">
            <div className="relative h-[400px] mb-8">
              <Image
                src="/images/school.jpg"
                alt="Al Bassir School"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="space-y-6 text-black">
              {dict.about.content.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#202F49] mb-4">{dict.about.mission.title}</h2>
              <p className="text-black">{dict.about.mission.content}</p>
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#202F49] mb-4">{dict.about.values.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-black">
                {dict.about.values.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}