import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import type { Locale } from "@/lib/i18n/config";
import Link from "next/link";
import { Button } from "@/components/shared/Button";

interface ForStudentsPageProps {
  params: { lang: Locale };
}

export default async function ForStudents({ params }: ForStudentsPageProps) {
  const dict = await getDictionary(params.lang);
  const studentsDict = dict.forStudents;

  return (
    <div className="w-full bg-white">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-[#202F49]">{studentsDict.title}</h1>
          <p className="text-lg text-gray-600 mb-12">{studentsDict.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12 text-black">
            {studentsDict.resources.map((resource, index) => (
              <Card
                key={index}
                title={resource.title}
                description={resource.description}
                className="hover:shadow-md transition-shadow"
              />
            ))}
          </div>

          <div className="text-center">
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg">{studentsDict.cta}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
