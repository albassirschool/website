import type { Locale } from './config'
import type { Dictionary } from '@/types/dictionary'

const loadModule = (locale: Locale, path: string) => 
  import(`./${path}/${locale}.json`).then((module) => module.default)

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    const [
      home,
      about,
      contact,
      courses,
      forCompanies,
      forStudents,
      resources,
      header,
      footer
    ] = await Promise.all([
      loadModule(locale, 'pages/home'),
      loadModule(locale, 'pages/about'),
      loadModule(locale, 'pages/contact'),
      loadModule(locale, 'pages/courses'),
      loadModule(locale, 'pages/for-companies'),
      loadModule(locale, 'pages/for-students'),
      loadModule(locale, 'pages/resources'),
      loadModule(locale, 'components/header'),
      loadModule(locale, 'components/footer')
    ])

    return {
      home,
      about,
      contact,
      courses,
      forCompanies,
      forStudents,
      resources,
      header,
      footer
    } as Dictionary
  } catch (error) {
    console.error('Failed to load dictionary:', error)
    throw new Error(`Error loading dictionary for locale: ${locale}`)
  }
}