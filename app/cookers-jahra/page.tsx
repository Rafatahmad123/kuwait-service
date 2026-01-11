import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, CheckCircle2, MapPin, PhoneCall } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, WHATSAPP_LINK } from "@/lib/constants";

const COOKER_PHONE = "51222091";
const COOKER_PHONE_FULL = "+96551222091";
const neighborhoods = ["الجهراء", "الصليبية", "النعيم"];

const services = [
  "فني تصليح طباخات هندي وباكستاني بخبرة تتجاوز 15 سنة في الكويت",
  "تنظيف أفران عميق يشمل إزالة الدهون وفحص أنظمة الأمان",
  "تبديل فالات وجام للطباخات مع ضبط اللهب وحرارة الفرن",
  "تصليح غسالات أوتوماتيك ونشافات داخل منازل وبيوت الجهراء",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Cooker Repair Jahra",
  provider: {
    "@type": "LocalBusiness",
    name: "Kuwait Service",
    telephone: COOKER_PHONE_FULL,
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
  title: "تصليح طباخات الجهراء | صيانة أفران وغسالات بالمنزل",
  description:
    "تصليح طباخات الجهراء يوفر فني هندي وباكستاني لتنظيف الأفران، تبديل فالات وجام، وتصليح غسالات أوتوماتيك ونشافات في الجهراء، الصليبية، والنعيم.",
  keywords: [
    "تصليح طباخات الجهراء",
    "فني طباخات هندي الجهراء",
    "تنظيف أفران الجهراء",
    "تبديل فالات وجام الجهراء",
    "تصليح غسالات الصليبية",
  ],
  alternates: {
    canonical: `${BASE_URL}/cookers-jahra`,
  },
  openGraph: {
    title: "تصليح طباخات الجهراء",
    description:
      "أفضل فني تصليح طباخات في الجهراء والصليبية والنعيم لتنظيف الأفران، تبديل فالات وجام، وتصليح الغسالات والنشافات داخل المنزل.",
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
              تصليح طباخات الجهراء | صيانة أفران وغسالات بالمنزل
            </h1>
            <p className="text-base text-kuwait-black/70">
              أفضل فني تصليح طباخات بالجهراء (هندي وباكستاني) يصل إلى منازلكم في جميع مناطق المحافظة خلال وقت قياسي مع خدمة صيانة محترفة ومعدات أصلية.
            </p>
            <p className="text-base text-kuwait-black/70">
              نقدم صيانة شاملة تشمل تنظيف الأفران، تبديل فالات وجام، وتصليح غسالات أوتوماتيك ونشافات مع تغطية كاملة للجهراء والصليبية والنعيم ضمن زيارات منزلية موثوقة.
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
                href={`tel:${COOKER_PHONE}`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-green px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700"
                channel="phone"
                source="cookers-jahra-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span>طلب فني طباخات: {COOKER_PHONE}</span>
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl border border-kuwait-green/20 bg-white shadow-lg">
              <Image
                src="/images/cookers-hero.jpg"
                alt="فني تصليح طباخات الجهراء أثناء صيانة الفرن"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
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
          نمتلك خبرة واسعة في تنظيف الأفران وتبديل فالات وجام وتصليح الغسالات والنشافات داخل منازل الجهراء والصليبية والنعيم مع توفير قطع غيار أصلية وضمان مكتوب.
        </p>
      </section>
    </div>
  );
}
