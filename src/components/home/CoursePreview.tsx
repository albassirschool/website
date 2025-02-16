'use client'
import { Container } from '@/components/shared/Container'
import Link from 'next/link'
import Image from 'next/image'
import type { Dictionary } from '@/types/dictionary'
import type { Locale } from '@/lib/i18n/config'

interface CoursePreviewProps {
  dict: Dictionary['courses']
  lang: Locale
}

export function CoursePreview({ dict, lang }: CoursePreviewProps) {
  // Take first 3 courses from coursesData
  const previewCourses = Object.entries(dict.coursesData || {})
    .slice(0, 3)
    .map(([slug, course]) => ({
      ...course,
      slug
    }));

  return (
    <div className="bg-gray-50 py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#202F49] mb-4">{dict.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {previewCourses.map((course) => (
            <Link href={`/${lang}/courses/${course.slug}`} key={course.slug}>
              <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.alt || course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-2">{course.title}</h3>
                  <p className="text-gray-800 mb-4 flex-1">{course.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">
                      {course.duration}
                    </span>
                    <span className="text-gray-700">
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${lang}/courses`}
            className="inline-flex items-center text-[#202F49] hover:text-[#202F49]/80"
          >
            {dict.viewAll}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </Container>
    </div>
  )
}