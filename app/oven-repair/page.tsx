import type { Metadata } from "next";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import {
  BASE_URL,
  BUSINESS_BRAND,
  DEFAULT_KEYWORDS,
  FORMATTED_PHONE,
  PHONE_NUMBER,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const ovenSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Oven Repair Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_BRAND,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/oven-repair`,
  },
  areaServed: SERVICE_AREAS,
  brand: "Kuwait Service",
};

export const metadata: Metadata = {
  title: "أفضل صيانة أفران ومواقد في الكويت | تنظيف وقطع غيار أصلية",
  description:
    "نقدّم خدمة صيانة أفران ومواقد في الكويت تشمل تنظيف احترافي، تغيير بواجي، ضبط حرارة وتمديدات الغاز مع مواد آمنة وضمان على الصيانة.",
  keywords: [
    "صيانة أفران الكويت",
    "تنظيف أفران",
    "تصليح مواقد",
    "Oven Repair Kuwait",
    "خدمة منازل الكويت",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/oven-repair`,
  },
  openGraph: {
    title: "صيانة أفران احترافية في الكويت",
    description:
      "خدمة منازل في الكويت لتنظيف وصيانة الأفران والطبّاخات مع استبدال القطع وضبط الحرارة لضمان سلامة التشغيل.",
    url: `${BASE_URL}/oven-repair`,
    locale: "ar_KW",
  },
};

const maintenancePoints = [
  "تنظيف احترافي للفرن من الداخل والخارج",
  "فحص البواجي والعناصر الحرارية واستبدالها",
  "معايرة درجة الحرارة وضبط منظمات الغاز",
  "ضمان سلامة التمديدات والتوصيلات",
];

export default function OvenRepairPage() {
  return (
    <div className="space-y-16 pb-16">
      <JsonLd data={ovenSchema} />
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4 py-16">
        <h1 className="section-title">صيانة الأفران والطبّاخات في الكويت</h1>
        <p className="text-base text-kuwait-black/70">
          نقدم خدمة تنظيف وصيانة شاملة للأفران المنزلية والمطاعم باستخدام مواد آمنة ومعتمدة، مع فحص دقيق لجميع الأجزاء الداخلية لضمان سلامة التشغيل.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {maintenancePoints.map((point) => (
            <div key={point} className="rounded-3xl border border-kuwait-black/10 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-kuwait-green">{point}</h2>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-kuwait-green/30 bg-kuwait-green/5 p-6 text-sm text-kuwait-black/75">
          للحجز السريع اتصل على {" "}
          <LeadTrackedLink
            className="text-kuwait-green font-semibold"
            href={`tel:${PHONE_NUMBER}`}
            channel="phone"
            source="oven-call"
          >
            {FORMATTED_PHONE}
          </LeadTrackedLink>{" "}
          أو تواصل عبر {" "}
          <LeadTrackedLink
            className="text-kuwait-red font-semibold"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            channel="whatsapp"
            source="oven-whatsapp"
          >
            الواتساب
          </LeadTrackedLink>{" "}
          لإرسال صور العطل والحصول على تقدير فوري.
        </div>
      </section>
    </div>
  );
}
