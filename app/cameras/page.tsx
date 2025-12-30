import type { Metadata } from "next";
import Image from "next/image";

import { Camera, PhoneCall, ShieldCheck, Wifi } from "lucide-react";

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

const CAMERAS_HERO_SRC = "/camears/WhatsApp Image 2025-12-29 at 3.20.39 PM.jpeg";
const CAMERAS_INSTALL_SRC = "/camears/WhatsApp Image 2025-12-29 at 3.20.41 PM.jpeg";
const CAMERAS_BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWP4TwQACfsD/Q9g6uYAAAAASUVORK5CYII=" as const;

const camerasSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CCTV & Intercom Installation Kuwait",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_BRAND,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/cameras`,
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KWD",
    description:
      "تركيب كاميرات مراقبة، صيانة أنظمة أمنية، تركيب انتركم وكاميرات واي فاي مع فني كاميرات ذكي هندي/باكستاني خدمة 24 ساعة"
  },
};

export const metadata: Metadata = {
  title: "فني كاميرات مراقبة هندي خدمة 24 ساعة | أرخص الأسعار في الكويت",
  description:
    "فني كاميرات مراقبة هندي/باكستاني يقدم تركيب كاميرات واي فاي، انتركم ذكي، صيانة أنظمة أمنية في الكويت بأرخص الأسعار وخدمة متواصلة 24 ساعة.",
  keywords: [
    "تركيب كاميرات مراقبة",
    "صيانة أنظمة أمنية",
    "تركيب انتركم",
    "كاميرات واي فاي",
    "فني كاميرات ذكي",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/cameras`,
  },
  openGraph: {
    title: "خبراء كاميرات مراقبة في الكويت | خدمة 24 ساعة",
    description:
      "احصل على تركيب كاميرات مراقبة ذكية، انتركم وفيديو دورفون مع فني هندي/باكستاني محترف وضمان ممتد لجميع المناطق في الكويت.",
    url: `${BASE_URL}/cameras`,
    locale: "ar_KW",
  },
};

const serviceHighlights = [
  {
    icon: <Camera className="h-8 w-8 text-kuwait-green" aria-hidden="true" />,
    title: "تركيب كاميرات مراقبة",
    description: "كاميرات UHD داخلية وخارجية مع زوايا تغطية واسعة وربط سحابي آمن.",
  },
  {
    icon: <Wifi className="h-8 w-8 text-kuwait-green" aria-hidden="true" />,
    title: "كاميرات واي فاي ذكية",
    description: "ربط مباشر بالهاتف وتطبيقات الإنذار الفوري مع تخزين سحابي مشفر.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-kuwait-green" aria-hidden="true" />,
    title: "صيانة أنظمة أمنية",
    description: "متابعة دورية وصيانة طارئة لجميع أنظمة DVR/NVR والانتركم." ,
  },
];

const trustBadges = [
  {
    title: "خدمة 24 ساعة",
    text: "فرق ميدانية جاهزة للتركيب والصيانة الفورية ليلاً ونهاراً.",
  },
  {
    title: "أرخص الأسعار",
    text: "باقات مرنة للشركات والمنازل مع ضمان سنة على المعدات.",
  },
  {
    title: "فني هندي/باكستاني",
    text: "خبرة تمتد لأكثر من 12 عاماً في تصميم الأنظمة الأمنية الذكية.",
  },
];

export default function CamerasPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={camerasSchema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-kuwait-green/10 px-4 py-1 text-sm font-medium text-kuwait-green">
              🔐 فني كاميرات هندي/باكستاني | خدمة 24 ساعة
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              تركيب كاميرات مراقبة ذكية بأرخص الأسعار في الكويت
            </h1>
            <p className="text-base text-kuwait-black/70">
              نقدّم حلول أمنية متكاملة تشمل تركيب كاميرات مراقبة، تطوير أنظمة الانتركم، ضبط كاميرات واي فاي، وصيانة الأنظمة الأمنية للشركات والمنازل مع تقرير كامل بعد كل زيارة.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {serviceHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl border border-kuwait-green/30 bg-kuwait-green/5 p-4 text-center">
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
                source="cameras-hero-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                اتصل الآن: {FORMATTED_PHONE}
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بخدمة تركيب كاميرات مراقبة من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-green/40 px-5 py-3 text-sm font-semibold text-kuwait-green transition hover:bg-kuwait-green/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="cameras-hero-whatsapp"
              >
                <span aria-hidden="true">💬</span>
                اطلب الخدمة عبر واتساب
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg md:h-[360px]">
              <Image
                src={CAMERAS_HERO_SRC}
                alt="تركيب وصيانة كاميرات مراقبة ذكية"
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={CAMERAS_BLUR_PLACEHOLDER}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="sr-only">تركيب وصيانة كاميرات مراقبة ذكية في منزل بالكويت لضمان الحماية.</figcaption>
            </figure>
            <figure className="relative h-48 w-full overflow-hidden rounded-3xl border border-kuwait-green/20 bg-white p-2 md:h-60">
              <Image
                src={CAMERAS_INSTALL_SRC}
                alt="تركيب وصيانة كاميرات مراقبة ذكية"
                fill
                className="rounded-2xl object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={CAMERAS_BLUR_PLACEHOLDER}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="px-4 py-2 text-center text-xs text-kuwait-black/70">
                تثبيت كاميرات مراقبة ذكية مع اختبار البث المباشر عبر الهاتف.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-kuwait-green/5 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <h2 className="text-3xl font-semibold text-kuwait-black">مميزات حلول المراقبة لدينا</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-kuwait-green">{badge.title}</h3>
                <p className="mt-3 text-sm text-kuwait-black/70">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-kuwait-black">تغطية شاملة لكل مناطق الكويت</h2>
        <p className="text-sm text-kuwait-black/70">
          نصل إليك في حولي، السالمية، الفروانية، الجهراء، مبارك الكبير، والأحمدي مع فرق صيانة احتياطية لضمان استمرارية المراقبة دون انقطاع.
        </p>
      </section>
    </div>
  );
}
