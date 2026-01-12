import type { Metadata } from "next";
import Image from "next/image";

import JsonLd from "@/components/JsonLd";

const WHATSAPP_NUMBER = "963936457500";
const WHATSAPP_MESSAGE = "مرحباً بشمهندس رأفت، أريد حجز استشارة برمجية بخصوص مشروع...";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const WHATSAPP_DISPLAY = "+963 936 457 500";
const DIRECT_CALL_KW = "51222091";
const DIRECT_CALL_DISPLAY = "+965 5122 2091";

const heroHighlights = [
  "دمج حلول الذكاء الاصطناعي مع بنية تحتية سحابية آمنة",
  "تصميم معماريات برمجية متكاملة تلائم نمو الشركات",
  "تحقيق نتائج SEO متقدمة في الخليج خلال أقل من 90 يوم",
];

const services = [
  "تطوير منصات الويب المتكاملة (SaaS).",
  "بناء أنظمة الذكاء الاصطناعي وربطها بالـ API (مثل Gemini).",
  "تحليل وتصميم الأنظمة (Software Architecture).",
  "استراتيجيات الـ SEO المتقدمة للشركات.",
];

const projects = [
  {
    title: "نظام النظارات الذكية (Smart Glasses)",
    description: "دمج ESP32-S3 مع Gemini AI لتمكين الواقع المعزز والمعلومات اللحظية للفرق الميدانية.",
  },
  {
    title: "منصة المعرفة الافتراضية",
    description: "خدمة تعليمية تخدم أكثر من 1000 طالب في هندسة المعلوماتية مع محتوى تفاعلي متعدد اللغات.",
  },
  {
    title: "نظام خدمات الكويت المتكاملة",
    description: "منظومة سيو وتقنية متكاملة عززت الزيارات العضوية بنسبة 240% خلال ثلاثة أشهر.",
  },
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "المهندس رأفت منصور الشنور",
  image: "https://kuwait-service.com/rafat-1.jpg",
  areaServed: ["SA", "AE", "KW"],
  knowsAbout: ["AI Systems", "Software Engineering", "AR", "SEO", "Web Development"],
  url: "https://kuwait-service.com/software-engineering",
  telephone: "+96551222091",
  sameAs: [
    "https://www.linkedin.com/in/rafat-ahmad",
  ],
  serviceOffer: {
    "@type": "Offer",
    description: "خدمات هندسة البرمجيات، الذكاء الاصطناعي، واستراتيجيات النمو الرقمي في منطقة الخليج.",
  },
  provider: {
    "@type": "Person",
    name: "م. رأفت منصور الشنور",
    jobTitle: "مهندس برمجيات وخبير حلول ذكاء اصطناعي",
    alumniOf: "جامعة حلب - هندسة المعلوماتية",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+963936457500",
    availableLanguage: ["ar", "en"],
  },
};

export const metadata: Metadata = {
  title: "مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور الشنور",
  description:
    "م. رأفت منصور الشنور يقدم حلول ذكاء اصطناعي، تطوير منصات SaaS، وتحسين محركات البحث للشركات في السعودية، الإمارات، والكويت.",
  alternates: {
    canonical: "https://kuwait-service.com/software-engineering",
  },
  openGraph: {
    title: "مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور الشنور",
    description:
      "استشارات برمجية متقدمة، دمج تقنيات الذكاء الاصطناعي، واستراتيجيات SEO عالية التأثير في الخليج.",
    url: "https://kuwait-service.com/software-engineering",
    locale: "ar_SA",
    images: [
      {
        url: "https://kuwait-service.com/rafat-3.jpg",
        width: 1200,
        height: 630,
        alt: "المهندس رأفت منصور الشنور - حلول ذكاء اصطناعي وبرمجيات متكاملة",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SoftwareEngineeringPage() {
  return (
    <div
      data-page="software-engineering"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#101625] via-[#0d1422] to-[#0b111d] text-white"
    >
      <JsonLd data={professionalServiceSchema} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-5 pb-28 pt-24 md:px-12">
        <section className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-10 text-right">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور الشنور.
              </h1>
              <p className="text-sm font-medium text-cyan-200/80">
                رائد ابتكار في أنظمة الذكاء الاصطناعي والواقع المعزز - مطور مشروع النظارات الذكية
              </p>
              <p className="text-lg text-white/75 md:text-xl">
                متخصص في تطوير الأنظمة الذكية، الحلول البرمجية للمؤسسات، وتحسين محركات البحث في السعودية، الإمارات، والكويت.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-white/70 sm:grid-cols-1">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center justify-end gap-3 rounded-2xl border border-white/10 bg-white/8 px-6 py-4 text-right"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-cyan-400 via-emerald-300 to-cyan-400 px-7 py-3 text-sm font-semibold text-[#041021] shadow-[0_18px_36px_rgba(11,168,255,0.28)] transition-all duration-500 hover:translate-x-1 hover:shadow-[0_20px_40px_rgba(11,168,255,0.35)]"
                aria-label="حجز استشارة برمجية عبر واتساب"
              >
                <span>استشارة واتساب برمجية</span>
                <span className="-scale-x-100 transition-transform duration-500 group-hover:translate-x-1">➜</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <div className="grid gap-4">
                <Image
                  src="/rafat-3.jpg"
                  alt="المهندس رأفت منصور الشنور خلال عرض مشروع"
                  width={720}
                  height={480}
                  className="h-64 w-full rounded-[28px] object-cover transition-transform duration-700 ease-out hover:scale-105"
                  priority
                />
                <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/6 p-6 text-right">
                  <p className="text-sm text-white/70">
                    أنظمة الذكاء الاصطناعي المدمجة مع حساسات الواقع المعزز تمنح فرق العمل قرارات أسرع بنسبة 45%.
                  </p>
                  <div className="flex items-center justify-end gap-2 text-xs text-white/60">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    <span>Live Prototype Feed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="why-us" className="space-y-10">
          <header className="space-y-3 text-right">
            <h2 id="why-us" className="text-3xl font-semibold text-white">
              لماذا تختارنا؟
            </h2>
            <p className="text-white/60">
              خبرات رقمية متكاملة تجمع بين العمق الهندسي والرؤية الاستراتيجية في أسواق الخليج.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "خبرة خليجية",
                description: "فهم عميق لمتطلبات السوق في السعودية والكويت مع حلول تواكب سرعات النمو التقني.",
              },
              {
                title: "جودة أكاديمية",
                description: "هندسة معلوماتية مدعومة بأبحاث علمية منشورة في مجال الجدولة الموجهة (Directed Scheduling 2023).",
              },
              {
                title: "حلول ذكية",
                description: "دمج تقنيات AI و AR لرفع كفاءة الأعمال من الاكتشاف وحتى التشغيل الميداني.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,198,255,0.22),_transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="services" className="space-y-8">
          <header className="space-y-3 text-right">
            <h2 id="services" className="text-3xl font-semibold text-white">
              خدماتي الهندسية
            </h2>
            <p className="text-white/60">
              حلول مصممة بدقة للشركات التي تبحث عن استفادة ناجزة من الذكاء الاصطناعي والتوسع الرقمي.
            </p>
          </header>
          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/6 p-9 backdrop-blur-md">
            {services.map((service) => (
              <div key={service} className="flex items-center justify-end gap-3 text-right text-base text-white/70">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="team" className="space-y-10">
          <header className="space-y-4 text-right">
            <h2 id="team" className="text-3xl font-semibold text-white">
              المهندسون
            </h2>
            <p className="text-white/60">
              فريق هندسي صغير بقدرات كبيرة، يجمع بين الرؤية الأكاديمية والتنفيذ التشغيلي السريع.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/8 p-9 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,198,255,0.12),_transparent_65%)]" aria-hidden="true" />
              <div className="relative flex flex-col gap-7 text-right">
                <div className="flex items-center justify-end gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-white">المهندس رأفت منصور الشنور</h3>
                    <p className="text-sm text-cyan-300">Founder & Lead Engineer</p>
                  </div>
                  <Image
                    src="/rafat-1.jpg"
                    alt="المهندس رأفت منصور الشنور"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-3xl border border-white/15 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-sm leading-8 text-white/75">
                  متخصص في هندسة المنصات السحابية والذكاء الاصطناعي التطبيقي، قمت بقيادة مشاريع دمج Gemini AI مع نظارات ذكية لتدريب الفرق الميدانية، وأشرفت على تطوير منظومات SaaS لقطاعات التعليم والخدمات.
                </p>
                <div className="grid gap-2 text-xs text-white/65">
                  <span>Dip Tech • Smart Glasses System Lead • Directed Scheduling 2023</span>
                  <span>جامعة حلب - هندسة المعلوماتية (تخصص برمجيات)</span>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/7 p-9 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(123,31,162,0.16),_transparent_70%)]" aria-hidden="true" />
              <div className="relative flex flex-col gap-7 text-right">
                <div className="flex items-center justify-end gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-white">المهندس محمد مروان عواجي الحسن</h3>
                    <p className="text-sm text-fuchsia-300">Software Engineer</p>
                  </div>
                  <Image
                    src="/mohammad-alhasan.jpg"
                    alt="المهندس محمد مروان عواجي الحسن"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-3xl border border-white/15 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-sm leading-7 text-white/70">
                  متخصص في تطوير واجهات الويب عالية الأداء، بناء واجهات تحكم لمشاريع إنترنت الأشياء، وضبط تكامل الـ API مع أنظمة الذكاء الاصطناعي لتحسين تجربة المستخدم النهائي.
                </p>
                <div className="grid gap-2 text-xs text-white/62">
                  <span>Full-stack Engineer • API Integrations • XR Interfaces</span>
                  <span>مساهم رئيسي في تطبيقات الواقع المعزز للقطاع الخدمي</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" aria-labelledby="featured-projects" className="space-y-8">
          <header className="space-y-3 text-right">
            <h2 id="featured-projects" className="text-3xl font-semibold text-white">
              معرض الأعمال
            </h2>
            <p className="text-white/60">
              حلول فعلية تم تنفيذها لقطاعات التعليم، الخدمات، والتقنية مع نتائج قياس واضحة.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group h-full rounded-3xl border border-white/12 bg-white/7 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/60"
              >
                <div className="flex h-full flex-col gap-4 text-right">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-white/70">{project.description}</p>
                  <div className="mt-auto flex items-center justify-end gap-2 text-xs text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>CASE STUDY</span>
                    <span className="-scale-x-100">➜</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="credentials" className="space-y-6">
          <header className="space-y-3 text-right">
            <h2 id="credentials" className="text-3xl font-semibold text-white">
              الاعتمادات العلمية
            </h2>
            <p className="text-white/60">
              استناد معرفي يضمن توازناً بين البحث الأكاديمي والتنفيذ الصناعي.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/12 bg-white/7 p-7 text-right text-sm text-white/72">
              <h3 className="text-lg font-semibold text-white">بحث علمي: Directed Scheduling 2023</h3>
              <p className="mt-3 leading-7">
                تطوير إطار جدولة موجهة للأحمال الحاسوبية الثقيلة، وتحسين الأداء بنسبة 27% مقارنة بالمنهجيات التقليدية.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/12 bg-white/8 p-6 text-right text-sm text-white/70">
              <h3 className="text-lg font-semibold text-white">شهادة بكالوريوس هندسة المعلوماتية</h3>
              <p className="mt-3 leading-7">
                تخصص برمجيات - جامعة حلب، التركيز على الأنظمة الذكية التي تدعم التحول الرقمي للمؤسسات الخليجية.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="testimonials" className="space-y-7">
          <header className="space-y-3 text-right">
            <h2 id="testimonials" className="text-3xl font-semibold text-white">
              قالوا عنا
            </h2>
          </header>
          <blockquote className="rounded-[30px] border border-white/12 bg-white/7 p-8 text-right text-base leading-8 text-white/72">
            <p>"دقة في التحليل وسرعة في التنفيذ، م. رأفت قدم لنا حلولاً تقنية فاقت التوقعات."</p>
            <footer className="mt-4 text-sm text-cyan-300">عميل - شركة تقنية بالكويت</footer>
          </blockquote>
        </section>

        <section aria-labelledby="contact" className="rounded-[36px] border border-white/15 bg-gradient-to-r from-white/10 via-white/8 to-transparent p-10 text-right backdrop-blur-xl">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h2 id="contact" className="text-3xl font-semibold text-white">
                تواصل مباشر
              </h2>
              <p className="text-white/60">
                اختر القناة الأنسب لك، وسنرسل لك خارطة طريق تقنية خلال 48 ساعة.
              </p>
            </div>
            <div className="flex flex-col items-end gap-4 text-white/70 md:flex-row md:items-center md:justify-end">
              <div className="flex flex-col items-end text-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">WhatsApp</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white"
                  dir="ltr"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="hidden h-12 w-px bg-white/15 md:block" aria-hidden="true" />
              <div className="flex flex-col items-end text-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Direct Call (KW)</span>
                <a
                  href={`tel:${DIRECT_CALL_KW}`}
                  className="text-lg font-semibold text-white"
                  dir="ltr"
                >
                  {DIRECT_CALL_DISPLAY}
                </a>
              </div>
              <div className="hidden h-12 w-px bg-white/15 md:block" aria-hidden="true" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-[#040314] transition hover:bg-white"
              >
                <span>استشارة مجانية لمدة 15 دقيقة</span>
                <span className="-scale-x-100 transition-transform group-hover:translate-x-1">➜</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        body:has(main [data-page="software-engineering"]) .header-call-cta {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
