// src/app/[lang]/for-companies/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import type { Locale } from "@/lib/i18n/config";
import Link from "next/link";

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ForCompaniesPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function ForCompanies({
  params,
}: ForCompaniesPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const companiesDict = dict.forCompanies;

  return (
    <div className="w-full min-h-screen bg-white">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#202F49]">{companiesDict.title}</h1>
          <p className="text-lg text-gray-600 mb-12">
            {companiesDict.subtitle}
          </p>

          <div className="space-y-12">
            {companiesDict.services.map((service, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-12 last:border-0"
              >
                <h2 className="text-2xl font-semibold mb-4 text-black">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-black">
              {companiesDict.cta.title}
            </h3>
            <p className="text-gray-600 mb-6">
              {companiesDict.cta.description}
            </p>
            <Link href={`/${lang}/contact`}>
              <Button size="lg">{companiesDict.cta.button}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}