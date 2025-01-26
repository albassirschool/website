// src/components/home/Stats.tsx
import { Container } from '@/components/shared/Container'
import type { Dictionary } from '@/types/dictionary'

interface StatsProps {
  dict: Dictionary['home']['stats']
}

export function Stats({ dict }: StatsProps) {
  return (
    <div className="bg-white py-12">
      <Container>
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 px-4 py-6 rounded-lg text-center"
            >
              <dt className="text-sm font-medium text-gray-800">
                {stat.label}
              </dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-[#202F49]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}