// src/app/[lang]/contact/page.tsx
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/lib/i18n/config";
import { Container } from "@/components/shared/Container";
type Params = Promise<{ lang: Locale }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
interface ContactPageProps {
params: Params;
searchParams?: SearchParams;
}
export default async function Contact({ params }: ContactPageProps) {
const { lang } = await params;
const dict = await getDictionary(lang);
return (
<div className="w-full bg-white">
<Container className="py-12">
<div className="max-w-4xl mx-auto">
<h1 className="text-3xl font-bold mb-8 text-[#202F49]">
{dict.contact.title}
</h1>
<p className="text-lg text-gray-600 mb-8">{dict.contact.subtitle}</p>
Copy      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeDTi1JexRdAABNhoRDY1ZNCH6-QYJZttYvkzxFGV1gFpTPgw/viewform?embedded=true"
          width="100%"
          height="800"
          className="w-full"
        >
          Loading...
        </iframe>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.874773887273!2d4.773799575577467!3d36.07215837246357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128cbdaab958ef5d%3A0xade84eb3fc7f8a39!2sAl%20Bassir%20School!5e0!3m2!1sen!2sdz!4v1739704317624!5m2!1sen!2sdz" 
            width="100%" 
            height="450" 
            className="border-0 rounded-lg"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#202F49]">
            {dict.contact.info.title}
          </h2>
          <div className="space-y-4 text-gray-600">
            <div>
              <strong className="block">{dict.contact.info.address.title}</strong>
              <a 
                href="https://maps.app.goo.gl/pY9Zv1cGHYmRdYut7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {dict.contact.info.address.line}
              </a>
            </div>
            <div>
              <strong>{dict.contact.info.phone.title}</strong><br />
              <a 
                href={`tel:${dict.contact.info.phone.number}`} 
                className="hover:underline"
              >
                {dict.contact.info.phone.number}
              </a>
            </div>
            <div>
              <strong>{dict.contact.info.email.title}</strong><br />
              <a 
                href={`mailto:${dict.contact.info.email.address}`} 
                className="hover:underline"
              >
                {dict.contact.info.email.address}
              </a>
            </div>
            <div>
              <strong>{dict.contact.info.hours.title}</strong><br />
              {dict.contact.info.hours.schedule}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</div>
);
}