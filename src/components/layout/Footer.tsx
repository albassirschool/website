import { Container } from "@/components/shared/Container";
import { SocialIcons } from "@/components/shared/SocialIcons";
import Link from "next/link";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/lib/i18n/config";

interface FooterProps {
  dict: Dictionary["footer"];
  lang: Locale;
}

const socialUrls = {
  facebook: "https://facebook.com/albassir34",
  instagram: "https://www.instagram.com/albassir.schoolbba",
  tiktok: "https://www.tiktok.com/@albassir.academy",
};

export function Footer({ dict, lang }: FooterProps) {
  if (!dict) {
    return null;
  }

  return (
    <footer className="bg-gray-50 py-12 mt-auto">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">
              {dict.quickLinks.contact}
            </h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <a
                href="https://maps.app.goo.gl/pY9Zv1cGHYmRdYut7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                {dict.address && <p>{dict.address}</p>}
              </a>
              {dict.phone && (
                <p>
                  <a href={`tel:${dict.phone}`} className="hover:text-gray-900">
                    {dict.phone}
                  </a>
                </p>
              )}
              {dict.email && (
                <p>
                  <a
                    href={`mailto:${dict.email}`}
                    className="hover:text-gray-900"
                  >
                    {dict.email}
                  </a>
                </p>
              )}
            </address>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">
              {dict.quickLinks.title}
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href={`/${lang}/about`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {dict.quickLinks.about}
              </Link>
              <Link
                href={`/${lang}/courses`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {dict.quickLinks.courses}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {dict.quickLinks.contact}
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">{dict.legal.title}</h3>
            <nav className="flex flex-col space-y-2">
              {dict.legal && (
                <>
                  <Link
                    href={`/${lang}/privacy`}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {dict.legal.privacy}
                  </Link>
                  <Link
                    href={`/${lang}/terms`}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    {dict.legal.terms}
                  </Link>
                </>
              )}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">
              {dict.social?.title}
            </h3>
            <SocialIcons {...socialUrls} className="flex-wrap" variant="gray" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-500">
            {dict.copyright.replace(
              "{year}",
              new Date().getFullYear().toString()
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
}
