// src/app/[lang]/contact/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { ContactForm } from "@/components/contact/ContactForm";

type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface ContactPageProps {
  params: Params;
  searchParams?: SearchParams;
}

export default async function Contact({
  params,
}: ContactPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  return (
    <div className="w-full bg-white">
      <ContactForm dict={dict.contact} />
    </div>
  );
}