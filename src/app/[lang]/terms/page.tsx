// src/app/[lang]/terms/page.tsx
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Container } from '@/components/shared/Container'

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface TermsPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Terms({
  params,
}: TermsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{dict.footer.legal.terms}</h1>
        {/* Add terms content */}
      </div>
    </Container>
  )
}