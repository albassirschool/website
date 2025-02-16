// Source: src/app/[lang]/courses/[slug]/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/Container";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import Link from "next/link";

type Params = Promise<{ lang: Locale; slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface CoursePageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const isRTL = lang === 'ar';
  const courseData = dict.courses.coursesData[slug];

  if (!courseData) {
    return null;
  }

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto" dir={isRTL ? 'rtl' : 'ltr'}>
        <h1 className="text-3xl font-bold mb-4 text-[#202F49]">
          {courseData.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {courseData.description}
        </p>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={courseData.image}
            alt={courseData.alt || courseData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <p className="text-lg text-gray-800 mb-2">
              {courseData.price}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              {courseData.duration}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              {courseData.instructor}
            </p>
          </div>
          <div>
            <p className="text-lg text-gray-800 mb-2">
              {courseData.level}
            </p>
            <p className="text-lg text-gray-800">
              {courseData.certificate}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {courseData.content.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {courseData.content.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {courseData.objectives.title}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {courseData.objectives.items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Link href={`/${lang}/contact`}>
            <Button size="lg">
              {courseData.cta}
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}