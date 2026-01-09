import type { Metadata } from "next";
import { ArrowLeftCircle, CheckCircle2, Flame, MapPin, PhoneCall, Wrench } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, FORMATTED_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

const neighborhoods = ["سعد العبدالله", "النسيم", "العيون", "القصر", "تيماء", "الواحة"];

const services = [
  "صيانة شاملة للطباخات والأفران المنزلية والتجارية",
  "تبديل البواجي وحساسات الحرارة وضبط اللهب",
  "تنظيف عميق للهودات ومجاري الشفط في منازل الجهراء",
  "توفير قطع غيار أصلية مع ضمان لمدة 6 أشهر",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cooker Repair Jahra",
  provider: {
    "@type": "LocalBusiness",
    name: "Kuwait Service",
    telephone: PHONE_NUMBER,
    areaServed: neighborhoods,
    url: `${BASE_URL}/cookers-jahra`,
  },
  areaServed: neighborhoods,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

export const metadata: Metadata = {
  title: "تصليح طباخات الجهراء | صيانة أفران سعد العبدالله والنسيم",
  description:
    "تصليح طباخات الجهراء من Kuwait Service يشمل صيانة الأفران وتنظيف الهودات وتبديل القطع الأصلية في سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة.",
  keywords: [
    "تصليح طباخات الجهراء",
    "صيانة أفران سعد العبدالله",
    "تنظيف هودات النسيم",
    "تصليح طباخات الكويت",
    "فني طباخات الجهراء",
  ],
  alternates: {
    canonical: `${BASE_URL}/cookers-jahra`,
  },
  openGraph: {
    title: "تصليح طباخات الجهراء",
    description:
      "فنيون متخصصون في صيانة الطباخات والأفران وتنظيف الهودات في محافظة الجهراء مع تغطية سعد العبدالله والنسيم وتيماء.",
    url: `${BASE_URL}/cookers-jahra`,
    locale: "ar_KW",
  },
};

export default function CookersJahraPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={schema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 text-right">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-kuwait-green/10 px-4 py-1 text-sm font-semibold text-kuwait-green">
              تصليح طباخات الجهراء
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              تصليح طباخات وأفران الجهراء | خدمة فورية لكل مناطق المحافظة
            </h1>
            <p className="text-base text-kuwait-black/70">
              ندعم سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة بفنيين متخصصين في صيانة الطباخات والأفران وتنظيف الهودات مع فحص احترافي وضمان بعد الصيانة.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {services.map((item) => (
                <li key={item} className="flex items-center justify-end gap-3">
                  <span>{item}</span>
                  <CheckCircle2 className="h-5 w-5 text-kuwait-green" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أحتاج خدمة تصليح طباخات الجهراء من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-green/40 px-5 py-3 text-sm font-semibold text-kuwait-green transition hover:bg-kuwait-green/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="cookers-jahra-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-green px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
                channel="phone"
                source="cookers-jahra-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{FORMATTED_PHONE}</span>
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-3xl border border-kuwait-green/20 bg-white p-6 shadow-lg">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-kuwait-green to-kuwait-red/80 text-white">
                  <span className="text-lg font-semibold">Placeholder لصيانة الطباخات</span>
                </div>
                <p className="text-center text-sm text-kuwait-black/70">
                  استبدل هذا العنصر لاحقاً بصورة توضح صيانة الطباخات والهودات في الجهراء.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-kuwait-green/20 bg-kuwait-green/5 p-6 text-sm text-kuwait-black/80">
              <h2 className="mb-3 flex items-center justify-end gap-2 text-base font-semibold text-kuwait-green">
                <span>نغطي أبرز مناطق الجهراء</span>
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </h2>
              <div className="flex flex-wrap justify-end gap-2">
                {neighborhoods.map((area) => (
                  <span key={area} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-kuwait-black">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl space-y-6 px-4">
        <h2 className="text-2xl font-semibold text-kuwait-black">خدمة صيانة طباخات الجهراء</h2>
        <p className="text-sm text-kuwait-black/70">
          نقدم حلول صيانة دقيقة للطباخات والأفران لتأمين أداء مستقر داخل المنازل والمطاعم في سعد العبدالله، النسيم، القصر، تيماء، والواحة مع ضمان قطع الغيار الرسمية.
        </p>
      </section>
    </div>
  );
}
