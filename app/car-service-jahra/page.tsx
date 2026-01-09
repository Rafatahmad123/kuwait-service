import type { Metadata } from "next";
import { ArrowLeftCircle, CheckCircle2, MapPin, PhoneCall } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, FORMATTED_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

const neighborhoods = ["سعد العبدالله", "النسيم", "العيون", "القصر", "تيماء", "الواحة"];

const perks = [
  "سيارات إنقاذ مجهزة لخدمة الطريق داخل الجهراء",
  "تبديل بطاريات وتواير أصلية في موقع العميل",
  "تشخيص أعطال المحرك والكمبيوتر خلال دقائق",
  "تغطية مناطق سعد العبدالله والنسيم والواحة على مدار الساعة",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile Garage Jahra",
  provider: {
    "@type": "LocalBusiness",
    name: "Kuwait Service",
    telephone: PHONE_NUMBER,
    areaServed: neighborhoods,
    url: `${BASE_URL}/car-service-jahra`,
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceURL: WHATSAPP_LINK,
  },
};

export const metadata: Metadata = {
  title: "كراج متنقل الجهراء | بنشر متنقل سعد العبدالله والنسيم",
  description:
    "كراج متنقل الجهراء من Kuwait Service يوفر بنشر متنقل، تبديل بطاريات وتواير، وتشخيص أعطال سريع في سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة.",
  keywords: [
    "كراج متنقل الجهراء",
    "بنشر متنقل سعد العبدالله",
    "بنشر متنقل النسيم",
    "كراج متنقل الكويت",
    "خدمة ميكانيكي الجهراء",
  ],
  alternates: {
    canonical: `${BASE_URL}/car-service-jahra`,
  },
  openGraph: {
    title: "كراج متنقل الجهراء",
    description:
      "خدمة بنشر متنقل وكراج متنقل في محافظة الجهراء مع طوارئ 24 ساعة تغطي سعد العبدالله والنسيم وتيماء.",
    url: `${BASE_URL}/car-service-jahra`,
    locale: "ar_KW",
  },
};

export default function CarServiceJahraPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={schema} />

      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 text-right">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-kuwait-red/10 px-4 py-1 text-sm font-semibold text-kuwait-red">
              كراج متنقل الجهراء
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              كراج متنقل الجهراء | إنقاذ الطريق في سعد العبدالله والنسيم
            </h1>
            <p className="text-base text-kuwait-black/70">
              خبراؤنا يصلون إلى سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة خلال أقل من 30 دقيقة مع سيارات مجهزة بالكامل لتبديل التواير والبطاريات وتشخيص الأعطال الطارئة.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {perks.map((item) => (
                <li key={item} className="flex items-center justify-end gap-3">
                  <span>{item}</span>
                  <CheckCircle2 className="h-5 w-5 text-kuwait-red" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بخدمة كراج متنقل الجهراء من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-red/40 px-5 py-3 text-sm font-semibold text-kuwait-red transition hover:bg-kuwait-red/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="car-service-jahra-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-red px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
                channel="phone"
                source="car-service-jahra-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span dir="ltr">{FORMATTED_PHONE}</span>
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-3xl border border-kuwait-red/20 bg-white p-6 shadow-lg">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-kuwait-red to-kuwait-green/80 text-white">
                  <span className="text-lg font-semibold">صورة Placeholder لخدمة الكراج</span>
                </div>
                <p className="text-center text-sm text-kuwait-black/70">
                  سيتم استبدال هذه الصورة لاحقاً بصور فعلية لسيارات الكراج المتنقل في الجهراء.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-kuwait-red/20 bg-kuwait-red/5 p-6 text-sm text-kuwait-black/80">
              <h2 className="mb-3 flex items-center justify-end gap-2 text-base font-semibold text-kuwait-red">
                <span>نغطي أهم مناطق الجهراء</span>
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
        <h2 className="text-2xl font-semibold text-kuwait-black">خدمة طوارئ بنشر متنقل الجهراء</h2>
        <p className="text-sm text-kuwait-black/70">
          من تبديل الإطارات والبطاريات إلى سحب المركبة وتشخيص الأعطال الإلكترونية، نضمن لك وصول فريق مختص في سعد العبدالله، النسيم، القصر، تيماء، والواحة خلال دقائق.
        </p>
      </section>
    </div>
  );
}
