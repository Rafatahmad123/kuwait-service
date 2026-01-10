import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, CheckCircle2, MapPin, PhoneCall } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, FORMATTED_PHONE, PHONE_NUMBER, WHATSAPP_LINK } from "@/lib/constants";

const neighborhoods = ["سعد العبدالله", "النسيم", "العيون", "القصر", "تيماء", "الواحة"];

const features = [
  "تركيب أطباق ستلايت مركزية وفردية مع ضبط عالي الدقة",
  "برمجة رسيفرات IPTV وتحديث السوفت وير فورياً",
  "دعم فني هندي يصل للجهراء خلال أقل من 30 دقيقة",
  "حلول مشاهدة بدون انقطاع مع أجهزة واي فاي أصلية",
];

const satelliteJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Satellite Technician Jahra",
  areaServed: neighborhoods,
  provider: {
    "@type": "LocalBusiness",
    name: "Kuwait Service",
    telephone: PHONE_NUMBER,
    serviceArea: neighborhoods,
    url: `${BASE_URL}/satellite-jahra`,
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "KWD",
    hasAdultConsideration: "homeService",
  },
};

export const metadata: Metadata = {
  title: "فني ستلايت الجهراء | تركيب ستلايت و IPTV في سعد العبدالله والنسيم",
  description:
    "اطلب فني ستلايت الجهراء من Kuwait Service لتركيب وضبط أطباق الستلايت و IPTV مع دعم فوري في سعد العبدالله، النسيم، العيون، القصر، تيماء، والواحة.",
  keywords: [
    "فني ستلايت الجهراء",
    "ستلايت سعد العبدالله",
    "IPTV النسيم",
    "تركيب ستلايت الجهراء",
    "فني ستلايت الكويت",
  ],
  alternates: {
    canonical: `${BASE_URL}/satellite-jahra`,
  },
  openGraph: {
    title: "فني ستلايت الجهراء",
    description:
      "خدمة ستلايت و IPTV في الجهراء تغطي سعد العبدالله والنسيم والواحة مع فنيين محترفين واستجابة خلال دقائق.",
    url: `${BASE_URL}/satellite-jahra`,
    locale: "ar_KW",
  },
};

export default function SatelliteJahraPage() {
  return (
    <div className="space-y-20 pb-20">
      <JsonLd data={satelliteJsonLd} />

      <section className="relative overflow-hidden bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
          <div className="flex-1 space-y-6 text-right">
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-kuwait-green/10 px-4 py-1 text-sm font-semibold text-kuwait-green">
              فني ستلايت الجهراء
            </span>
            <h1 className="text-4xl font-bold text-kuwait-black">
              فني ستلايت الجهراء | تركيب وتصليح وصيانة 24 ساعة
            </h1>
            <p className="text-base text-kuwait-black/70">
              هل تبحث عن فني ستلايت شاطر في الجهراء؟ نحن نوفر لك نخبة من الفنيين المتخصصين (فني ستلايت هندي وباكستاني) لخدمة جميع مناطق الجهراء (النسيم، تيماء، الواحة، العيون، والقصر). نصلك خلال دقائق بأسعار تنافسية وكفالة حقيقية.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {[
                "تركيب ستلايت مركزي للقسائم والعمارات.",
                "برمجة وتجديد اشتراك بي إن سبورت (BeIN Sports).",
                "تصليح وصيانة الرسيفرات وتركيب ستاندات التلفزيون.",
                "تمديد وايرات الستلايت الأصلية والمقاومة للشمس.",
              ].map((service) => (
                <li key={service} className="flex items-center justify-end gap-3">
                  <span>{service}</span>
                  <CheckCircle2 className="h-5 w-5 text-kuwait-green" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <LeadTrackedLink
                href={`tel:00965662471661`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-green px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
                channel="phone"
                source="satellite-jahra-primary-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                اتصل الآن بـ فني ستلايت الجهراء: 00965662471661
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("أرغب بخدمة فني ستلايت الجهراء من Kuwait Service.")}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-green/40 px-5 py-3 text-sm font-semibold text-kuwait-green transition hover:bg-kuwait-green/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="satellite-jahra-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl border border-kuwait-green/20 bg-white shadow-lg">
              <Image
                src="/images/satellite-hero.jpg"
                alt="فني ستلايت الجهراء يعمل على تركيب رسيفر"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <div className="rounded-3xl border border-kuwait-green/20 bg-kuwait-green/5 p-6 text-sm text-kuwait-black/80">
              <h2 className="mb-3 flex items-center justify-end gap-2 text-base font-semibold text-kuwait-green">
                <span>نخدم أسرع مناطق الجهراء</span>
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
        <h2 className="text-2xl font-semibold text-kuwait-black">باقات الستلايت في الجهراء</h2>
        <p className="text-sm text-kuwait-black/70">
          نقدّم اشتراكات IPTV محدثة، تركيب أطباق مركزية للمجمعات السكنية، مع صيانة دورية للفنادق والمنازل في سعد العبدالله والنسيم والواحة. تواصل معنا الآن للحصول على استشارة مجانية وخيارات دفع مرنة.
        </p>
      </section>
    </div>
  );
}
