import type { Metadata, Route } from "next";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { MessageCircle } from "lucide-react";
// استيراد المكون الرسمي للسكريبت
import Script from "next/script";

import "./globals.css";
import JsonLd from "@/components/JsonLd";
import TrackingProvider from "@/components/TrackingProvider";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import MainNavbar from "@/components/MainNavbar";

import {
  BASE_URL,
  BUSINESS_BRAND,
  BUSINESS_NAME_AR,
  BUSINESS_NAME_EN,
  BUSINESS_PROFILE_NAME,
  FORMATTED_PHONE,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_URL,
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
  badge?: string;
  isHighlighted?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/" as Route, label: "الرئيسية" },
  { href: "/world-cup" as Route, label: "عروض كأس العالم ⚽", badge: "جديد", isHighlighted: true },
  { href: "/satellite" as Route, label: "فني ستلايت" },
  { href: "/mobile-mechanic" as Route, label: "بنشر متنقل" },
  { href: "/oven-repair" as Route, label: "تصليح طباخات" },
  { href: "/cctv" as Route, label: "كاميرات مراقبة" },
  { href: "/software-engineering" as Route, label: "برمجة وتطوير مواقع" },
];

const globalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": BUSINESS_PROFILE_NAME,
  "url": BASE_URL,
  "telephone": PHONE_NUMBER,
  "description": `${BUSINESS_PROFILE_NAME} يقدم خدمات تركيب وصيانة وبرمجة ستلايت مع تغطية شاملة لكل المناطق في الكويت على مدار الساعة.`,
  "image": `${BASE_URL}/og-image.jpg`,
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": [
    {
      "@type": "Country",
      "name": "Kuwait",
    },
    ...SERVICE_AREAS.map((area) => ({
      "@type": "City",
      "name": area,
    })),
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KW",
    "addressRegion": "Kuwait",
    "addressLocality": "Kuwait",
  },
  "hasMap": GOOGLE_MAPS_URL,
  "sameAs": [GOOGLE_MAPS_URL],
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
    default: "فني ستلايت الكويت | فريق محترف لصيانة وبرمجة الستلايت 24 ساعة",
    template: "%s | فريق فني ستلايت الكويت",
  },
  description:
    "فني ستلايت الكويت | فريق فني ستلايت الكويت يقدم حلول تركيب وصيانة وبرمجة ستلايت 24 ساعة لجميع مناطق حولي، الأحمدي، الجهراء، والعاصمة. تواصلوا معنا الآن.",
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
    "تركيب ستلايت",
    "قنوات رياضية",
    "بي إن سبورت",
    "كأس العالم",
    "رسيفرات HD",
    ...SERVICE_AREAS,
  ],
  openGraph: {
    type: "website",
    title: "فني ستلايت الكويت | فريق محترف لصيانة وبرمجة الستلايت 24 ساعة",
    description:
      "فريق فني ستلايت الكويت يقدم خدمات تركيب وصيانة وبرمجة متكاملة مع تغطية كاملة لكل المحافظات وخدمة طوارئ 24 ساعة.",
    locale: "ar_KW",
    url: BASE_URL,
    siteName: BUSINESS_BRAND,
  },
  alternates: {
    canonical: "https://techniciankuwait.com",
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
        {/* --- بداية كود تتبع جوجل ادز --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17948760863"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tracking" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17948760863');
          `}
        </Script>
        {/* --- نهاية كود تتبع جوجل ادز --- */}

        <JsonLd data={globalBusinessSchema} />
      </head>
      <body className="min-h-screen bg-kuwait-sand text-kuwait-black antialiased selection:bg-kuwait-green/20">
        <TrackingProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="sticky top-0 z-50">
              <Link
                href={"/world-cup" as Route}
                className="block bg-gradient-to-l from-kuwait-green via-kuwait-green/90 to-kuwait-red text-white shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-2 text-center">
                  <span className="inline-flex items-center gap-3 text-sm font-semibold sm:text-base">
                    ⚽ عروض حصرية من فريق فني ستلايت الكويت للمونديال - اتصل الآن
                    <span className="hidden rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white/90 sm:inline-flex">
                      New
                    </span>
                  </span>
                </div>
              </Link>

              <MainNavbar
                navItems={NAV_ITEMS}
                businessNameAr={BUSINESS_NAME_AR}
                businessNameEn={BUSINESS_NAME_EN}
                formattedPhone={FORMATTED_PHONE}
                phoneNumber={PHONE_NUMBER}
              />
            </div>

            <main className="flex-1">
              {children}
            </main>

            <footer className="mt-16 border-t border-kuwait-green/20 bg-white/80 py-10">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <h2 className="text-xl font-semibold text-kuwait-green">
                    {BUSINESS_PROFILE_NAME}
                  </h2>
                  <p className="max-w-sm text-sm text-kuwait-black/70">
                    نقدم خدمات الستلايت، بنشر متنقل، صيانة أفران، وكاميرات مراقبة بأعلى جودة في الكويت. فريقنا متاح 24/7 لخدمتكم.
                  </p>
                </div>

                <div className="space-y-4">
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
                  <div>
                    <h3 className="mb-3 text-sm font-semibold text-kuwait-black/80">
                      خدماتنا في الجهراء
                    </h3>
                    <ul className="space-y-2 text-sm text-kuwait-black/70">
                      <li>
                        <Link
                          href={"/satellite-jahra" as Route}
                          className="transition hover:text-kuwait-green"
                        >
                          فني ستلايت الجهراء
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/car-service-jahra" as Route}
                          className="transition hover:text-kuwait-green"
                        >
                          كراج متنقل الجهراء
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/cameras-jahra" as Route}
                          className="transition hover:text-kuwait-green"
                        >
                          تركيب كاميرات الجهراء
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/cookers-jahra" as Route}
                          className="transition hover:text-kuwait-green"
                        >
                          تصليح طباخات الجهراء
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/world-cup" as Route}
                          className="transition hover:text-kuwait-green"
                        >
                          تجهيزات كأس العالم
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                  <div className="space-y-3 pt-4">
                    <p className="font-semibold text-kuwait-black">موقعنا على خرائط جوجل</p>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-kuwait-green/40 px-4 py-2 font-medium text-kuwait-green transition hover:bg-kuwait-green/10 hover:text-kuwait-green/90"
                    >
                      فتح الموقع (حولي، قطعة 10)
                    </a>
                    <p className="text-xs text-kuwait-black/60">ساعات العمل: 24/7</p>
                    <div className="overflow-hidden rounded-2xl border border-kuwait-green/20 bg-white shadow-sm">
                      <iframe
                        src={GOOGLE_MAPS_EMBED_URL}
                        title={`${BUSINESS_PROFILE_NAME} على خرائط جوجل`}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-48 w-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center text-xs text-kuwait-black/60">
                {currentYear} {BUSINESS_PROFILE_NAME}. جميع الحقوق محفوظة.
              </div>
            </footer>
          </div>
        </TrackingProvider>
      </body>
    </html>
  );
}