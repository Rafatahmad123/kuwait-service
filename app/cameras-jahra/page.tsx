import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, CheckCircle2, MapPin, PhoneCall, Shield } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, FORMATTED_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

const neighborhoods = ["سعد العبدالله", "النسيم", "العيون", "القصر", "تيماء", "الواحة"];

const advantages = [
  "تركيب كاميرات مراقبة داخلية وخارجية بدقة 4K",
  "ربط أنظمة المراقبة بتطبيقات الهواتف مع تنبيه فوري",
  "تثبيت أجهزة تسجيل NVR/HVR وشبكات إنترنت مؤمنة",
  "زيارات صيانة دورية للجهراء والمناطق المجاورة",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "CCTV Installation Jahra",
  provider: {
    "@type": "LocalBusiness",
    name: "Kuwait Service",
    telephone: PHONE_NUMBER,
    areaServed: neighborhoods,
    url: `${BASE_URL}/cameras-jahra`,
  },
  areaServed: neighborhoods,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CCTV Packages Jahra",
  },
};

export const metadata: Metadata = {
  title: "تركيب كاميرات الجهراء | أنظمة مراقبة سعد العبدالله والنسيم",
  description:
    "تركيب كاميرات الجهراء من Kuwait Service يقدم حلول مراقبة متكاملة للمنازل والشركات في سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة مع دعم فني سريع.",
  keywords: [
    "كاميرات مراقبة الجهراء",
    "تركيب كاميرات سعد العبدالله",
    "CCTV النسيم",
    "أنظمة مراقبة الجهراء",
    "كاميرات أمنية الكويت",
  ],
  alternates: {
    canonical: `${BASE_URL}/cameras-jahra`,
  },
  openGraph: {
    title: "تركيب كاميرات الجهراء",
    description:
      "أنظمة مراقبة متطورة في محافظة الجهراء تشمل سعد العبدالله والنسيم والواحة مع مراقبة عبر الهاتف ودعم فني محترف.",
    url: `${BASE_URL}/cameras-jahra`,
    locale: "ar_KW",
  },
};

export default function CamerasJahraPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={schema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 text-right">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-kuwait-red/10 px-4 py-1 text-sm font-semibold text-kuwait-red">
              تركيب كاميرات الجهراء
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              تركيب كاميرات مراقبة الجهراء | أمان متكامل للمنازل والشركات
            </h1>
            <p className="text-base text-kuwait-black/70">
              نقدم حلول مراقبة حديثة تغطي سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة مع كاميرات رؤية ليلية، تخزين سحابي، ودعم فني مستمر لضمان حماية ممتلكاتك على مدار الساعة.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {advantages.map((item) => (
                <li key={item} className="flex items-center justify-end gap-3">
                  <span>{item}</span>
                  <CheckCircle2 className="h-5 w-5 text-kuwait-red" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بتركيب كاميرات مراقبة في الجهراء من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-red/40 px-5 py-3 text-sm font-semibold text-kuwait-red transition hover:bg-kuwait-red/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="cameras-jahra-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-red px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
                channel="phone"
                source="cameras-jahra-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{FORMATTED_PHONE}</span>
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl border border-kuwait-red/20 bg-white shadow-lg">
              <Image
                src="/images/cameras-hero.jpg"
                alt="فني تركيب كاميرات مراقبة في الجهراء"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <div className="rounded-3xl border border-kuwait-red/20 bg-kuwait-red/5 p-6 text-sm text-kuwait-black/80">
              <h2 className="mb-3 flex items-center justify-end gap-2 text-base font-semibold text-kuwait-red">
                <span>حلول متقدمة لحماية الجهراء</span>
                <Shield className="h-5 w-5" aria-hidden="true" />
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
        <h2 className="text-2xl font-semibold text-kuwait-black">باقات كاميرات الجهراء</h2>
        <p className="text-sm text-kuwait-black/70">
          اختر من حلول كاميرات مراقبة عالية الدقة، نظام تسجيل NVR، وربط تطبيقات الهاتف مع إشعارات فورية للمنازل والمتاجر في سعد العبدالله، النسيم، والواحة.
        </p>
      </section>
    </div>
  );
}
