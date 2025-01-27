// src/app/[lang]/privacy/page.tsx
import { getDictionary } from '@/lib/i18n/get-dictionary'
import type { Locale } from '@/lib/i18n/config'
import { Container } from '@/components/shared/Container'

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface PrivacyPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Privacy({
  params,
}: PrivacyPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{dict.footer.legal.privacy}</h1>
        {/* Add privacy policy content */}
      </div>
    </Container>
  )
}