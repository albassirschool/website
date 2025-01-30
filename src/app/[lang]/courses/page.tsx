// src/app/[lang]/courses/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Container } from "@/components/shared/Container";
import { Card } from "@/components/shared/Card";
import type { Locale } from "@/lib/i18n/config";

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface CoursesPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Courses({
  params,
}: CoursesPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold mb-8 text-[#202F49]">{dict.courses.title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
        {dict.courses.items.map((course, index) => (
          <Card
            key={index}
            title={course.title}
            description={course.description}
            className="hover:shadow-md transition-shadow"
          >
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                {dict.courses.duration}: {course.duration}
              </p>
              <p className="text-sm text-gray-500">
                {dict.courses.level}: {course.level}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}