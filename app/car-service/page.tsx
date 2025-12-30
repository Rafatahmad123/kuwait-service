import type { Metadata } from "next";

import { BatteryCharging, Clock, PhoneCall, Wrench } from "lucide-react";

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

const mobileMechanicSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile Mechanic Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_BRAND,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/car-service`,
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceURL: WHATSAPP_LINK,
    availableLanguage: ["Arabic", "English"],
  },
};

export const metadata: Metadata = {
  title: "بنشر متنقل هندي خدمة 24 ساعة | أرخص الأسعار في الكويت",
  description:
    "بنشر متنقل هندي/باكستاني يقدم تبديل تواير وبطاريات وصيانة سيارات على الطريق في الكويت بأرخص الأسعار مع خدمة 24 ساعة وطوارئ فورية.",
  keywords: [
    "بنشر متنقل الكويت",
    "تبديل تواير",
    "تبديل بطاريات",
    "ميكانيكي متنقل",
    "صيانة سيارات على الطريق",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/car-service`,
  },
  openGraph: {
    title: "بنشر متنقل في الكويت | خدمة 24 ساعة",
    description:
      "اطلب ميكانيكي متنقل هندي لتبديل الإطارات والبطاريات وإصلاح الأعطال على الطريق مع وصول سريع لجميع مناطق الكويت.",
    url: `${BASE_URL}/car-service`,
    locale: "ar_KW",
  },
};

const roadsideHighlights = [
  {
    icon: <Wrench className="h-8 w-8 text-kuwait-red" aria-hidden="true" />,
    title: "ميكانيكي متنقل محترف",
    description: "تشخيص إلكتروني للأعطال، إصلاحات سريعة للفرامل والزيوت في موقع السيارة.",
  },
  {
    icon: <BatteryCharging className="h-8 w-8 text-kuwait-red" aria-hidden="true" />,
    title: "تبديل بطاريات وتواير",
    description: "بطاريات أصلية، تبديل تواير، ونفخ فوري مع موازنة ميدانية.",
  },
  {
    icon: <Clock className="h-8 w-8 text-kuwait-red" aria-hidden="true" />,
    title: "استجابة خلال دقائق",
    description: "فرق طوارئ تنتشر في الطرق الدائرية، المناطق الصناعية والسكنية طوال اليوم.",
  },
];

const perks = [
  {
    title: "خدمة 24 ساعة",
    text: "نستقبل مكالمات الطوارئ على مدار الساعة مع سيارات مجهزة بكل الأدوات.",
  },
  {
    title: "أرخص الأسعار",
    text: "باقات مريحة تشمل تكلفة الزيارة وقطع الغيار دون رسوم مخفية.",
  },
  {
    title: "فني هندي/باكستاني",
    text: "خبرة ميدانية لأكثر من 15 سنة في البنشر المتنقل وصيانة السيارات.",
  },
];

export default function CarServicePage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={mobileMechanicSchema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-kuwait-red/10 px-4 py-1 text-sm font-medium text-kuwait-red">
              🚗 بنشر متنقل هندي/باكستاني | خدمة 24 ساعة
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              بنشر متنقل الكويت بأرخص الأسعار | تبديل تواير وبطاريات فورية
            </h1>
            <p className="text-base text-kuwait-black/70">
              جاهزون لإنقاذ سيارتك في أي طريق داخل الكويت: تبديل تواير، تبديل بطاريات، إصلاح أعطال المحرك السريعة، وسحب المركبة عند الحاجة مع متابعة كاملة حتى الوصول لوجهتك.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {roadsideHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-kuwait-red/30 bg-kuwait-red/5 p-4 text-center">
                  <div className="flex justify-center">{item.icon}</div>
                  <h2 className="mt-3 text-lg font-semibold text-kuwait-black">{item.title}</h2>
                  <p className="mt-2 text-sm text-kuwait-black/70">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 rounded-full bg-kuwait-red px-6 py-3 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
                channel="phone"
                source="car-service-hero-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                اتصل الآن: {FORMATTED_PHONE}
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أحتاج خدمة بنشر متنقل من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-red/40 px-5 py-3 text-sm font-semibold text-kuwait-red transition hover:bg-kuwait-red/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="car-service-hero-whatsapp"
              >
                <span aria-hidden="true">💬</span>
                اطلب الخدمة عبر واتساب
              </LeadTrackedLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kuwait-red/5 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <h2 className="text-3xl font-semibold text-kuwait-black">لماذا تعتمد علينا؟</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-kuwait-red">{perk.title}</h3>
                <p className="mt-3 text-sm text-kuwait-black/70">{perk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-kuwait-black">نصل إلى جميع مناطق الكويت</h2>
        <p className="text-sm text-kuwait-black/70">
          تغطيتنا تشمل حولي، السالمية، الفروانية، الجهراء، مبارك الكبير، والأحمدي مع نقاط تمركز قريبة من الطرق السريعة والدائرية لضمان وصول أسرع.
        </p>
      </section>
    </div>
  );
}
