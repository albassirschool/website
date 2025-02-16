// src/app/[lang]/privacy/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/Container";
import { notFound } from "next/navigation";

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface PrivacyPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Privacy({ params }: PrivacyPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  // If privacy policy is not defined, show a 404 page
  if (!dict.privacy) {
    notFound();
  }

  return (
    <Container className="py-12 whitespace-pre-line">
      <div 
        className="max-w-3xl mx-auto"
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <h1 className={`text-3xl font-bold mb-6 text-[#202F49] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
          {dict.privacy.title}
        </h1>
        {dict.privacy.sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className={`text-2xl font-semibold mb-3 text-[#202F49] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {section.heading}
            </h2>

            {section.content && (
              <p className={`text-gray-700 mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                {section.content}
              </p>
            )}

            {section.subsections &&
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className={`ml-4 mb-4 ${lang === 'ar' ? 'mr-4' : 'ml-4'}`}>
                  <h3 className={`text-xl font-medium mb-2 text-[#202F49] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {subsection.title}
                  </h3>
                  <p className={`text-gray-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {subsection.content}
                  </p>
                </div>
              ))}
          </div>
        ))}

        {dict.privacy.lastUpdated && (
          <div className={`mt-8 text-sm text-gray-500 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {lang === 'ar' ? `آخر تحديث: ${dict.privacy.lastUpdated}` : `Dernière mise à jour : ${dict.privacy.lastUpdated}`}
          </div>
        )}
      </div>
    </Container>
  );
}