// src/components/home/Testimonials.tsx
import { Container } from '@/components/shared/Container'
import Image from 'next/image'
import type { Dictionary } from '@/types/dictionary'

interface TestimonialsProps {
  dict: Dictionary['home']['testimonials']
}

export function Testimonials({ dict }: TestimonialsProps) {
  return (
    <div className="bg-white py-20">
      <Container>
        <div className="relative w-full h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image
            src="/images/students.jpg"
            alt="Students at graduation party"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#202F49]">{dict.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.items.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}