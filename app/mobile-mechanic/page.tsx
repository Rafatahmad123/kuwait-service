import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import ShareLocationButton from "@/components/ShareLocationButton";
import {
  BASE_URL,
  BUSINESS_PROFILE_NAME,
  DEFAULT_KEYWORDS,
  FORMATTED_PHONE,
  PHONE_NUMBER,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const mechanicSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile Mechanic Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/mobile-mechanic`,
  },
  areaServed: SERVICE_AREAS,
  availableChannel: {
    "@type": "ServiceChannel",
    serviceURL: WHATSAPP_LINK,
    availableLanguage: ["Arabic", "English"],
  },
};

export const metadata: Metadata = {
  title: `${BUSINESS_PROFILE_NAME} | ميكانيكي متنقل وخدمة إنقاذ الطريق في الكويت`,
  description:
    `${BUSINESS_PROFILE_NAME} يوفر ميكانيكي متنقل يصل إلى موقعك خلال دقائق لتصليح السيارات، تبديل البطاريات، وسحب المركبة مع دعم واتساب وخدمة 24 ساعة في الكويت.`,
  keywords: [
    "ميكانيكي متنقل الكويت",
    "تصليح سيارات متنقل",
    "خدمة إنقاذ الطريق",
    "Roadside Assistance Kuwait",
    "خدمة سيارات منازل",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/mobile-mechanic`,
  },
  openGraph: {
    title: `${BUSINESS_PROFILE_NAME} | ميكانيكي متنقل على مدار الساعة في الكويت`,
    description:
      `${BUSINESS_PROFILE_NAME} يرسل فرق ميكانيكية متنقلة لإصلاح الأعطال وتبديل الإطارات والبطاريات مع إمكانية مشاركة الموقع عبر واتساب.`,
    url: `${BASE_URL}/mobile-mechanic`,
    locale: "ar_KW",
  },
};

export default function MobileMechanicPage() {
  return (
    <div className="space-y-16 pb-16">
      <JsonLd data={mechanicSchema} />
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4 py-16">
        <h1 className="section-title">الميكانيكي المتنقل في الكويت</h1>
        <p className="text-base text-kuwait-black/70">
          فرقنا جاهزة للوصول إليك أينما كنت في الكويت خلال دقائق، مع فحص إلكتروني كامل وخدمات إنقاذ الطريق، تغيير البطاريات، تشحيم، وتبديل الإطارات.
        </p>
        <div className="flex flex-col gap-4 rounded-3xl border border-kuwait-green/20 bg-white p-6 shadow">
          <p className="text-sm text-kuwait-black/70">
            شارك موقعك الحالي ليصل إليك أقرب فريق دعم على الفور. يتم إرسال رابط الخرائط مباشرة عبر الواتساب.
          </p>
          <ShareLocationButton />
        </div>
        <p className="text-sm text-kuwait-black/70">
          للتواصل الهاتفي السريع اتصل على {" "}
          <LeadTrackedLink
            className="text-kuwait-green"
            href={`tel:${PHONE_NUMBER}`}
            channel="phone"
            source="mobile-call-inline"
          >
            {FORMATTED_PHONE}
          </LeadTrackedLink>{" "}
          أو أرسل رسالة على الواتساب عبر {" "}
          <LeadTrackedLink
            className="text-kuwait-green"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            channel="whatsapp"
            source="mobile-whatsapp-inline"
          >
            هذا الرابط
          </LeadTrackedLink>
          .
        </p>
      </section>
    </div>
  );
}
