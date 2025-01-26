export const siteConfig = {
  name: "Al Bassir School",
  description: "Centre de formation professionnelle d'excellence",
  url: "https://albassir.fr",
  ogImage: "https://albassir.fr/og.jpg",
  links: {
    facebook: "https://facebook.com/albassir34",
    instagram: "https://www.instagram.com/albassir.schoolbba",
    tiktok: "https://www.tiktok.com/@albassir.academy"
  },
  contact: {
    phone: "+213 6 72 40 62 78",
    email: "albassirschool34@gmail.com",
    address: {
      street: "Cité BELAYADHI Lot 74",
      city: "Bordj Bou Arreridj",
      postcode: "34000",
      country: "Algerie"
    }
  },
  mainNav: [
    {
      title: "home",
      href: "/",
    },
    {
      title: "about",
      href: "/about",
    },
    {
      title: "courses",
      href: "/courses",
    },
    {
      title: "forStudents",
      href: "/for-students",
    },
    {
      title: "forCompanies",
      href: "/for-companies",
    },
    {
      title: "contact",
      href: "/contact",
    },
    {
      title: "resources",
      href: "/resources",
    }
  ],
  features: [
    {
      title: "Professional Training",
      description: "Market-driven training programs.",
      icon: "GraduationCap"
    },
    {
      title: "Continuous Learning",
      description: "Training for working professionals.",
      icon: "Book"
    },
    {
      title: "Corporate Seminars",
      description: "Customized solutions for businesses.",
      icon: "Building"
    }
  ],
  courses: [
    {
      id: "web-development",
      title: "Web Development",
      duration: "6 months",
      level: "Beginner",
      description: "Learn to create modern, responsive websites",
      image: "/images/courses/web-dev.jpg"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      duration: "4 months",
      level: "Intermediate",
      description: "Master digital marketing tools and strategies",
      image: "/images/courses/digital-marketing.jpg"
    },
    {
      id: "project-management",
      title: "Project Management",
      duration: "3 months",
      level: "Advanced",
      description: "Develop your project management skills",
      image: "/images/courses/project-management.jpg"
    }
  ],
  metaData: {
    defaultTitle: "Al Bassir School | Centre de formation professionnelle",
    titleTemplate: "%s | Al Bassir School",
    description: "Centre de formation professionnelle offrant des programmes de haute qualité adaptés aux besoins du marché.",
    keywords: [
      "formation professionnelle",
      "école",
      "développement web",
      "marketing digital",
      "gestion de projet",
      "formation continue",
      "paris"
    ],
    authors: [
      {
        name: "Al Bassir School",
        url: "https://albassir.fr",
      },
    ],
    creator: "Al Bassir School",
    openGraph: {
      type: "website",
      locale: "fr_FR",
      alternateLocale: "ar_SA",
      url: "https://albassir.fr",
      siteName: "Al Bassir School",
    },
    twitter: {
      card: "summary_large_image",
      title: "Al Bassir School",
      description: "Centre de formation professionnelle d'excellence",
      images: ["https://albassir.fr/og.jpg"],
      creator: "@albassirschool"
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },
} as const

export type SiteConfig = typeof siteConfig