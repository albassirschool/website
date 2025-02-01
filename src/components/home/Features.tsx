import { Card } from '@/components/shared/Card'
import { Container } from '@/components/shared/Container'
import type { Dictionary } from '@/types/dictionary'

interface FeaturesProps {
  dict: Dictionary['home']['features']
}

export function Features({ dict }: FeaturesProps) {
  return (
    <div className="py-20 bg-[#1A237E]">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12 text-white">{dict.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {dict.items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              variant="dark"
            />
          ))}
        </div>
      </Container>
    </div>
  )
}