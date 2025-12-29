import type { Metadata, Route } from "next";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { MessageCircle, PhoneCall } from "lucide-react";

import "./globals.css";
import JsonLd from "@/components/JsonLd";
import TrackingProvider from "@/components/TrackingProvider";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import {
  BASE_URL,
  BUSINESS_BRAND,
  BUSINESS_NAME_AR,
  FORMATTED_PHONE,
  PHONE_NUMBER,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
});

type NavItem = {
  href: Route;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/" as Route, label: "الرئيسية" },
  { href: "/satellite" as Route, label: "الستلايت و IPTV" },
  { href: "/mobile-mechanic" as Route, label: "خدمة الميكانيكي المتنقل" },
  { href: "/oven-repair" as Route, label: "صيانة الأفران" },
  { href: "/cctv" as Route, label: "أنظمة المراقبة" },
];

const globalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_BRAND,
  url: BASE_URL,
  telephone: PHONE_NUMBER,
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "KW",
    addressRegion: "Kuwait",
  },
  areaServed: SERVICE_AREAS,
  openingHours: "Mo-Su 00:00-23:59",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_NUMBER,
    contactType: "customer service",
    availableLanguage: ["Arabic", "English"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "أفضل شركة خدمات في الكويت | خدمات الكويت المتكاملة",
    template: "%s | أفضل شركة خدمات في الكويت",
  },
  description:
    "أفضل شركة خدمات في الكويت لتصليح وصيانة المنازل: ستلايت، رسيفر، ميكانيكي متنقل، صيانة أفران، وكاميرات مراقبة مع دعم فني سريع وخدمة منازل شاملة.",
  keywords: [
    "خدمات الكويت",
    "أفضل شركة خدمات في الكويت",
    "تصليح وصيانة",
    "خدمة منازل",
    "Satellite Kuwait",
    "IPTV Kuwait",
    "Roadside Assistance Kuwait",
    "Oven Repair Kuwait",
    "CCTV Installation Kuwait",
    "Hawally",
    "Salmiya",
    "Farwaniya",
  ],
  openGraph: {
    type: "website",
    title: "أفضل شركة خدمات منازل في الكويت",
    description:
      "شركة متخصصة في تصليح وصيانة المنازل بالكويت: تركيب ستلايت، خدمة ميكانيكي متنقل، صيانة أفران، وكاميرات مراقبة مع استجابة فورية.",
    locale: "ar_KW",
    url: BASE_URL,
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      ar: BASE_URL,
      en: `${BASE_URL}/en`,
    },
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} font-cairo`}>
      <head>
        <JsonLd data={globalBusinessSchema} />
      </head>
      <body className="min-h-screen bg-kuwait-sand text-kuwait-black antialiased selection:bg-kuwait-green/20">
        <TrackingProvider>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b border-kuwait-green/20 bg-white/90 backdrop-blur">
              <div
                className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <Link href="/" className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-kuwait-green/10 text-kuwait-green">
                    KS
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-lg font-bold text-kuwait-green">
                      خدمات الكويت المتكاملة
                    </span>
                    <span className="text-xs text-kuwait-black/70" dir="ltr">
                      Kuwait Service
                    </span>
                  </span>
                </Link>
                <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-kuwait-black/80 transition hover:text-kuwait-green"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex items-center gap-2">
                  <LeadTrackedLink
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-2 rounded-full bg-kuwait-green px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-green-700"
                    itemProp="telephone"
                    channel="phone"
                    source="header-call"
                  >
                    <PhoneCall className="h-4 w-4" aria-hidden="true" />
                    <span>{FORMATTED_PHONE}</span>
                  </LeadTrackedLink>
                </div>
              </div>
            </header>

            <main className="flex-1">
              {children}
            </main>

            <footer className="mt-16 border-t border-kuwait-green/20 bg-white/80 py-10">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-kuwait-green">
                    Kuwait Service
                  </h2>
                  <p className="max-w-sm text-sm text-kuwait-black/70">
                    حلول متكاملة للستلايت، الميكانيكي المتنقل، صيانة الأفران وأنظمة المراقبة مع سرعة في الاستجابة وخبرة محلية تغطي جميع مناطق الكويت.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-kuwait-black/80">
                    المناطق التي نخدمها
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-kuwait-black/70 sm:grid-cols-3">
                    {SERVICE_AREAS.map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-kuwait-red" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 text-sm text-kuwait-black/70">
                  <p className="font-semibold text-kuwait-black">تواصل معنا</p>
                  <LeadTrackedLink
                    href={`tel:${PHONE_NUMBER}`}
                    className="block text-kuwait-green transition hover:text-green-700"
                    channel="phone"
                    source="footer-call"
                  >
                    {FORMATTED_PHONE}
                  </LeadTrackedLink>
                  <LeadTrackedLink
                    href={WHATSAPP_LINK}
                    className="inline-flex items-center gap-2 rounded-full border border-kuwait-green px-4 py-2 font-medium text-kuwait-green transition hover:bg-kuwait-green hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    channel="whatsapp"
                    source="footer-whatsapp"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    تواصل عبر واتساب
                  </LeadTrackedLink>
                </div>
              </div>
              <div className="mt-8 text-center text-xs text-kuwait-black/60">
                © {currentYear} Kuwait Service. جميع الحقوق محفوظة.
              </div>
            </footer>
          </div>
          <LeadTrackedLink
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent("مرحبا، أود الحصول على معلومات حول خدمات Kuwait Service.")}`}
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-kuwait-green px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
            channel="whatsapp"
            source="floating-whatsapp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">واتساب مباشر</span>
          </LeadTrackedLink>
        </TrackingProvider>
      </body>
    </html>
  );
}
