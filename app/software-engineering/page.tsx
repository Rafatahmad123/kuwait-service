import type { Metadata } from "next";
import Image from "next/image";
import { Orbitron } from "next/font/google";

import JsonLd from "@/components/JsonLd";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-orbitron",
});

const WHATSAPP_NUMBER = "963936457500";
const WHATSAPP_MESSAGE = "مرحباً بشمهندس رأفت، أريد حجز استشارة برمجية متقدمة بخصوص تكامل العتاد مع الذكاء الاصطناعي...";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const WHATSAPP_DISPLAY = "00963 936 457 500";
const DIRECT_CALL_KW = "51222091";
const DIRECT_CALL_DISPLAY = "+965 5122 2091";

const heroHighlights = [
  "تكامل العتاد مع نماذج الذكاء الاصطناعي للمهام الميدانية",
  "تصميم Firmware متزامن مع لوحات تحكم Web3D",
  "تحليلات زمن-حقيقي عبر سحابات هجينة آمنة",
];

const services = [
  "تطوير منصات الويب المتكاملة (SaaS).",
  "بناء أنظمة الذكاء الاصطناعي وربطها بالـ API (مثل Gemini).",
  "تحليل وتصميم الأنظمة (Software Architecture).",
  "استراتيجيات الـ SEO المتقدمة للشركات.",
];

const projects = [
  {
    title: "Smart Glasses Command Hub",
    description:
      "منصة قيادة ميدانية تعتمد نظارات ذكية وGemini AI لتغذية معلومات حية للفرق التشغيلية.",
    image: "/rafat-3.jpg",
  },
  {
    title: "ESP32-S3 Edge Analytics",
    description:
      "حل إنترنت أشياء متقدم يدمج ESP32-S3 مع استدلال AI محلي ولوحات مراقبة تفاعلية.",
    image: "/rafat-2.jpg",
  },
  {
    title: "Enterprise AI Integration",
    description:
      "تكامل واجهات نظم ERP مع نماذج ذكاء اصطناعي لتسريع القرارات التشغيلية وتحليل البيانات.",
    image: "/rafat-1.jpg",
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
      className="relative min-h-screen overflow-hidden bg-[#0D0F12] text-white [&_.header-call-cta]:!hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-32 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,108,255,0.28),_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(106,0,255,0.28),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(0,108,255,0.08),transparent_45%,rgba(106,0,255,0.08))]" />
      </div>
      <JsonLd data={professionalServiceSchema} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-24 md:px-14">
        <section className="grid gap-16 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div className="space-y-12 text-right">
            <div className="space-y-6">
              <span className="inline-flex items-center justify-end gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-1 text-xs tracking-[0.45em] text-white/60 backdrop-blur-xl">
                FUTURE-READY ENGINEERING
              </span>
              <h1
                className={`${orbitron.className} bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#8EA8FF] bg-clip-text text-4xl font-semibold uppercase leading-tight text-transparent md:text-5xl`}
              >
                المهندس رأفت منصور الشنور
              </h1>
              <p className="text-base font-medium text-[#7EA6FF]">
                Smart Systems Engineering — Hardware + AI Integration
              </p>
              <p className="text-sm font-medium text-cyan-200/80">
                رائد ابتكار في أنظمة الذكاء الاصطناعي والواقع المعزز - مطور مشروع النظارات الذكية
              </p>
              <p className="text-lg text-white/75 md:text-xl">
                متخصص في بناء الأنظمة المدمجة، تكامل الذكاء الاصطناعي مع الأجهزة، وتصميم البنى البرمجية المتقدمة لأسواق الخليج.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-white/70 sm:grid-cols-1">
              {heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-7 py-4 text-right shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500 hover:border-[#2D8CFF]/60 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(0,108,255,0.16),rgba(106,0,255,0.18))] opacity-0 transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                  <div className="relative flex items-center justify-end gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#2D8CFF]" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-end pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full border border-[#375DFF]/30 bg-[linear-gradient(120deg,_rgba(0,108,255,0.35),_rgba(106,0,255,0.45))] px-9 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(33,73,255,0.35)] transition-all duration-500 hover:shadow-[0_26px_52px_rgba(82,10,255,0.45)]"
                aria-label="حجز استشارة برمجية عبر واتساب"
              >
                <span className="transition-all duration-500 group-hover:tracking-[0.2em]">احجز استشارة واتساب</span>
                <span className="-scale-x-100 text-lg transition-transform duration-500 group-hover:translate-x-1">➜</span>
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 rounded-[48px] bg-[conic-gradient(from_160deg_at_50%_50%,rgba(0,108,255,0.45),rgba(106,0,255,0.25),transparent_70%)] blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[44px] border border-white/10 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
              <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-[#0D1018]/80 p-3">
                <div className="absolute inset-0 animate-pulse-slow rounded-[36px] bg-[radial-gradient(circle_at_top,_rgba(0,108,255,0.15),transparent_65%)]" aria-hidden="true" />
                <Image
                  src="/rafat-3.jpg"
                  alt="المهندس رأفت منصور الشنور خلال عرض مشروع"
                  width={720}
                  height={480}
                  className="relative h-64 w-full animate-float-card rounded-[28px] object-cover transition-transform duration-700 ease-out hover:scale-110"
                  priority
                />
              </div>
              <div className="mt-5 rounded-[30px] border border-white/10 bg-white/10 p-5 text-right backdrop-blur-xl">
                <p className="text-sm text-white/70">
                  منظومة جمع بيانات ميدانية تعتمد نظارات ذكية وحساسات متصلة لرفع القرارات التشغيلية بنسبة 45%.
                </p>
                <div className="mt-3 flex items-center justify-end gap-2 text-xs text-[#7EA6FF]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#2D8CFF]" aria-hidden="true" />
                  <span>Live Prototype Feed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="why-us" className="space-y-10">
          <header className="space-y-3 text-right">
            <h2 id="why-us" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
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
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:border-[#6A00FF]/50"
              >
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,108,255,0.28),_transparent_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="services" className="space-y-8">
          <header className="space-y-3 text-right">
            <h2 id="services" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
              خدماتي الهندسية
            </h2>
            <p className="text-white/60">
              حلول مصممة بدقة للشركات التي تبحث عن استفادة ناجزة من الذكاء الاصطناعي والتوسع الرقمي.
            </p>
          </header>
          <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/10 p-9 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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
            <h2 id="team" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
              المهندسون
            </h2>
            <p className="text-white/60">
              فريق هندسي صغير بقدرات كبيرة، يجمع بين الرؤية الأكاديمية والتنفيذ التشغيلي السريع.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/10 p-9 shadow-[0_22px_55px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,108,255,0.16),_transparent_65%)]" aria-hidden="true" />
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
                    className="h-24 w-24 rounded-3xl border border-white/15 object-cover transition-transform duration-500 hover:scale-110"
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
            <article className="relative overflow-hidden rounded-[36px] border border-white/12 bg-white/10 p-9 shadow-[0_22px_55px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(106,0,255,0.18),_transparent_70%)]" aria-hidden="true" />
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
                    className="h-24 w-24 rounded-3xl border border-white/15 object-cover transition-transform duration-500 hover:scale-110"
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
            <h2 id="featured-projects" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
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
                className="group relative h-full overflow-hidden rounded-[34px] border border-white/12 bg-white/10 p-6 shadow-[0_22px_55px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-700 transform-gpu hover:-translate-y-3 hover:[transform:rotate3d(1,_-1,_0,_7deg)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,108,255,0.15),rgba(106,0,255,0.2))] opacity-0 transition-opacity duration-700 group-hover:opacity-100" aria-hidden="true" />
                <div className="relative flex h-full flex-col gap-4 text-right">
                  <div className="overflow-hidden rounded-[26px] border border-white/15">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={460}
                      height={320}
                      className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-7 text-white/70">{project.description}</p>
                  <div className="mt-auto flex items-center justify-end gap-2 text-xs text-[#8EA8FF] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
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
            <h2 id="credentials" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
              الاعتمادات العلمية
            </h2>
            <p className="text-white/60">
              استناد معرفي يضمن توازناً بين البحث الأكاديمي والتنفيذ الصناعي.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[28px] border border-white/12 bg-white/10 p-7 text-right text-sm text-white/72 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">بحث علمي: Directed Scheduling 2023</h3>
              <p className="mt-3 leading-7">
                تطوير إطار جدولة موجهة للأحمال الحاسوبية الثقيلة، وتحسين الأداء بنسبة 27% مقارنة بالمنهجيات التقليدية.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/12 bg-white/10 p-6 text-right text-sm text-white/70 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white">شهادة بكالوريوس هندسة المعلوماتية</h3>
              <p className="mt-3 leading-7">
                تخصص برمجيات - جامعة حلب، التركيز على الأنظمة الذكية التي تدعم التحول الرقمي للمؤسسات الخليجية.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="testimonials" className="space-y-7">
          <header className="space-y-3 text-right">
            <h2 id="testimonials" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
              قالوا عنا
            </h2>
          </header>
          <blockquote className="rounded-[30px] border border-white/12 bg-white/10 p-8 text-right text-base leading-8 text-white/72 backdrop-blur-xl">
            <p>"دقة في التحليل وسرعة في التنفيذ، م. رأفت قدم لنا حلولاً تقنية فاقت التوقعات."</p>
            <footer className="mt-4 text-sm text-cyan-300">عميل - شركة تقنية بالكويت</footer>
          </blockquote>
        </section>

        <section aria-labelledby="contact" className="rounded-[40px] border border-white/15 bg-white/10 p-10 text-right shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h2 id="contact" className="bg-gradient-to-l from-[#6A00FF] via-[#2D8CFF] to-[#9CC2FF] bg-clip-text text-3xl font-semibold text-transparent">
                تواصل مباشر
              </h2>
              <p className="text-white/60">
                اختر القناة الأنسب لك، وسنرسل لك خارطة طريق تقنية خلال 48 ساعة.
              </p>
            </div>
            <div className="flex flex-col items-end gap-6 text-white/70 md:flex-row md:items-center md:justify-end">
              <div className="flex flex-col items-end text-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-cyan-300">WhatsApp</span>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white"
                >
                  <span dir="ltr">{WHATSAPP_DISPLAY}</span>
                </a>
              </div>
              <div className="hidden h-12 w-px bg-white/15 md:block" aria-hidden="true" />
              <div className="flex flex-col items-end text-sm">
                <span className="text-xs uppercase tracking-[0.4em] text-fuchsia-300">Direct Call (KW)</span>
                <a
                  href={`tel:${DIRECT_CALL_KW}`}
                  className="text-lg font-semibold text-white"
                >
                  <span dir="ltr">{DIRECT_CALL_DISPLAY}</span>
                </a>
              </div>
              <div className="hidden h-12 w-px bg-white/15 md:block" aria-hidden="true" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full border border-[#395CFF]/30 bg-[linear-gradient(110deg,_rgba(0,108,255,0.35),_rgba(106,0,255,0.45))] px-10 py-4 text-base font-semibold text-white shadow-[0_20px_55px_rgba(45,92,255,0.35)] transition-all duration-500 hover:shadow-[0_28px_70px_rgba(106,0,255,0.45)]"
              >
                <span className="transition-all duration-500 group-hover:tracking-[0.18em]">تفعيل الكبسولة الذكية عبر واتساب</span>
                <span className="-scale-x-100 text-lg transition-transform duration-500 group-hover:translate-x-1">➜</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
