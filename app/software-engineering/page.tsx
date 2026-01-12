import type { Metadata } from "next";
import Image from "next/image";
import { Cairo, Inter } from "next/font/google";

import JsonLd from "@/components/JsonLd";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo-page",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const WHATSAPP_NUMBER = "963936457500";
const WHATSAPP_MESSAGE = "مرحباً بشمهندس رأفت، أبحث عن استشارة هندسية حول تطوير حلول برمجية وذكاء اصطناعي.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const WHATSAPP_DISPLAY = "00963936457500";

const heroHighlights = [
  {
    ar: "تصميم معماريات رقمية متكاملة للمؤسسات الحكومية والخاصة.",
    en: "Enterprise-scale architectures engineered for public and private sectors.",
  },
  {
    ar: "نمذجة البيانات وتجارب المستخدم لرفع موثوقية المنصات التعليمية.",
    en: "Data-driven learning experiences that elevate platform reliability.",
  },
  {
    ar: "إطلاق الحلول من التحليل حتى النشر مع أطر حوكمة تنفيذية دقيقة.",
    en: "Full-cycle delivery from analysis to launch with disciplined governance.",
  },
];

const aboutContent = {
  ar: "استوديو هندسي تنفيذي يقوده مهندسو معلوماتية بخبرة أكاديمية وعملية في الخليج. نبتكر حلول برمجية متقدمة، منصات تعليمية رقمية، وتكاملات ذكاء اصطناعي موثوقة للمؤسسات الحكومية والقطاع الخاص.",
  en: "An executive technology studio led by senior software engineers with a decade of regional experience. We architect advanced software, multilingual education platforms, and dependable AI integrations for government entities and enterprise groups across the Gulf.",
  pillars: [
    {
      ar: "هندسة تعتمد على البيانات",
      en: "Data-grounded engineering",
    },
    {
      ar: "تجربة مستخدم عالية الدقة",
      en: "Precision user experience",
    },
    {
      ar: "حوكمة تنفيذية مستمرة",
      en: "Continuous executive governance",
    },
  ],
};

const services = [
  {
    ar: "تطوير تطبيقات الويب المتقدمة",
    en: "Advanced Web Applications",
    detailAr: "منهجيات هندسية لصناعة تطبيقات ويب مؤسسية عالية الاعتمادية مع قابلية توسع مستمرة.",
    detailEn: "Resilient enterprise web applications built on scalable, cloud-ready foundations.",
  },
  {
    ar: "بناء منصات تعليمية رقمية",
    en: "Digital Education Platforms",
    detailAr: "تصميم منظومات تعليمية تخدم أكثر من 1000 طالب مع تجارب تعلم متعددة اللغات.",
    detailEn: "Multilingual learning ecosystems powering thousands of students and facilitators.",
  },
  {
    ar: "تحليل الأنظمة: UML, BPMN, ERD",
    en: "System Analysis & Modeling",
    detailAr: "نمذجة دقيقة للعمليات والبيانات لضمان وضوح الرحلة الهندسية قبل التنفيذ.",
    detailEn: "Executable system blueprints using UML, BPMN, and ERD for transparent delivery.",
  },
  {
    ar: "تطوير الواجهات الخلفية وواجهات API",
    en: "Backend & API Engineering",
    detailAr: "طبقات خوادم مؤمنة مع واجهات API متينة تدعم الأداء العالي وتدفق البيانات المستمر.",
    detailEn: "Secure service layers and APIs engineered for high throughput and interoperability.",
  },
  {
    ar: "استشارات الذكاء الاصطناعي والأمن السيبراني",
    en: "AI & Cybersecurity Consulting",
    detailAr: "استراتيجيات متقدمة لحوكمة البيانات وتفعيل نماذج الذكاء الاصطناعي ضمن الأنظمة الحرجة.",
    detailEn: "Strategic AI enablement and cybersecurity governance across critical systems.",
  },
];

const featuredProject = {
  title: "أكاديمية المعرفة الافتراضية | Virtual Knowledge Academy",
  summary:
    "منصة تعليمية متكاملة تدير برامج تدريبية واسعة النطاق مع مساعد ذكاء اصطناعي مدمج لدعم المتعلمين.",
  highlights: [
    { label: "10,000+", description: "طالب" },
    { label: "500+", description: "دورة تدريبية" },
    { label: "AI", description: "Integrated Assistant" },
  ],
  primaryImage: "/WhatsApp Image 2026-01-12 at 6.09.07 PM.jpeg",
  featureImage: "/WhatsApp Image 2026-01-12 at 6.08.26 PM.jpeg",
};

const fadeInBaseClass = "motion-safe:opacity-0 motion-safe:animate-[executive-fade-in_0.9s_ease_forwards]";

const caseStudies = [
  {
    ar: "نظام إدارة التدريب | Progress Analytics",
    en: "Training Management System",
    description:
      "منصة تحليل تقدم التدريب للمؤسسات، تربط الأداء بالتقارير التنفيذية في الزمن الحقيقي.",
    descriptionEn: "Executive dashboards aligning workforce training performance with real-time analytics.",
    image: "/WhatsApp Image 2026-01-12 at 6.57.45 PM.jpeg",
  },
  {
    ar: "نظام إدارة المحتوى | Content Architecture",
    en: "Custom CMS",
    description:
      "بنية محتوى موزعة تدعم سير عمل متعدد اللغات وأتمتة لسيناريوهات النشر.",
    descriptionEn: "Distributed content operations with multilingual workflows and automated publishing.",
    image: "/WhatsApp Image 2026-01-12 at 6.58.20 PM.jpeg",
  },
  {
    ar: "تجربة التعلم التفاعلية",
    en: "Interactive Learning Experience",
    description:
      "بيئة تعلم معززة بالذكاء الاصطناعي تربط المحاكاة التفاعلية بمؤشرات الأداء الخاصة بالمتعلمين.",
    descriptionEn: "Immersive AI-supported learning journeys combining simulation with learner KPIs.",
    image: "/WhatsApp Image 2026-01-12 at 6.58.47 PM.jpeg",
  },
];

const teamMembers = [
  {
    name: "المهندس رأفت منصور الشنور",
    roleAr: "المؤسس والقائد التقني",
    roleEn: "Founder & Lead Software Engineer",
    summary:
      "مهندس برمجيات وباحث تقني متخصص في بناء البنى التحتية للأنظمة المعقدة والذكاء الاصطناعي. يجمع بين الخبرة الأكاديمية والعملية لتصميم حلول برمجية مبتكرة وعالية الأداء.",
    summaryEn:
      "Software architect and AI researcher crafting high-reliability infrastructures for complex institutions.",
    image: "/rafat-2.jpg",
  },
  {
    name: "المهندس محمد مروان عواجي الحسن",
    roleAr: "شريك عمل ومهندس برمجيات",
    roleEn: "Software Engineer & Technical Partner",
    summary:
      "شريك تقني ومهندس برمجيات خبير في تطوير الأنظمة الخلفية (Backend) وإدارة البيانات الضخمة، متخصص في بناء أنظمة سحابية مستقرة وقابلة للتوسع.",
    summaryEn:
      "Technical partner focused on backend scalability, data engineering, and resilient cloud delivery.",
    image: "/mohammad-alhasan.jpg",
  },
];

const achievements = [
  {
    title: "بحث علمي",
    detailAr: "“Directed Scheduling in Parallel Programming” – 2023",
    detailEn: "Research in Parallel Programming",
    description:
      "منهجية توجيه عمليات المعالجة المتوازية لتحسين الأداء وزمن الاستجابة للتطبيقات الحساسة.",
    descriptionEn:
      "Directed scheduling framework enhancing responsiveness across critical parallel workloads.",
  },
  {
    title: "دراسة هندسية",
    detailAr: "“Design of an Integrated Educational Academy” – 2024",
    detailEn: "Integrated Educational Academy Study",
    description:
      "تصميم شامل لمنصة تعليمية رقمية تربط بين إدارة المحتوى، التقييم، ودعم التحول الرقمي للمؤسسات التعليمية.",
    descriptionEn:
      "Comprehensive digital academy blueprint unifying content operations, assessment, and analytics.",
  },
];

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "المهندس رأفت منصور الشنور",
  image: "https://kuwait-service.com/rafat-2.jpg",
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
    alumniOf: " هندسة المعلوماتية",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+963936457500",
    availableLanguage: ["ar", "en"],
  },
};

export const metadata: Metadata = {
  title: "استوديو هندسة برمجيات وحلول ذكاء اصطناعي | م. رأفت منصور الشنور",
  description:
    "استوديو هندسي تنفيذي يقدم حلول برمجية متقدمة، منصات تعليمية رقمية، واستشارات ذكاء اصطناعي للمؤسسات في الخليج بقيادة م. رأفت منصور الشنور.",
  alternates: {
    canonical: "https://kuwait-service.com/software-engineering",
  },
  openGraph: {
    title: "استوديو هندسة برمجيات وحلول ذكاء اصطناعي | م. رأفت منصور الشنور",
    description:
      "حلول برمجية تنفيذية، منصات تعليمية رقمية، واستشارات ذكاء اصطناعي موجهة للمؤسسات في الخليج بقيادة فريق هندسي متخصص.",
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
      className={`${cairo.className} ${cairo.variable} ${inter.variable} relative min-h-screen overflow-hidden bg-[#020617] text-slate-100 [&_.header-call-cta]:!hidden`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,27,105,0.28),_transparent_60%)]" />
        <div className="absolute -left-1/2 top-1/3 h-[480px] w-[820px] rotate-[-18deg] bg-[radial-gradient(circle,_rgba(37,99,235,0.18),_transparent_70%)] blur-3xl" />
        <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full border border-slate-800/40" />
        <div className="absolute bottom-0 left-1/4 h-[240px] w-[640px] bg-[radial-gradient(circle,_rgba(15,23,42,0.45),_transparent_70%)]" />
      </div>

      <style>{`
        @keyframes executive-fade-in {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <JsonLd data={professionalServiceSchema} />

      <main
        dir="rtl"
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-28 px-6 pb-36 pt-24 sm:px-10 lg:px-16"
      >
        <section
          className={`grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] ${fadeInBaseClass}`}
          aria-labelledby="hero"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="space-y-12 text-right">
            <div className="space-y-6">
              <span
                className={`${inter.className} inline-flex items-center justify-center rounded-full border border-slate-800/70 bg-white/5 px-5 py-1 text-[10px] uppercase tracking-[0.5em] text-slate-300/90`}
              >
                Executive Tech Studio
              </span>
              <div className="space-y-4">
                <h1
                  id="hero"
                  className="text-4xl font-extrabold leading-[1.4] text-white md:text-[2.75rem]"
                >
                  استوديو هندسة برمجيات وحلول ذكاء اصطناعي | Software Engineering & AI Solutions Studio
                </h1>
                <p className="text-lg leading-9 text-slate-200 md:text-xl">
                  نقدّم حلولًا برمجية متقدمة، منصات تعليمية رقمية، وتطبيقات ويب عالية الجودة، مصممة خصيصًا لتلبية
                  احتياجات المؤسسات في الخليج.
                </p>
                <p
                  dir="ltr"
                  className={`${inter.className} text-sm leading-7 text-slate-400 md:text-base md:leading-8`}
                >
                  We deliver high-impact software platforms, executive-grade digital academies, and AI-enabled web
                  applications tailored to Gulf enterprises.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#2563EB]/40 bg-[#2563EB] px-8 py-3 text-sm font-semibold text-white shadow-[0_28px_60px_rgba(37,99,235,0.25)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_32px_70px_rgba(37,99,235,0.28)]"
                  aria-label="استشارة هندسية مجانية عبر واتساب"
                >
                  <span>استشارة هندسية مجانية</span>
                  <span className={`${inter.className} text-xs uppercase tracking-[0.45em] text-white/80`}>
                    Free Consultation
                  </span>
                </a>
                <a
                  href="#featured-project"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-700/70 px-8 py-3 text-sm font-semibold text-white/90 transition-colors duration-300 hover:border-white/60 hover:text-white"
                >
                  عرض المشاريع المميزة
                  <span className={`${inter.className} text-xs uppercase tracking-[0.35em] text-slate-400`}>Featured Work</span>
                </a>
              </div>
              <p className="text-sm text-slate-400">
                WhatsApp <span className="mx-1 text-slate-700">|</span>
                <span dir="ltr" className={`${inter.className} text-slate-300`}>
                  {WHATSAPP_DISPLAY}
                </span>
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              {heroHighlights.map((item) => (
                <li
                  key={item.en}
                  className="flex flex-col items-end gap-2 rounded-[26px] border border-slate-800/70 bg-white/[0.05] px-5 py-4 backdrop-blur-xl"
                >
                  <p className="text-base leading-7 text-slate-100">{item.ar}</p>
                  <p
                    dir="ltr"
                    className={`${inter.className} w-full text-xs uppercase tracking-[0.4em] text-slate-400 text-left`}
                  >
                    {item.en}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <div className="absolute inset-0 scale-110 rounded-[40px] border border-slate-800/60 bg-[radial-gradient(circle,_rgba(37,99,235,0.2),_transparent_70%)] blur-3xl" />
            <div className="relative rounded-[40px] border border-slate-800/70 bg-white/5 p-6 backdrop-blur-2xl">
              <div
                className="overflow-hidden border border-slate-700/60 shadow-[0_28px_80px_rgba(15,23,42,0.45)]"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
              >
                <Image
                  src="/rafat-2.jpg"
                  alt="المهندس رأفت منصور الشنور"
                  width={640}
                  height={720}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about"
          className={`space-y-8 border-t border-slate-800/60 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.18s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="about" className="text-3xl font-bold text-white">
              من نحن | About
            </h2>
            <p className="text-base leading-8 text-slate-200">{aboutContent.ar}</p>
            <p
              dir="ltr"
              className={`${inter.className} text-sm leading-7 text-slate-400 md:text-base md:leading-8 text-left`}
            >
              {aboutContent.en}
            </p>
          </header>
          <div className="flex flex-wrap justify-end gap-4">
            {aboutContent.pillars.map((pillar) => (
              <span
                key={pillar.en}
                className="flex flex-col items-end gap-1 rounded-full border border-slate-800/70 bg-white/[0.05] px-5 py-3 text-sm text-slate-100 backdrop-blur-xl"
              >
                <span>{pillar.ar}</span>
                <span
                  dir="ltr"
                  className={`${inter.className} text-[10px] uppercase tracking-[0.45em] text-slate-400`}
                >
                  {pillar.en}
                </span>
              </span>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="services"
          className={`space-y-10 border-t border-slate-800/60 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.28s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="services" className="text-3xl font-bold text-white">
              الخدمات الهندسية | Engineering Services
            </h2>
            <p className="text-base text-slate-300">
              باقات تنفيذية تغطي التحليل، التصميم، والتطبيق مع ضمان حوكمة هندسية كاملة عبر كل مرحلة.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.en}
                className="flex h-full flex-col gap-4 rounded-[28px] border border-slate-800/70 bg-white/[0.05] px-7 py-8 backdrop-blur-xl transition duration-300 hover:border-slate-600/70 hover:bg-white/[0.08]"
              >
                <div className="flex flex-col items-end gap-1">
                  <h3 className="text-xl font-semibold text-white">{service.ar}</h3>
                  <span
                    dir="ltr"
                    className={`${inter.className} w-full text-sm font-medium text-slate-400 text-left`}
                  >
                    {service.en}
                  </span>
                </div>
                <p className="text-sm leading-7 text-slate-300">{service.detailAr}</p>
                <p
                  dir="ltr"
                  className={`${inter.className} text-xs leading-6 text-slate-400`}
                >
                  {service.detailEn}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="featured-project"
          aria-labelledby="featured-title"
          className={`space-y-10 border-t border-slate-800/60 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.36s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="featured-title" className="text-3xl font-bold text-white">
              المشروع التنفيذي المميز | Featured Project
            </h2>
            <p className="text-base text-slate-300">
              أكاديمية معرفة افتراضية تخدم آلاف المتعلمين مع تكامل ذكاء اصطناعي مساعد ومسارات تعلم مهيكلة.
            </p>
          </header>
          <article className="grid gap-8 rounded-[36px] border border-slate-800/60 bg-white/[0.05] p-8 backdrop-blur-xl lg:grid-cols-[1.35fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-800/60 bg-black/40">
              <Image
                src={featuredProject.primaryImage}
                alt={featuredProject.title}
                width={1080}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col items-end gap-6 text-right">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white">{featuredProject.title}</h3>
                <p className="text-sm leading-7 text-slate-200">{featuredProject.summary}</p>
                <p
                  dir="ltr"
                  className={`${inter.className} text-xs leading-6 text-slate-400`}
                >
                  Integrated virtual academy delivering structured digital programs, adaptive analytics, and an
                  AI-enabled mentor experience for learners at scale.
                </p>
              </div>
              <div className="flex flex-wrap justify-end gap-3">
                {featuredProject.highlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="flex flex-col items-end gap-1 rounded-2xl border border-slate-800/60 bg-[#0f172a]/70 px-4 py-3"
                  >
                    <span className="text-lg font-semibold text-white">{highlight.label}</span>
                    <span className={`${inter.className} text-[11px] uppercase tracking-[0.35em] text-slate-400`}>
                      {highlight.description}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative w-full overflow-hidden rounded-[24px] border border-slate-800/60 bg-black/40">
                <Image
                  src={featuredProject.featureImage}
                  alt="ميزات المنصة"
                  width={720}
                  height={480}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        </section>

        <section
          aria-labelledby="projects"
          className={`space-y-10 border-t border-slate-800/60 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.46s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="projects" className="text-3xl font-bold text-white">
              المشاريع ودراسات الحالة | Projects & Case Studies
            </h2>
            <p className="text-base text-slate-300">
              حلول تنفيذية مصممة لإعادة تشكيل الخبرات التعليمية والتشغيلية عبر مؤسسات الخليج.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.en}
                className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800/60 bg-white/[0.05] backdrop-blur-xl"
              >
                <div className="overflow-hidden border-b border-slate-800/60">
                  <Image
                    src={study.image}
                    alt={study.en}
                    width={640}
                    height={420}
                    className="h-48 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-6 py-6 text-right">
                  <h3 className="text-lg font-semibold text-white">{study.ar}</h3>
                  <p className="text-sm leading-7 text-slate-300">{study.description}</p>
                  <p
                    dir="ltr"
                    className={`${inter.className} text-xs leading-6 text-slate-400`}
                  >
                    {study.descriptionEn}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="team"
          className={`space-y-10 border-t border-slate-800/60 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.56s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="team" className="text-3xl font-bold text-white">
              الفريق الهندسي | Engineering Team
            </h2>
            <p className="text-base text-slate-300">
              قيادة تقنية تجمع بين البحث الأكاديمي والتطبيق العملي في بيئات مؤسسية معقدة.
            </p>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="flex flex-col gap-6 rounded-[30px] border border-slate-800/60 bg-white/[0.05] px-7 py-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-end gap-5">
                  <div className="space-y-2 text-right">
                    <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-slate-300">{member.roleAr}</p>
                    <p className={`${inter.className} text-xs uppercase tracking-[0.45em] text-slate-400`}>
                      {member.roleEn}
                    </p>
                  </div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="h-28 w-28 rounded-[26px] border border-slate-800/60 object-cover shadow-[0_18px_45px_rgba(15,23,42,0.5)]"
                  />
                </div>
                <p className="text-sm leading-7 text-slate-300">{member.summary}</p>
                <p
                  dir="ltr"
                  className={`${inter.className} text-xs leading-6 text-slate-400`}
                >
                  {member.summaryEn}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="achievements"
          className={`space-y-10 border-t border-slate-800/60 pt-16 pb-12 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.66s" }}
        >
          <header className="space-y-4 text-right">
            <h2 id="achievements" className="text-3xl font-bold text-white">
              الإنجازات العلمية | Scientific Achievements
            </h2>
            <p className="text-base text-slate-300">
              أبحاث ودراسات تدعم بناء حلول متقنة وعالية الاعتمادية.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <article
                key={item.detailEn}
                className="flex h-full flex-col gap-4 rounded-[26px] border border-slate-800/60 bg-white/[0.05] px-6 py-7 backdrop-blur-xl"
              >
                <span className="text-sm font-semibold text-white">{item.title}</span>
                <span className="text-sm text-slate-300">{item.detailAr}</span>
                <span className={`${inter.className} text-xs uppercase tracking-[0.35em] text-slate-400`}>
                  {item.detailEn}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item.description}</p>
                <p
                  dir="ltr"
                  className={`${inter.className} text-xs leading-6 text-slate-400`}
                >
                  {item.descriptionEn}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
