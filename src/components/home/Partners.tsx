import { Container } from '@/components/shared/Container'
import { LogoCarousel } from './LogoCarousel/LogoCarousel'
import type { Dictionary } from '@/types/dictionary'

interface PartnersProps {
  dict: Dictionary['home']['partners']
}

export function Partners({ dict }: PartnersProps) {
  const formattedLogos = dict.companies.map(company => ({
    src: company.logo,
    alt: company.name
  }))

  return (
    <div className="bg-gray-50 py-16">
      <Container>
        <h2 className="text-2xl font-bold text-center text-[#202F49] mb-10">
          {dict.title}
        </h2>
        <LogoCarousel logos={formattedLogos} />
      </Container>
    </div>
  )
}