import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, BadgeCheck, Flag, Layers, PhoneCall, RadioReceiver, Trophy, Tv2 } from "lucide-react";

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

const HERO_IMAGE = "/photo_2026-01-19_00-21-56.jpg";
const ACTION_IMAGE = "/photo_2026-01-18_23-51-33.jpg";
const WORK_SECOND_IMAGE = "/photo_2026-01-18_23-58-20.jpg";
const BEIN_IMAGE = "/photo_2026-01-19_00-23-39.jpg";
const FEATURE_PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWP4TwQACfsD/Q9g6uYAAAAASUVORK5CYII=" as const;

const announcementSchema = {
  "@context": "https://schema.org",
  "@type": "SpecialAnnouncement",
  name: `حملة تجهيزات كأس العالم - ${OWNER_NAME_AR}`,
  text: "خصم خاص على تركيب وصيانة الستلايت وتجهيز الديوانيات والمقاهي لموسم كأس العالم في الكويت.",
  datePosted: "2026-01-18",
  expires: "2026-07-31",
  category: "https://schema.org/Announcement",
  spatialCoverage: {
    "@type": "Country",
    name: "Kuwait",
  },
  url: `${BASE_URL}/world-cup`,
  serviceType: "Satellite Installation and Receiver Programming",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    areaServed: SERVICE_AREAS,
    telephone: PHONE_NUMBER,
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: `tel:${PHONE_NUMBER}`,
    name: "اتصل الآن ضمن عرض كأس العالم",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "تجهيزات كأس العالم - تركيب وصيانة ستلايت",
  areaServed: SERVICE_AREAS,
  serviceType: "World Cup Satellite & BeIN Setup",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    telephone: PHONE_NUMBER,
    url: `${BASE_URL}/world-cup`,
  },
  offers: {
    "@type": "Offer",
    availabilityStarts: "2026-01-18",
    availabilityEnds: "2026-07-31",
    priceCurrency: "KWD",
    description: "باقات تركيب ستلايت، برمجة رسيفر، وضبط باقات بي إن سبورت مع دعم فني 24/7.",
  },
};

const diwaniyaHighlights = [
  {
    title: "تصميم كامل للديوانيات والمقاهي",
    description:
      "نضبط مواقع الأطباق، نقاط التوزيع، والكابلات لضمان بث مستقر لجميع الزوايا الداخلية والخارجية.",
    icon: Layers,
  },
  {
    title: "بث متعدد الشاشات",
    description: "تمديد شبكات HD و 4K مع تقسيم إشارة احترافي للحفاظ على جودة صورة موحدة في كل شاشة.",
    icon: Tv2,
  },
  {
    title: "خدمة طوارئ يوم المباراة",
    description: "فريق فني جاهز قبل وخلال المباراة لتفادي الانقطاع واستعادة الخدمة فورًا.",
    icon: Flag,
  },
];

const programmingFeatures = [
  "برمجة وتحديث جميع أنواع الرسيفرات (HD/4K/IPTV)",
  "إعداد قوائم مخصصة للقنوات الرياضية العالمية والعربية",
  "تفعيل وتنشيط الباقات المشفرة وخدمات بي إن سبورت",
  "ضبط الصوت متعدد اللغات وخيارات الترجمة المباشرة",
];

const repairHighlights = [
  {
    label: "ترميم شاشات LED/LCD",
    detail: "استبدال اللوحات والإضاءة الخلفية مع معايرة ألوان خاصة للمباريات.",
    icon: BadgeCheck,
  },
  {
    label: "صيانة أنظمة الصوت",
    detail: "موازنة صوت محيطية للديوانيات الكبرى مع اختبار كامل قبل المباراة.",
    icon: RadioReceiver,
  },
  {
    label: "وقاية من الأعطال",
    detail: "كشف الحرارة والرطوبة ووضع حلول تبريد للأجهزة الحساسة.",
    icon: Trophy,
  },
];

const beinSteps = [
  {
    step: "تهيئة الحساب",
    detail: "إنشاء أو تحديث حساب بي إن سبورت وربطه بالرسيفر مع تفعيل آمن للبطاقات.",
  },
  {
    step: "ضبط الباقات",
    detail: "اختيار الباقات الرياضية المناسبة للديوانية أو المقهى مع جدولة الدفع والدعم.",
  },
  {
    step: "اختبار البث",
    detail: "تشغيل القنوات قبل 48 ساعة من الجولة الافتتاحية لضمان جودة الإشارة وعدم الانقطاع.",
  },
];

export const metadata: Metadata = {
  title: "تجهيزات كأس العالم في الكويت | تركيب وصيانة ستلايت - فريق فني ستلايت الكويت",
  description:
    "استعد لموسم كأس العالم في الكويت مع فريق فني ستلايت الكويت: تركيب ستلايت للديوانيات والمقاهي، برمجة الرسيفرات، صيانة الشاشات، وضبط بي إن سبورت بخدمة فورية 24/7.",
  keywords: [
    "تجهيزات كأس العالم",
    "تركيب ستلايت الكويت",
    "برمجة رسيفرات",
    "بي إن سبورت الكويت",
    "صيانة شاشات مباريات",
    "خدمة ديوانيات كأس العالم",
    ...DEFAULT_KEYWORDS,
  ],
  alternates: {
    canonical: `${BASE_URL}/world-cup`,
  },
  openGraph: {
    title: "تجهيزات كأس العالم في الكويت - فريق فني ستلايت الكويت",
    description:
      "باقات كاملة لتركيب ستلايت، برمجة الرسيفر، وضبط باقات بي إن سبورت للديوانيات والمقاهي قبل كأس العالم.",
    url: `${BASE_URL}/world-cup`,
    locale: "ar_KW",
    images: [
      {
        url: `${BASE_URL}/world-cup/og-world-cup.jpg`,
        width: 1200,
        height: 630,
        alt: "تجهيزات كأس العالم في الكويت",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WorldCupPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#001b2e] via-[#03243b] to-[#041727] pb-40 text-white md:pb-24">
      <JsonLd data={announcementSchema} />
      <JsonLd data={serviceSchema} />

      <section className="relative overflow-hidden pt-24">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.12),_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#02111d] via-transparent" />
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/90">
              ⚽ موسم كأس العالم 2026 في الكويت
            </span>
            <h1 className="text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl">
              تجهيزات كأس العالم: تركيب وصيانة ستلايت في الكويت - فريق فني ستلايت الكويت
            </h1>
            <p className="text-lg text-white/80">
              استعد لتجربة مشاهدة استثنائية في الديوانية، المقهى، أو المنزل مع فريق متخصص يقدم حلول تركيب الستلايت،
              برمجة الرسيفر، وصيانة الشاشات مع دعم فني مباشر طوال فترة البطولة.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#22c55e] px-6 py-3 text-base font-semibold text-[#04210f] shadow-[0_20px_40px_rgba(34,197,94,0.35)] transition hover:-translate-y-0.5 hover:bg-[#32d06f]"
                channel="phone"
                source="world-cup-hero-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span className="text-lg" dir="ltr">
                  {FORMATTED_PHONE}
                </span>
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("مرحباً فريق فني ستلايت الكويت، أحتاج تجهيزات كأس العالم للديوانية")}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="world-cup-hero-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب الآن
              </LeadTrackedLink>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <Trophy className="h-4 w-4" aria-hidden="true" />
                تغطية جميع المحافظات
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <Flag className="h-4 w-4" aria-hidden="true" />
                تجهيزات معتمدة للديوانيات والمقاهي
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                <RadioReceiver className="h-4 w-4" aria-hidden="true" />
                دعم فني مباشر أثناء المباريات
              </span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute -inset-8 rounded-[36px] bg-[radial-gradient(circle,_rgba(255,215,0,0.18),_transparent_70%)] blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <Image
                src={HERO_IMAGE}
                alt="صورة ملعب مضاء في الكويت لاستقبال جماهير كأس العالم"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={FEATURE_PLACEHOLDER}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-gradient-to-r from-[#0f172a]/80 via-[#052137]/80 to-[#081221]/90 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/40 bg-[#22c55e]/10 px-3 py-1 text-sm font-semibold text-[#22c55e]">
              ديوانيات ومقاهي
            </span>
            <h2 className="text-3xl font-bold text-white">Satellite installation for Diwaniyas/Cafes</h2>
            <p className="text-base leading-8 text-white/80">
              ننفذ تغطية بث متكاملة للديوانيات والمقاهي عبر تصميم شبكة ستلايت مركزية، توزيع متعدد الشاشات، ومعايرة صوت
              محيطي يمنح الضيوف تجربة عالمية.
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {diwaniyaHighlights.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-white/85 shadow-[0_18px_40px_rgba(2,17,29,0.55)]"
                >
                  <item.icon className="mb-3 h-6 w-6 text-[#22c55e]" aria-hidden="true" />
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1">
            <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle,_rgba(34,197,94,0.14),_transparent_75%)] blur-3xl" aria-hidden="true" />
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-white/15 bg-white/5">
              <Image
                src={ACTION_IMAGE}
                alt="فريق فني ستلايت الكويت أثناء تركيب طبق ستلايت خارجي للديوانيات"
                width={1100}
                height={780}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={FEATURE_PLACEHOLDER}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-8 px-6">
        <header className="space-y-3 text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
            أعمالنا الميدانية
          </span>
          <h2 className="text-3xl font-bold text-white">معرض أعمالنا خلال تجهيزات كأس العالم</h2>
          <p className="text-sm text-white/75">
            لقطات حية من فرق فريق فني ستلايت الكويت أثناء تركيب أطباق الستلايت وتوزيع الإشارة عالية الجودة للديوانيات والمقاهي.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_24px_60px_rgba(1,20,32,0.45)]">
            <Image
              src={ACTION_IMAGE}
              alt="فني ستلايت من فريق فني ستلايت الكويت يثبت طبق دش على سطح منزل في الكويت"
              width={1200}
              height={900}
              className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] sm:h-[420px]"
              placeholder="blur"
              blurDataURL={FEATURE_PLACEHOLDER}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02111d]/90 to-transparent px-4 py-4 text-right text-sm text-white/85">
              ضبط اتجاه الطبق وتوزيع الإشارة للديوانيات الكبرى.
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 shadow-[0_24px_60px_rgba(1,20,32,0.45)]">
            <Image
              src={WORK_SECOND_IMAGE}
              alt="تركيب أجهزة استقبال ورسيفرات حديثة لمتابعة القنوات الرياضية في الكويت"
              width={1200}
              height={900}
              className="h-80 w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03] sm:h-[420px]"
              placeholder="blur"
              blurDataURL={FEATURE_PLACEHOLDER}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#02111d]/90 to-transparent px-4 py-4 text-right text-sm text-white/85">
              تهيئة غرف البث الداخلي وتجربة جودة الصورة قبل المباريات.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6">
        <header className="space-y-4 text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Receiver programming
          </span>
          <h2 className="text-3xl font-bold text-white">برمجة الرسيفرات لأفضل تجربة رياضية</h2>
          <p className="text-base text-white/80">
            نضبط الرسيفرات لضمان التنقل السريع بين القنوات، تحديثات السوفت وير، وتأمين بث بدون انقطاع طوال البطولة.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          <ul className="space-y-4">
            {programmingFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85"
              >
                <Trophy className="mt-1 h-5 w-5 text-[#facc15]" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm text-white/80 shadow-[0_26px_60px_rgba(0,15,30,0.45)]">
            <div className="relative mb-4 overflow-hidden rounded-[24px] border border-white/15">
              <Image
                src={BEIN_IMAGE}
                alt="تركيب أجهزة بي إن سبورت عالية الجودة لمتابعة مباريات كأس العالم"
                width={960}
                height={640}
                className="h-full w-full object-cover"
                placeholder="blur"
                blurDataURL={FEATURE_PLACEHOLDER}
              />
            </div>
            <h3 className="text-lg font-semibold text-white">باقات مرنة للديوانيات والمنازل</h3>
            <p className="mt-3">
              نضبط الاشتراكات اليومية، الأسبوعية، أو الشهرية حسب جدول المباريات وعدد الزوار مع إمكانية التوسّع لتغطية أكثر من 12 شاشة.
            </p>
            <p className="mt-3">
              يشمل العرض تدريب سريع للمشغلين على تبديل القنوات، استخدام الخلفيات، ومراقبة جودة الإشارة أثناء الحدث.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-gradient-to-r from-[#090b1a] via-[#041325] to-[#0b1020] py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <header className="space-y-4 text-right">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Screen repair
            </span>
            <h2 className="text-3xl font-bold text-white">Screen repair & match-ready tuning</h2>
            <p className="text-base text-white/80">
              خدمة صيانة شاملة للشاشات وأنظمة الصوت لضمان وضوح الصورة وقوة الصوت طيلة البطولة، مع قطع غيار أصلية وضمان
              ممتد.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {repairHighlights.map((item) => (
              <article
                key={item.label}
                className="space-y-3 rounded-[26px] border border-white/12 bg-white/5 p-6 text-white/80 transition hover:border-white/30"
              >
                <item.icon className="h-6 w-6 text-[#facc15]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="text-sm">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-12 px-6">
        <header className="space-y-4 text-right">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            BeIN Sport setup
          </span>
          <h2 className="text-3xl font-bold text-white">ضبط باقات بي إن سبورت قبل صافرة البداية</h2>
          <p className="text-base text-white/80">
            إجراءات دقيقة لتفعيل باقات بي إن سبورت مع تحديث الرسيفر، مزامنة القنوات، وتفعيل ميزات إعادة التشغيل.
          </p>
        </header>
        <div className="grid gap-6 lg:grid-cols-3">
          {beinSteps.map((item, index) => (
            <div
              key={item.step}
              className="relative overflow-hidden rounded-[24px] border border-white/12 bg-white/5 p-6 text-white/85"
            >
              <span className="absolute -top-10 right-4 text-7xl font-bold text-white/5" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.step}</h3>
              <p className="mt-3 text-sm text-white/75">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-5xl rounded-[32px] border border-white/12 bg-white/5 px-6 py-12 text-center shadow-[0_28px_70px_rgba(1,14,25,0.6)]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">استعدوا للجولة الافتتاحية مع {OWNER_NAME_AR}</h2>
          <p className="mx-auto max-w-2xl text-base text-white/80">
            نوفر زيارات ميدانية سريعة لتقييم الاحتياجات، تجهيز كامل للأنظمة قبل المباراة، وخدمة مراقبة أثناء الحدث مع فريق
            جاهز للاستجابة الفورية.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LeadTrackedLink
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 rounded-full bg-[#22c55e] px-7 py-3 text-base font-semibold text-[#04210f] shadow-[0_20px_40px_rgba(34,197,94,0.3)] transition hover:-translate-y-0.5 hover:bg-[#32d06f]"
              channel="phone"
              source="world-cup-bottom-call"
            >
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              حجز زيارة فورية
            </LeadTrackedLink>
            <LeadTrackedLink
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بحجز خدمة كأس العالم من فريق فني ستلايت الكويت")}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
              channel="whatsapp"
              source="world-cup-bottom-whatsapp"
            >
              <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
              تنسيق عبر واتساب
            </LeadTrackedLink>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col items-center gap-3 bg-gradient-to-t from-[#02111d]/95 via-[#02111d]/80 to-transparent px-4 pb-5 pt-4 md:inset-x-auto md:bottom-6 md:right-6 md:w-auto md:items-end md:rounded-3xl md:bg-transparent md:px-0 md:pb-0 md:pt-0">
        <LeadTrackedLink
          href={`tel:${PHONE_NUMBER}`}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#22c55e] px-4 py-3 text-sm font-semibold text-[#04210f] shadow-[0_18px_40px_rgba(34,197,94,0.35)] transition hover:-translate-y-0.5 hover:bg-[#32d06f] md:w-auto"
          channel="phone"
          source="world-cup-floating-call"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          <span>اتصال كأس العالم</span>
        </LeadTrackedLink>
        <LeadTrackedLink
          href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أريد تجهيزات كأس العالم من فريق فني ستلايت الكويت")}`}
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-[#04210f] shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1ec15c] md:w-auto"
          target="_blank"
          rel="noopener noreferrer"
          channel="whatsapp"
          source="world-cup-floating-whatsapp"
        >
          <ArrowLeftCircle className="h-4 w-4" aria-hidden="true" />
          <span>واتساب كأس العالم</span>
        </LeadTrackedLink>
      </div>
    </div>
  );
}
