import type { Metadata, Route } from "next";
import Link from "next/link";
import { ArrowLeftCircle, CheckCircle2, PhoneCall, Trophy } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import {
  BASE_URL,
  BUSINESS_BRAND,
  BUSINESS_NAME_AR,
  BUSINESS_PROFILE_NAME,
  DEFAULT_KEYWORDS,
  FORMATTED_PHONE,
  OWNER_NAME_AR,
  OWNER_NAME_EN,
  PHONE_NUMBER,
  SERVICE_AREAS,
  WHATSAPP_LINK,
} from "@/lib/constants";

const heroHighlights = [
  "استجابة فورية خلال 30 دقيقة في معظم مناطق الكويت",
  "فنيون معتمدون بخبرة أكثر من 10 سنوات",
  "ضمان على جميع الأعمال وقطع الغيار الأصلية",
];

const jahraServices: { href: Route; title: string; description: string }[] = [
  {
    href: "/satellite-jahra" as Route,
    title: "فني ستلايت الجهراء",
    description:
      "تركيب وضبط ستلايت IPTV مع استجابة فورية لمناطق سعد العبدالله والنسيم والعيون.",
  },
  {
    href: "/car-service-jahra" as Route,
    title: "كراج متنقل الجهراء",
    description:
      "خدمة بنشر متنقل وميكانيكي طوارئ تغطي القصر وتيماء والواحة خلال 30 دقيقة.",
  },
  {
    href: "/cameras-jahra" as Route,
    title: "تركيب كاميرات الجهراء",
    description:
      "كاميرات مراقبة عالية الدقة للمنازل والمتاجر في سعد العبدالله والنسيم والواحة.",
  },
  {
    href: "/cookers-jahra" as Route,
    title: "تصليح طباخات الجهراء",
    description:
      "صيانة طباخات وأفران منزلية مع فحص شامل داخل تيماء والقصر والعيون.",
  },
];

type ServiceCard = {
  slug: string;
  href: Route;
  title: string;
  description: string;
  perks: string[];
  accent: string;
};

const services: ServiceCard[] = [
  {
    slug: "satellite",
    href: "/satellite" as Route,
    title: "حلول الستلايت و IPTV",
    description:
      "تركيب وصيانة جميع أنواع الستلايت والرسيفر مع دعم القنوات المشفرة وخيارات IPTV الحديثة.",
    perks: ["معايرة دقيقة للإشارة", "دعم جميع أجهزة الرسيفر", "خدمة رسيفر واي فاي"],
    accent: "bg-kuwait-green/10",
  },
  {
    slug: "mobile-mechanic",
    href: "/mobile-mechanic" as Route,
    title: "الميكانيكي المتنقل 24/7",
    description:
      "خدمة إنقاذ الطريق وتصليح السيارات في موقعك داخل حدود الكويت مع إمكانية مشاركة الموقع لحظيًا.",
    perks: ["تشخيص إلكتروني", "بطاريات وزيوت أصلية", "سحب ونقل متوفر"],
    accent: "bg-kuwait-red/10",
  },
  {
    slug: "oven-repair",
    href: "/oven-repair" as Route,
    title: "تنظيف وصيانة الأفران",
    description:
      "تنظيف عميق للأفران والطبّاخات، تغيير البواجي والفحص الحراري مع ضمان السلامة.",
    perks: ["مواد تنظيف آمنة", "فحص شامل", "صيانة دورية"],
    accent: "bg-kuwait-green/10",
  },
  {
    slug: "cctv",
    href: "/cctv" as Route,
    title: "كاميرات المراقبة والإنتركم",
    description:
      "حلول متكاملة للأنظمة الأمنية تشمل كاميرات UHD، أجهزة تسجيل سحابية، وإنتركم ذكي للمنازل والشركات.",
    perks: ["رؤية ليلية", "تطبيقات هواتف", "تركيب سريع"],
    accent: "bg-kuwait-red/10",
  },
];

const testimonials = [
  {
    name: "أبو عبد الله - السالمية",
    text: "ركّبوا لي نظام IPTV كامل خلال ساعة واحدة فقط، القنوات تعمل بدقة 4K والخدمة ممتازة.",
  },
  {
    name: "سارة - حولي",
    text: "الميكانيكي المتنقل وصل خلال 20 دقيقة وأنقذني من تعطّل السيارة في الطريق الدائري.",
  },
  {
    name: "جاسم - الجهراء",
    text: "أعادوا ترتيب كاميرات المراقبة وربطوها مع الهاتف، جودة واضحة والمتابعة مستمرة.",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Satellite Service",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    url: BASE_URL,
    telephone: PHONE_NUMBER,
    areaServed: SERVICE_AREAS,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات الكويت المتكاملة",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        areaServed: SERVICE_AREAS,
        providerMobility: "dynamic",
      },
    })),
  },
  keywords: DEFAULT_KEYWORDS,
};

export const metadata: Metadata = {
  title: `${BUSINESS_PROFILE_NAME} | حلول ستلايت وصيانة متكاملة في الكويت`,
  description:
    `${BUSINESS_PROFILE_NAME} يقدم خدمات ستلايت، فرق ميكانيكية متنقلة، صيانة أفران، وكاميرات مراقبة بخدمة 24 ساعة لكل مناطق حولي، الأحمدي، الجهراء، والعاصمة.`,
  keywords: [
    ...DEFAULT_KEYWORDS,
    "فني ستلايت الكويت",
    "كراج متنقل الكويت",
    "تصليح طباخات الكويت",
    "كاميرات مراقبة الكويت",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: `${BUSINESS_PROFILE_NAME} | حلول ستلايت وصيانة متكاملة في الكويت`,
    description:
      `${BUSINESS_PROFILE_NAME} يقدم حلول تركيب وصيانة وبرمجة متخصصة تشمل خدمات الستلايت، الطوارئ المتنقلة، صيانة الأفران، وأنظمة المراقبة على مدار الساعة في الكويت.`,
    url: BASE_URL,
    locale: "ar_KW",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={homeSchema} />

      <section className="relative overflow-hidden bg-gradient-to-br from-kuwait-green/90 via-kuwait-green/80 to-kuwait-red/70 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/90">
              خدمات منزلية وصناعية في الكويت
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {BUSINESS_NAME_AR}
            </h1>
            <p className="text-lg text-white/85">
              نقدّم حلولاً سريعة ومتكاملة للستلايت، الفرق الميكانيكية المتنقلة، صيانة الأفران، وأنظمة المراقبة مع فريق محترف يغطي كل مناطق الكويت.
            </p>
            <div className="grid gap-3">
              {heroHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm md:text-base">
                  <CheckCircle2 className="h-5 w-5 text-white" aria-hidden="true" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-kuwait-green shadow-lg transition hover:shadow-xl"
                channel="phone"
                source="home-hero-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{FORMATTED_PHONE}</span>
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب في طلب خدمة من فريق فني ستلايت الكويت.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="home-hero-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-lg md:w-[340px]">
            <h2 className="text-lg font-semibold text-white">نعمل في جميع مناطق الكويت</h2>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/85">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="rounded-full bg-white/10 px-3 py-2 text-center">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-4">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-l from-[#04203a] via-[#05314f] to-[#07406a] p-10 text-white shadow-[0_30px_80px_rgba(3,24,48,0.45)] backdrop-blur">
          <div className="flex flex-col gap-4 text-center md:text-right">
            <span className="mx-auto flex items-center justify-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 md:mx-0 md:self-end">
              مونديال 2026
            </span>
            <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
              <div className="hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white/80">
                <Trophy className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="space-y-3 text-center md:text-right">
                <h2 className="text-3xl font-bold md:text-4xl">فني ستلايت الكويت - جاهزون للمونديال</h2>
                <p className="text-sm text-white/85 md:text-base">
                  فريقنا المتخصص يوفر لكم أسرع خدمات تركيب وصيانة الستلايت وبرمجة الرسيفرات لتجهيز ديوانياتكم قبل انطلاق كاس العالم.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-end">
            <Link
              href={"/world-cup" as Route}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-[#facc15] via-[#fbbf24] to-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#3b2f0c] shadow-[0_18px_50px_rgba(250,191,36,0.35)] transition hover:scale-105"
            >
              <Trophy className="h-5 w-5" aria-hidden="true" />
              <span>شاهد عروض المونديال وصور أعمالنا</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <header className="flex flex-col gap-3 text-center">
          <h2 className="section-title">خدماتنا في الجهراء</h2>
          <p className="mx-auto max-w-2xl text-base text-kuwait-black/70">
            فرقنا الميدانية جاهزة لدعمكم في سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة مع حلول متخصصة لكل خدمة.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {jahraServices.map((service) => (
            <div
              key={service.href}
              className="group relative overflow-hidden rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="space-y-4 text-right">
                <h3 className="text-xl font-semibold text-kuwait-black">{service.title}</h3>
                <p className="text-sm text-kuwait-black/70">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-kuwait-green transition group-hover:text-green-700"
                >
                  تعرف على الخدمة
                  <ArrowLeftCircle className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <header className="flex flex-col gap-3 text-center">
          <h2 className="section-title">خدماتنا الرئيسية</h2>
          <p className="mx-auto max-w-2xl text-base text-kuwait-black/70">
            حلول متخصصة تلائم المنازل والشركات في مناطق حولي، السالمية، الفروانية، والأحمدي مع التزام كامل بالجودة والسرعة.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.slug}
              className={`group relative overflow-hidden rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow-lg transition hover:-translate-y-1 ${service.accent}`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-kuwait-black">
                  {service.title}
                </h3>
                <p className="text-sm text-kuwait-black/70">{service.description}</p>
                <ul className="space-y-2 text-sm text-kuwait-black/80">
                  {service.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-kuwait-green" aria-hidden="true" />
                      {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-kuwait-green transition group-hover:text-green-700"
                >
                  اكتشف المزيد
                  <ArrowLeftCircle className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-4">
            <h2 className="section-title">ليه تختار فريق فني ستلايت الكويت؟</h2>
            <p className="text-base text-kuwait-black/70">
              نحن جاهزون لدعمكم في أي وقت مع ضمان جودة الأعمال وخدمة عملاء متواصلة عبر الهاتف والواتساب، بالإضافة إلى تغطية شاملة لمناطق الكويت بما فيها مبارك الكبير، الجابرية، والقرين.
            </p>
          </div>
          <div className="flex-1 grid gap-4 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div key={item} className="rounded-2xl border border-kuwait-green/30 bg-kuwait-green/5 p-4 text-sm text-kuwait-black/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-8 px-4">
        <h2 className="section-title text-center">آراء عملائنا</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-3xl border border-kuwait-black/10 bg-white p-6 shadow">
              <p className="text-sm text-kuwait-black/80">“{testimonial.text}”</p>
              <p className="mt-4 text-xs font-semibold text-kuwait-green">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl rounded-3xl bg-kuwait-red text-white shadow-glow">
        <div className="flex flex-col gap-6 px-6 py-12 text-center">
          <h2 className="text-3xl font-semibold">جاهزون لخدمتك الآن</h2>
          <p className="mx-auto max-w-2xl text-base text-white/85">
            تواصل معنا مباشرة عبر الهاتف أو الواتساب للتنسيق الفوري مع أقرب فريق لخدمتك.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <LeadTrackedLink
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-kuwait-red transition hover:scale-105"
              channel="phone"
              source="home-cta-call"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              <span dir="ltr">{FORMATTED_PHONE}</span>
            </LeadTrackedLink>
            <LeadTrackedLink
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أحتاج خدمة عاجلة من فريق فني ستلايت الكويت.")}`}
              className="flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
              channel="whatsapp"
              source="home-cta-whatsapp"
            >
              <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
              رسالة واتساب فورية
            </LeadTrackedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
