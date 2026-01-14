import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, CheckCircle2, Cloud, Tv, Wifi, Zap } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import {
  BASE_URL,
  BUSINESS_PROFILE_NAME,
  DEFAULT_KEYWORDS,
  FORMATTED_PHONE,
  OWNER_NAME_AR,
  PHONE_NUMBER,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const SATELLITE_HERO_SRC = "/satlaet/WhatsApp Image 2025-12-29 at 3.07.20 PM.jpeg";
const SATELLITE_INSTALL_SRC = "/satlaet/WhatsApp Image 2025-12-29 at 3.07.30 PM.jpeg";
const SATELLITE_BLUR_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWP4TwQACfsD/Q9g6uYAAAAASUVORK5CYII=" as const;

const satelliteSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Satellite Service",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
    url: `${BASE_URL}/satellite`,
  },
  areaServed: SERVICE_AREAS,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KWD",
    itemOffered: {
      "@type": "Product",
      name: "رسيفر واي فاي الكويت",
      description: "رسيفر ذكي يعمل دون أطباق أو أسلاك مع قنوات عربية وعالمية بدقة 4K وأكثر من 10 آلاف قناة.",
    },
  },
};

export const metadata: Metadata = {
  title: `${BUSINESS_PROFILE_NAME} | تركيب وصيانة ستلايت 24 ساعة`,
  description:
    `${BUSINESS_PROFILE_NAME} يقدم حلول تركيب وصيانة وبرمجة ستلايت و IPTV مع دعم فني سريع في حولي، الأحمدي، الجهراء، والعاصمة على مدار الساعة.`,
  keywords: [
    "تركيب ستلايت الكويت",
    "IPTV الكويت",
    "رسيفر واي فاي الكويت",
    "تصليح ستلايت",
    "أفضل شركة ستلايت في الكويت",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/satellite`,
  },
  openGraph: {
    title: `${BUSINESS_PROFILE_NAME} | تركيب وصيانة ستلايت 24 ساعة`,
    description:
      `${BUSINESS_PROFILE_NAME} يوفر خدمات تركيب ستلايت، برمجة رسيفرات، ودعم IPTV مع فريق متخصص واستجابة سريعة لجميع المحافظات.`,
    url: `${BASE_URL}/satellite`,
    locale: "ar_KW",
  },
};

const packageFeatures = [
  "تركيب كامل مع ضبط الإشارة بدقة",
  "برمجة القنوات المشفرة والمفتوحة",
  "دعم IPTV وتحديثات السوفت وير",
  "صيانة فورية واستبدال قطع الغيار",
];

const wifiHighlights = [
  {
    title: "لا حاجة للأطباق",
    description: "جهاز صغير يعتمد على الإنترنت دون تمديدات خارجية أو أسلاك مشوشة.",
    icon: Wifi,
  },
  {
    title: "+10,000 قناة",
    description: "مكتبة قنوات عربية وعالمية، رياضة، أفلام، ومسلسلات بدقة 4K.",
    icon: Cloud,
  },
  {
    title: "توصيل سريع",
    description: "توصيل وتركيب في نفس اليوم داخل حدود الكويت مع ضمان لمدة سنة.",
    icon: Zap,
  },
];

const appBrands = [
  { name: "Flash 4K فلاش", accent: "bg-kuwait-green/10" },
  { name: "Spider سبايدر", accent: "bg-kuwait-red/10" },
  { name: "Aroma أروما", accent: "bg-kuwait-green/10" },
];

export default function SatellitePage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={satelliteSchema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-kuwait-green/10 px-4 py-1 text-sm font-medium text-kuwait-green">
              🔧 فني ستلايت هندي محترف – خدمة مضمونة 24 ساعة
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              فني ستلايت هندي في الكويت | تركيب ستلايت مركزي وصيانة رسيفرات
            </h1>
            <p className="text-base text-kuwait-black/70">
              نقدم خدمة ستلايت منزلية ومركزية تشمل تركيب الأطباق، برمجة الرسيفر، تحديث أجهزة IPTV، وصيانة رسيفرات لجميع الماركات مع تغطية فورية لمناطق حولي، السالمية، الفروانية، الجابرية، صباح السالم، والعبدلي.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {packageFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-kuwait-green" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-3 rounded-full bg-kuwait-green px-6 py-3 text-base font-semibold text-white shadow-md transition hover:scale-105 hover:bg-green-700"
                channel="phone"
                source="satellite-hero-call"
              >
                <Tv className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg" dir="ltr">اتصل الآن: {FORMATTED_PHONE}</span>
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`أرغب بخدمة الستلايت والـ IPTV من ${OWNER_NAME_AR}.`)}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-green/40 px-5 py-3 text-sm font-semibold text-kuwait-green transition hover:bg-kuwait-green/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="satellite-hero-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl shadow-lg md:h-[360px]">
              <Image
                src={SATELLITE_HERO_SRC}
                alt="فريق م. رأفت لخدمات الصيانة يركب طبق دش ستلايت في الكويت"
                fill
                className="object-cover"
                placeholder="blur"
                loading="lazy"
                blurDataURL={SATELLITE_BLUR_PLACEHOLDER}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="sr-only">فني ستلايت هندي كويتي خدمة 24 ساعة أثناء ضبط طبق الستلايت.</figcaption>
            </figure>
            <figure className="relative h-48 w-full overflow-hidden rounded-3xl border border-kuwait-green/20 bg-white p-2 md:h-60">
              <Image
                src={SATELLITE_INSTALL_SRC}
                alt="م. رأفت وفريقه ينجزون تركيب رسيفر وستلايت في الكويت"
                fill
                className="rounded-2xl object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL={SATELLITE_BLUR_PLACEHOLDER}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className="px-4 py-2 text-center text-xs text-kuwait-black/70">
                تجهيز رسيفر واي فاي وتركيب وصيانة طبق الستلايت مع ضمان جودة الإشارة.
              </figcaption>
            </figure>
            <div className="relative overflow-hidden rounded-3xl border border-kuwait-green/20 bg-gradient-to-br from-kuwait-green/80 to-kuwait-red/70 p-8 text-white shadow-glow">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">باقات Premium IPTV</h2>
                <p className="text-sm text-white/85">
                  تجربة مشاهدة استثنائية مع دعم جميع المنصات، سرعة في التحديثات، وإمكانية الدفع الشهري أو السنوي.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    دعم فني مباشر 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    أجهزة أصلية مع ضمان
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    تثبيت سريع بدون انقطاع
                  </li>
                </ul>
              </div>
              <div className="absolute -right-24 top-1/2 hidden h-48 w-48 -translate-y-1/2 rounded-full bg-white/15 blur-3xl md:block" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-kuwait-green/5 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4">
          <header className="max-w-3xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-kuwait-red/10 px-3 py-1 text-xs font-semibold text-kuwait-red">
              ⭐️ المنتج الأبرز في الكويت
            </span>
            <h2 className="section-title">
              رسيفر واي فاي الكويت بدون أطباق أو تمديدات
            </h2>
            <p className="mt-3 text-base text-kuwait-black/70">
              الجيل الأحدث من الرسيفرات الذكية يعمل بالكامل عن طريق الواي فاي مع واجهة عربية سهلة ودعم لأشهر التطبيقات العالمية.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-[2fr,3fr]">
            <div className="space-y-6 rounded-3xl border border-kuwait-green/20 bg-white p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-kuwait-black">
                دعم التطبيقات المفضلة
              </h3>
              <div className="flex flex-wrap gap-3">
                {appBrands.map((brand) => (
                  <span
                    key={brand.name}
                    className={`inline-flex items-center rounded-full ${brand.accent} px-4 py-2 text-sm font-semibold text-kuwait-black`}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
              <p className="text-sm text-kuwait-black/70">
                كل جهاز يتم تفعيله مع حسابات رسمية وتحديثات تلقائية لضمان أفضل أداء دون انقطاع.
              </p>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`أرغب بطلب رسيفر واي فاي من ${OWNER_NAME_AR}.`)}`}
                className="inline-flex items-center gap-2 rounded-full bg-kuwait-red px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-red-700"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="satellite-product-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                اطلبه الآن عبر واتساب
              </LeadTrackedLink>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {wifiHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-kuwait-black/10 bg-white p-5 shadow-sm"
                >
                  <feature.icon className="h-6 w-6 text-kuwait-green" aria-hidden="true" />
                  <h4 className="mt-3 text-sm font-semibold text-kuwait-black">
                    {feature.title}
                  </h4>
                  <p className="mt-2 text-xs text-kuwait-black/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow">
            <h3 className="text-xl font-semibold text-kuwait-black">
              خدمات الصيانة والتطوير
            </h3>
            <p className="mt-3 text-sm text-kuwait-black/70">
              نقوم بتحديث الأجهزة، تغيير العدسات (LNB)، تمديد الأسلاك الداخلية، وفحص جودة الإشارة بأجهزة قياس احترافية.
            </p>
          </div>
          <div className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow">
            <h3 className="text-xl font-semibold text-kuwait-black">
              تحويل إلى IPTV بالكامل
            </h3>
            <p className="mt-3 text-sm text-kuwait-black/70">
              حلول IPTV متكاملة بدون انقطاع مع إمكانية تسجيل البرامج، التحكم الأبوي، ودعم فني مباشر عبر واتساب.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
