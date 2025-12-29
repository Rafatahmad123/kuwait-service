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

const cctvSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CCTV Installation Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_BRAND,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/cctv`,
  },
  areaServed: SERVICE_AREAS,
};

export const metadata: Metadata = {
  title: "تركيب كاميرات مراقبة وإنتركم في الكويت | مراقبة منازل وشركات",
  description:
    "نركب كاميرات مراقبة عالية الدقة وأنظمة إنتركم ذكية في الكويت مع المتابعة عبر الجوال، تخزين سحابي وخدمة صيانة دورية للمنازل والشركات.",
  keywords: [
    "كاميرات مراقبة الكويت",
    "تركيب إنتركم",
    "CCTV Kuwait",
    "أنظمة مراقبة منازل",
    "خدمة الأمن في الكويت",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/cctv`,
  },
  openGraph: {
    title: "خبراء كاميرات المراقبة والإنتركم في الكويت",
    description:
      "خدمة متكاملة لتركيب وضبط كاميرات المراقبة والإنتركم مع ربط بالهواتف وتخزين سحابي لضمان أمان المنازل والشركات في الكويت.",
    url: `${BASE_URL}/cctv`,
    locale: "ar_KW",
  },
};

const solutions = [
  "كاميرات UHD مع رؤية ليلية",
  "تخزين سحابي وتطبيقات للهاتف",
  "أنظمة إنتركم صوتية ومرئية",
  "ربط الشبكات الداخلية والخارجية",
];

export default function CctvPage() {
  return (
    <div className="space-y-16 pb-16">
      <JsonLd data={cctvSchema} />
      <section className="mx-auto w-full max-w-5xl space-y-6 px-4 py-16">
        <h1 className="section-title">أنظمة المراقبة والإنتركم الذكية</h1>
        <p className="text-base text-kuwait-black/70">
          حلول أمنية متكاملة تشمل تركيب كاميرات مراقبة عالية الدقة، أنظمة تسجيل متصلة بالسحابة، وإنتركم ذكي للمنازل والشركات مع دعم فني مباشر.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {solutions.map((solution) => (
            <div key={solution} className="rounded-3xl border border-kuwait-black/10 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-kuwait-green">{solution}</h2>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-kuwait-red/30 bg-kuwait-red/5 p-6 text-sm text-kuwait-black/75">
          للتنسيق الفوري اتصل على {" "}
          <LeadTrackedLink
            className="text-kuwait-green font-semibold"
            href={`tel:${PHONE_NUMBER}`}
            channel="phone"
            source="cctv-call"
          >
            {FORMATTED_PHONE}
          </LeadTrackedLink>{" "}
          أو راسلنا عبر {" "}
          <LeadTrackedLink
            className="text-kuwait-red font-semibold"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            channel="whatsapp"
            source="cctv-whatsapp"
          >
            واتساب
          </LeadTrackedLink>{" "}
          لجدولة زيارة ميدانية.
        </div>
      </section>
    </div>
  );
}
