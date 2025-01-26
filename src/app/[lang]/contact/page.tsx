import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { ContactForm } from "@/components/contact/ContactForm";

export default async function Contact({
  params,
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <div className="w-full bg-white">
      <ContactForm dict={dict.contact} />
    </div>
  );
}
