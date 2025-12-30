import type { Metadata } from "next";
import Image from "next/image";

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
import cookerHeroImage from "@/tbakhat/WhatsApp Image 2025-12-29 at 3.15.56 PM.jpeg";
import cookerDetailImage from "@/tbakhat/photo_2025-12-29_15-14-32.jpg";

const cookerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cooker & Oven Repair Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_BRAND,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/cookers`,
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KWD",
    description: "تصليح طباخات، تنظيف أفران غاز، تبديل فالات، وصيانة شاملة مع فني هندي/باكستاني",
  },
};

export const metadata: Metadata = {
  title: "فني أفران هندي وصيانة طباخات 24 ساعة | أرخص الأسعار في الكويت",
  description:
    "فني أفران هندي/باكستاني متخصص في تصليح الطباخات وتنظيف الأفران وتبديل الفالات بقطع أصلية، خدمة 24 ساعة مع أفضل الأسعار في الكويت.",
  keywords: [
    "تصليح طباخات",
    "تنظيف أفران غاز",
    "تبديل فالات",
    "صيانة شاملة",
    "فني أفران هندي",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/cookers`,
  },
  openGraph: {
    title: "فني أفران هندي في الكويت | خدمة 24 ساعة",
    description:
      "نقدّم صيانة شاملة للطباخات والأفران مع فني هندي/باكستاني محترف، تنظيف عميق، تبديل فالات وضمان على القطع في جميع مناطق الكويت.",
    url: `${BASE_URL}/cookers`,
    locale: "ar_KW",
  },
};

const highlights = [
  {
    title: "فحص وصيانة شاملة",
    description: "معاينة دقيقة للشعلات، المؤقتات، والتمديدات مع اختبار الأمان الكامل قبل التسليم.",
    icon: "🧰",
  },
  {
    title: "تنظيف أفران غاز",
    description: "تنظيف داخلي وخارجي باستخدام مواد آمنة تقضي على الدهون وتحافظ على اللمعان.",
    icon: "✨",
  },
  {
    title: "تبديل فالات أصلية",
    description: "نوفر قطع غيار أصلية مع ضمان على الإضافات والتركيب بواسطة فني هندي/باكستاني.",
    icon: "🔧",
  },
];

const guaranteeCards = [
  {
    title: "خدمة 24 ساعة",
    text: "جاهزون لأي طارئ في الليل أو النهار مع تجهيزات ميدانية كاملة.",
  },
  {
    title: "أرخص الأسعار",
    text: "عروض مرنة تناسب العائلات والمطاعم مع وضوح كامل في التكلفة مسبقًا.",
  },
  {
    title: "خبرة فني هندي",
    text: "فنيون هنود وباكستانيون بخبرة طويلة في صيانة الأفران والطباخات.",
  },
];

export default function CookersPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={cookerSchema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-kuwait-green/10 px-4 py-1 text-sm font-medium text-kuwait-green">
              🔥 فني أفران هندي/باكستاني | خدمة 24 ساعة
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              صيانة وتصليح الطباخات والأفران بأرخص الأسعار في الكويت
            </h1>
            <p className="text-base text-kuwait-black/70">
              نعالج جميع أعطال الأفران المنزلية والمطاعم: تنظيف أفران غاز، تبديل فالات وشعلات، صيانة شاملة للكهرباء والغاز، مع ضمان على العمل وقطع الغيار.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-kuwait-green/30 bg-kuwait-green/5 p-4 text-center">
                  <div className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-kuwait-black">{item.title}</h2>
                  <p className="mt-2 text-sm text-kuwait-black/70">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 rounded-full bg-kuwait-green px-6 py-3 text-lg font-bold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
                channel="phone"
                source="cookers-hero-call"
              >
                <span aria-hidden="true">📞</span>
                اتصل الآن: {FORMATTED_PHONE}
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بخدمة تصليح الطباخات من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-green/40 px-5 py-3 text-sm font-semibold text-kuwait-green transition hover:bg-kuwait-green/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="cookers-hero-whatsapp"
              >
                <span aria-hidden="true">💬</span>
                اطلب الخدمة عبر واتساب
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg md:h-[360px]">
              <Image
                src={cookerHeroImage}
                alt="فني تصليح أفران وطباخات في الكويت"
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="sr-only">فني تصليح أفران وطباخات في الكويت ينجز صيانة سريعة داخل المنزل.</figcaption>
            </figure>
            <figure className="relative h-48 w-full overflow-hidden rounded-3xl border border-kuwait-green/20 bg-white p-2 md:h-60">
              <Image
                src={cookerDetailImage}
                alt="فني تصليح أفران وطباخات في الكويت"
                fill
                className="rounded-2xl object-cover"
                loading="lazy"
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="px-4 py-2 text-center text-xs text-kuwait-black/70">
                تجهيز الطباخ بعد التنظيف العميق لضمان لهب متوازن وسلامة كاملة.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-kuwait-green/5 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <h2 className="text-3xl font-semibold text-kuwait-black">لماذا تختارنا لصيانة الأفران؟</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {guaranteeCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-kuwait-green">{card.title}</h3>
                <p className="mt-3 text-sm text-kuwait-black/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-kuwait-black">نخدمك في جميع مناطق الكويت</h2>
        <p className="text-sm text-kuwait-black/70">
          فريقنا يغطي كل مناطق الكويت بما في ذلك حولي، السالمية، الفروانية، الجهراء، مبارك الكبير، والأحمدي مع خدمة طوارئ 24 ساعة.
        </p>
      </section>
    </div>
  );
}
