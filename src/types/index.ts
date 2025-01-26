export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    instagram: string
    facebook: string
    tiktok: string
  }
  contact: {
    phone: string
    email: string
    address: {
      street: string
      city: string
      postcode: string
      country: string
    }
  }
  mainNav: MainNavItem[]
  features: {
    title: string
    description: string
    icon: string
  }[]
  courses: {
    id: string
    title: string
    duration: string
    level: string
    description: string
    image: string
  }[]
  metaData: {
    defaultTitle: string
    titleTemplate: string
    description: string
    keywords: string[]
    authors: {
      name: string
      url: string
    }[]
    creator: string
    openGraph: {
      type: string
      locale: string
      alternateLocale: string
      url: string
      siteName: string
    }
    twitter: {
      card: string
      title: string
      description: string
      images: string[]
      creator: string
    }
    robots: {
      index: boolean
      follow: boolean
      googleBot: {
        index: boolean
        follow: boolean
        "max-video-preview": number
        "max-image-preview": string
        "max-snippet": number
      }
    }
  }
}