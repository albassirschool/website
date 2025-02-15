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
  const isRTL = lang === 'ar';
  const courses = Object.entries(dict.courses.coursesData).map(([slug, course]) => ({
    ...course,
    slug
  }));

  return (
    <Container className="py-12">
      <div 
        className="max-w-4xl mx-auto"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <h1 className={`text-3xl font-bold mb-8 text-[#202F49] ${isRTL ? 'text-right' : 'text-left'}`}>
          {dict.courses.title}
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {courses.map((course) => (
            <Card
              key={course.slug}
              title={course.title}
              description={course.description}
              variant="white"
              image={{
                src: course.image,
                alt: course.alt || course.title
              }}
              href={`/${lang}/courses/${course.slug}`}
              className="hover:shadow-md transition-shadow"
            >
              <div className={`mt-4 space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-gray-500">
                  {course.duration}
                </p>
                <p className="text-sm text-gray-500">
                  {course.level}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}