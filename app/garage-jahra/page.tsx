import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeftCircle, CheckCircle2, MapPin, PhoneCall } from "lucide-react";

import JsonLd from "@/components/JsonLd";
import LeadTrackedLink from "@/components/LeadTrackedLink";
import { BASE_URL, BUSINESS_PROFILE_NAME, OWNER_NAME_AR, WHATSAPP_LINK } from "@/lib/constants";

const GARAGE_PHONE = "51222091";
const GARAGE_PHONE_FULL = "+96551222091";
const neighborhoods = ["المطلاع", "جابر الأحمد", "سعد العبدالله"];
const serviceHighlights = [
  "خدمة طوارئ ميكانيكي طريق تعمل 24 ساعة في محافظة الجهراء.",
  "تبديل بطاريات أصلية مع فحص كهربائي كامل في موقع العميل.",
  "تصليح تواير (بنشر) متنقل مع موازنة سريعة وضبط ضغط الإطارات.",
  "فحص كمبيوتر وتشخيص أعطال السلف والدينمو لجميع أنواع السيارات.",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Mobile Garage Jahra",
  provider: {
    "@type": "LocalBusiness",
    name: BUSINESS_PROFILE_NAME,
    telephone: GARAGE_PHONE_FULL,
    areaServed: neighborhoods,
    url: `${BASE_URL}/garage-jahra`,
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceURL: `tel:${GARAGE_PHONE_FULL}`,
  },
};

export const metadata: Metadata = {
  title: "كراج متنقل الجهراء | بنشر وتصليح سيارات خدمة طريق 24 ساعة",
  description:
    "كراج متنقل الجهراء يقدم خدمة طوارئ طريق 24 ساعة في المطلاع، جابر الأحمد، وسعد العبدالله مع بنشر متنقل، تبديل بطاريات، فحص كمبيوتر، وتبديل سلف ودينمو.",
  keywords: [
    "كراج متنقل الجهراء",
    "خدمة طريق الجهراء",
    "بنشر متنقل الجهراء",
    "فحص كمبيوتر سيارات الجهراء",
    "تبديل سلف ودينمو الجهراء",
  ],
  alternates: {
    canonical: `${BASE_URL}/garage-jahra`,
  },
  openGraph: {
    title: "كراج متنقل الجهراء",
    description:
      "اتصل بأسرع كراج متنقل في الجهراء لخدمة بنشر، تبديل بطاريات، فحص كمبيوتر، وتبديل سلف ودينمو على مدار الساعة.",
    url: `${BASE_URL}/garage-jahra`,
    locale: "ar_KW",
  },
};

export default function GarageJahraPage() {
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
              كراج متنقل الجهراء | بنشر وتصليح سيارات خدمة طريق 24 ساعة
            </h1>
            <p className="text-base text-kuwait-black/70">
              نوفر أسرع كراج متنقل في الجهراء لخدمتكم في المطلاع، جابر الأحمد، وسعد العبدالله. فريق ميكانيكي متخصص يصل إليكم خلال دقائق مع تجهيزات إنقاذ الطريق الكاملة.
            </p>
            <p className="text-base text-kuwait-black/70">
              متخصصون في تبديل بطاريات، تصليح تواير (بنشر)، فحص كمبيوتر متقدم، وتبديل سلف ودينمو لجميع أنواع السيارات على مدار الساعة لضمان عودة مركبتكم للطريق بسرعة وأمان.
            </p>
            <ul className="space-y-3 text-sm text-kuwait-black/80">
              {serviceHighlights.map((item) => (
                <li key={item} className="flex items-center justify-end gap-3">
                  <span>{item}</span>
                  <CheckCircle2 className="h-5 w-5 text-kuwait-red" aria-hidden="true" />
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <LeadTrackedLink
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`أحتاج خدمة كراج متنقل الجهراء من ${OWNER_NAME_AR}.`)}`}
                className="flex items-center justify-center gap-2 rounded-full border border-kuwait-red/40 px-5 py-3 text-sm font-semibold text-kuwait-red transition hover:bg-kuwait-red/10"
                target="_blank"
                rel="noopener noreferrer"
                channel="whatsapp"
                source="garage-jahra-whatsapp"
              >
                <ArrowLeftCircle className="h-5 w-5" aria-hidden="true" />
                تواصل واتساب
              </LeadTrackedLink>
              <LeadTrackedLink
                href={`tel:${GARAGE_PHONE_FULL}`}
                className="flex items-center justify-center gap-2 rounded-full bg-kuwait-red px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-red-700"
                channel="phone"
                source="garage-jahra-call"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                <span>اتصل بـ كراج الجهراء الآن: {GARAGE_PHONE}</span>
              </LeadTrackedLink>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <figure className="relative h-64 w-full overflow-hidden rounded-3xl border border-kuwait-red/20 bg-white shadow-lg">
              <Image
                src="/images/car-service-hero.jpg"
                alt="كراج متنقل الجهراء يقدم خدمة بنشر وتصليح سيارات 24 ساعة"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
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
        <h2 className="text-2xl font-semibold text-kuwait-black">خدمة بنشر وتصليح سيارات في الجهراء</h2>
        <p className="text-sm text-kuwait-black/70">
          يقدم كراج متنقل الجهراء فريقًا معتمدًا لتبديل البطاريات والسلف والدينمو بالإضافة إلى فحص الكمبيوتر المتخصص لضمان عودة مركبتك للطريق بسرعة وأمان.
        </p>
        <p className="text-sm text-kuwait-black/70">
          نصل إلى المطلاع، جابر الأحمد، وسعد العبدالله مع معدات متكاملة لتصليح التواير (بنشر) وخدمة الطريق 24 ساعة، مما يجعلنا الخيار الأول لسكان محافظة الجهراء عند حدوث أي عطل مفاجئ.
        </p>
      </section>
    </div>
  );
}
