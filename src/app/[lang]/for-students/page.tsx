import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import type { Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ForStudentsPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function ForStudents({
  params,
}: ForStudentsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const isRTL = lang === 'ar';
  const studentsDict = dict.forStudents;

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <h1 className="text-3xl font-bold mb-6 text-[#202F49]">{studentsDict.title}</h1>
        <p className="text-lg text-gray-600 mb-12">{studentsDict.subtitle}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {studentsDict.resources.map((resource, index) => (
            <Card
              key={index}
              title={resource.title}
              description={resource.description}
              variant="white"
              className="hover:shadow-md transition-shadow"
            />
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${lang}/contact`}>
            <Button size="lg">{studentsDict.cta}</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}