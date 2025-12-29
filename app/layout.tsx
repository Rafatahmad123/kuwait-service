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
  { href: "/satellite" as Route, label: "فني ستلايت" },
  { href: "/mobile-mechanic" as Route, label: "بنشر متنقل" },
  { href: "/oven-repair" as Route, label: "تصليح طباخات" },
  { href: "/cctv" as Route, label: "كاميرات مراقبة" },
];

const globalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "خدمات الكويت المتكاملة - Kuwait Service",
  "url": BASE_URL,
  "telephone": PHONE_NUMBER,
  "description": "أفضل شركة خدمات وصيانة منزلية في الكويت: فني ستلايت، ميكانيكي متنقل، تصليح أفران، وكاميرات مراقبة خدمة 24 ساعة.",
  "image": `${BASE_URL}/og-image.jpg`,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KW",
    "addressRegion": "Kuwait",
  },
  "areaServed": SERVICE_AREAS.map(area => ({
    "@type": "City",
    "name": area
  })),
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": PHONE_NUMBER,
    "contactType": "customer service",
    "availableLanguage": ["Arabic", "English"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "خدمات الكويت المتكاملة | فني ستلايت، بنشر متنقل، وتصليح أفران 24h",
    template: "%s | خدمات الكويت المتكاملة",
  },
  description:
    "خدمات الكويت المتكاملة: الحل الأول لصيانة المنازل بالكويت. فني ستلايت هندي، بنشر متنقل سريع، تصليح طباخات وأفران، وتركيب كاميرات مراقبة. نصلك أينما كنت في الكويت.",
  keywords: [
    "فني ستلايت الكويت",
    "بنشر متنقل الكويت",
    "تصليح طباخات الكويت",
    "تصليح أفران الكويت",
    "كاميرات مراقبة الكويت",
    "فني كهربائي منازل",
    "صيانة منازل الكويت",
    "رقم فني ستلايت",
    "ميكانيكي متنقل الكويت",
    "خدمات تصليح بالكويت",
    ...SERVICE_AREAS,
  ],
  openGraph: {
    type: "website",
    title: "خدمات الكويت المتكاملة | صيانة منزلية وخدمة طرق 24 ساعة",
    description:
      "هل تبحث عن فني ستلايت أو ميكانيكي متنقل؟ خدمات الكويت المتكاملة توفر لك نخبة من الفنيين لصيانة منزلك وسياراتك في جميع مناطق الكويت.",
    locale: "ar_KW",
    url: BASE_URL,
    siteName: "Kuwait Service",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
              >
                <Link href="/" className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-kuwait-green/10 text-kuwait-green">
                    KS
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-lg font-bold text-kuwait-green">
                      {BUSINESS_NAME_AR}
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
                    {BUSINESS_BRAND}
                  </h2>
                  <p className="max-w-sm text-sm text-kuwait-black/70">
                    نقدم خدمات الستلايت، بنشر متنقل، صيانة أفران، وكاميرات مراقبة بأعلى جودة في الكويت. فريقنا متاح 24/7 لخدمتكم.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-sm font-semibold text-kuwait-black/80">
                    المناطق المشمولة بالخدمة
                  </h3>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-kuwait-black/70 sm:grid-cols-3">
                    {SERVICE_AREAS.slice(0, 9).map((area) => (
                      <li key={area} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-kuwait-red" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 text-sm text-kuwait-black/70">
                  <p className="font-semibold text-kuwait-black">اتصل بنا الآن</p>
                  <LeadTrackedLink
                    href={`tel:${PHONE_NUMBER}`}
                    className="block text-kuwait-green transition hover:text-green-700 text-lg font-bold"
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
                    واتساب مباشر
                  </LeadTrackedLink>
                </div>
              </div>
              <div className="mt-8 text-center text-xs text-kuwait-black/60">
                © {currentYear} {BUSINESS_BRAND}. جميع الحقوق محفوظة.
              </div>
            </footer>
          </div>
          <LeadTrackedLink
            href={`${WHATSAPP_LINK}?text=${encodeURIComponent("مرحبا، أحتاج خدمة صيانة من الكويت سيرفيس.")}`}
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-kuwait-green px-5 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصل عبر واتساب"
            channel="whatsapp"
            source="floating-whatsapp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span className="hidden sm:inline">اطلب الخدمة الآن</span>
          </LeadTrackedLink>
        </TrackingProvider>
      </body>
    </html>
  );
}