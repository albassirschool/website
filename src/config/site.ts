// src/config/site.ts
export const siteConfig = {
  name: "Al Bassir School",
  description: "Centre de formation professionnelle d'excellence",
  url: "https://albassir.fr",
  ogImage: "https://albassir.fr/og.jpg",
  socialLinks: {
    facebook: "https://facebook.com/albassir34",
    instagram: "https://www.instagram.com/albassir__school",
    tiktok: "https://www.tiktok.com/@albassir.school"
  },
  mainNav: [
    { title: "home", href: "/" },
    { title: "about", href: "/about" },
    { title: "courses", href: "/courses" },
    { title: "forStudents", href: "/for-students" },
    { title: "forCompanies", href: "/for-companies" },
    { title: "contact", href: "/contact" },
    { title: "resources", href: "/resources" }
  ]
} as const

export type SiteConfig = typeof siteConfig