import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Container } from '@/components/shared/Container'

export default async function Terms({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)
  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{dict.footer.legal.terms}</h1>
        {/* Add terms content */}
      </div>
    </Container>
  )
}