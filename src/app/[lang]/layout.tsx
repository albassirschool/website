import { ClientLayout } from '@/components/layout/ClientLayout'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/config'
import type { Dictionary } from '@/types/dictionary'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: { lang: Locale }
}

export default async function LocaleLayout({
  children,
  params: { lang },
}: LocaleLayoutProps) {
  const dict = await getDictionary(lang) as Dictionary

  return <ClientLayout dict={dict} lang={lang}>{children}</ClientLayout>
}