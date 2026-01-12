import type { Metadata } from "next";
import Image from "next/image";

import JsonLd from "@/components/JsonLd";

const WHATSAPP_NUMBER = "963936457500";
const WHATSAPP_MESSAGE = "مرحباً بشمهندس رأفت، أريد حجز استشارة برمجية بخصوص مشروع...";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const DIRECT_CALL_KW = "51222091";

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
  name: "المهندس رأفت منصور أحمد",
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
    name: "م. رأفت منصور أحمد",
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
  title: "مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور أحمد",
  description:
    "م. رأفت منصور أحمد يقدم حلول ذكاء اصطناعي، تطوير منصات SaaS، وتحسين محركات البحث للشركات في السعودية، الإمارات، والكويت.",
  alternates: {
    canonical: "https://kuwait-service.com/software-engineering",
  },
  openGraph: {
    title: "مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور أحمد",
    description:
      "استشارات برمجية متقدمة، دمج تقنيات الذكاء الاصطناعي، واستراتيجيات SEO عالية التأثير في الخليج.",
    url: "https://kuwait-service.com/software-engineering",
    locale: "ar_SA",
    images: [
      {
        url: "https://kuwait-service.com/rafat-3.jpg",
        width: 1200,
        height: 630,
        alt: "المهندس رأفت منصور أحمد - حلول ذكاء اصطناعي وبرمجيات متكاملة",
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
    <div className="relative overflow-hidden bg-[#040314] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute -top-20 left-1/2 h-[580px] w-[580px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,198,255,0.35),_transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,_rgba(123,31,162,0.4),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%,rgba(255,255,255,0.04))]" />
      </div>

      <JsonLd data={professionalServiceSchema} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-24 md:px-8">
        <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-8 text-right">
            <span className="inline-flex items-center justify-end gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.35em] text-white/70">
              CYBERPEDIA MODE
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                مهندس برمجيات وخبير حلول ذكاء اصطناعي | م. رأفت منصور أحمد.
              </h1>
              <p className="text-lg text-white/70 md:text-xl">
                متخصص في تطوير الأنظمة الذكية، الحلول البرمجية للمؤسسات، وتحسين محركات البحث في السعودية، الإمارات، والكويت.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-white/70 sm:grid-cols-1">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center justify-end gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#040314] shadow-[0_20px_45px_rgba(0,205,255,0.35)] transition hover:scale-105 hover:bg-cyan-400"
              >
                <span>احجز استشارة مجانية</span>
                <span className="-scale-x-100 transition-transform group-hover:translate-x-1">➜</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                عرض الأعمال
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[32px] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(0,198,255,0.25),transparent_60%)] blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="grid gap-2 p-2">
                <Image
                  src="/rafat-3.jpg"
                  alt="المهندس رأفت منصور أحمد خلال عرض مشروع"
                  width={720}
                  height={480}
                  className="h-64 w-full rounded-3xl object-cover"
                  priority
                />
                <div className="grid gap-2 rounded-3xl bg-white/5 p-4 text-right">
                  <p className="text-sm text-white/60">
                    أنظمة الذكاء الاصطناعي المدمجة مع حساسات الواقع المعزز تمنح فرق العمل قرارات أسرع بنسبة 45%.
                  </p>
                  <div className="flex items-center justify-end gap-2 text-xs text-white/50">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
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
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/10"
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
          <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            {services.map((service) => (
              <div key={service} className="flex items-center justify-end gap-3 text-right text-base text-white/70">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="team" className="space-y-8">
          <header className="space-y-3 text-right">
            <h2 id="team" className="text-3xl font-semibold text-white">
              المهندسون
            </h2>
            <p className="text-white/60">
              فريق هندسي صغير بقدرات كبيرة، يجمع بين الرؤية الأكاديمية والتنفيذ التشغيلي السريع.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,198,255,0.18),_transparent_65%)]" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 text-right">
                <div className="flex items-center justify-end gap-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-semibold text-white">المهندس رأفت منصور أحمد</h3>
                    <p className="text-sm text-cyan-300">Founder & Lead Engineer</p>
                  </div>
                  <Image
                    src="/rafat-1.jpg"
                    alt="المهندس رأفت منصور أحمد"
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-3xl border border-white/20 object-cover"
                  />
                </div>
                <p className="text-sm leading-7 text-white/70">
                  متخصص في هندسة المنصات السحابية والذكاء الاصطناعي التطبيقي، قمت بقيادة مشاريع دمج Gemini AI مع نظارات ذكية لتدريب الفرق الميدانية، وأشرفت على تطوير منظومات SaaS لقطاعات التعليم والخدمات.
                </p>
                <div className="grid gap-2 text-xs text-white/60">
                  <span>Dip Tech • Smart Glasses System Lead • Directed Scheduling 2023</span>
                  <span>جامعة حلب - هندسة المعلوماتية (تخصص برمجيات)</span>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-[32px] border border-white/12 bg-white/8 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(123,31,162,0.2),_transparent_70%)]" aria-hidden="true" />
              <div className="relative flex flex-col gap-6 text-right">
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
                    className="h-24 w-24 rounded-3xl border border-white/20 object-cover"
                  />
                </div>
                <p className="text-sm leading-7 text-white/70">
                  متخصص في تطوير واجهات الويب عالية الأداء، بناء واجهات تحكم لمشاريع إنترنت الأشياء، وضبط تكامل الـ API مع أنظمة الذكاء الاصطناعي لتحسين تجربة المستخدم النهائي.
                </p>
                <div className="grid gap-2 text-xs text-white/60">
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
                className="group h-full rounded-3xl border border-white/12 bg-white/8 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/60"
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
            <div className="rounded-[28px] border border-white/12 bg-white/8 p-6 text-right text-sm text-white/70">
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

        <section aria-labelledby="testimonials" className="space-y-6">
          <header className="space-y-3 text-right">
            <h2 id="testimonials" className="text-3xl font-semibold text-white">
              قالوا عنا
            </h2>
          </header>
          <blockquote className="rounded-[30px] border border-white/12 bg-white/8 p-8 text-right text-base leading-8 text-white/70">
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
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white">
                  00963 9364 57500
                </a>
              </div>
              <div className="hidden h-12 w-px bg-white/15 md:block" aria-hidden="true" />
              <div className="flex flex-col items-end text-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Direct Call (KW)</span>
                <a href={`tel:${DIRECT_CALL_KW}`} className="text-lg font-semibold text-white">
                  {DIRECT_CALL_KW}
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
    </div>
  );
}
