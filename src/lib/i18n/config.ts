export const locales = ['fr', 'ar'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'fr'

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}