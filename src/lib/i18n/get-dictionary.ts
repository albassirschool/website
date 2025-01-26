import type { Locale } from './config'

const dictionaries = {
  fr: () => import('./dictionaries/fr.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  try {
    return await dictionaries[locale]()
  } catch {
    throw new Error(`Error loading dictionary for locale: ${locale}`)
  }
}