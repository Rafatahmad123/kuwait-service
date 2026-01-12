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
const WHATSAPP_DISPLAY = "00963 936 457 500";

const services = [
  {
    ar: "تطوير تطبيقات الويب المتقدمة",
    en: "Web Applications",
    detail: "منهجيات تطوير رشيقة لبناء تطبيقات ويب مؤسسية مرنة وقابلة للتوسع.",
  },
  {
    ar: "بناء منصات تعليمية رقمية",
    en: "Digital Education",
    detail: "منصات تعليمية تخدم أكثر من 1000 طالب مع تجارب تعلم مخصصة ومتعددة اللغات.",
  },
  {
    ar: "تحليل الأنظمة: UML, BPMN, ERD",
    en: "System Analysis",
    detail: "نمذجة دقيقة للعمليات لضمان وضوح المسارات التقنية قبل التنفيذ.",
  },
  {
    ar: "تطوير الواجهات الخلفية وواجهات API",
    en: "Backend & API",
    detail: "طبقات خوادم موثوقة مع تكاملات API مؤمنة تدعم الأداء العالي.",
  },
  {
    ar: "استشارات الذكاء الاصطناعي والأمن السيبراني",
    en: "Tech Consulting",
    detail: "مصمم حلول استراتيجية للذكاء الاصطناعي وحوكمة الأمن السيبراني.",
  },
];

const fadeInBaseClass = "motion-safe:opacity-0 motion-safe:animate-[executive-fade-in_0.9s_ease_forwards]";

const caseStudies = [
  {
    ar: "منصة تعليمية متكاملة (1000+ طالب)",
    en: "Integrated Educational Platform",
    description:
      "منظومة تعليمية مترابطة تشمل المحتوى، التقييم، ولوحات متابعة لحظية لإدارات التدريب.",
    image: "/rafat-2.jpg",
  },
  {
    ar: "نظام إدارة التدريب",
    en: "Training Management System",
    description:
      "حل إدارة عمليات التدريب للمؤسسات، مع تتبع الأداء وإصدار التقارير التنفيذية.",
    image: "/rafat-3.jpg",
  },
  {
    ar: "نظام إدارة المحتوى المخصص",
    en: "Custom CMS",
    description:
      "منصة إدارة محتوى سحابية مع تدفقات نشر متعددة اللغات ودعم لأتمتة SEO.",
    image: "/rafat-1.jpg",
  },
  {
    ar: "منصات تعلم تفاعلية",
    en: "Interactive Learning Platforms",
    description:
      "بيئات تعلم غنية بالمحتوى التفاعلي ومحاكيات التدريب المعززة بالذكاء الاصطناعي.",
    image: "/rafat-3.jpg",
  },
];

const teamMembers = [
  {
    name: "المهندس رأفت منصور الشنور",
    roleAr: "المؤسس والقائد التقني",
    roleEn: "Founder & Lead Software Engineer",
    summary:
      "متخصص في الذكاء الاصطناعي، أبحاث البرمجة المتوازية، وتصميم معماريات الأنظمة المؤسسية.",
    image: "/rafat-1.jpg",
  },
  {
    name: "المهندس محمد مروان عواجي الحسن",
    roleAr: "شريك تقني ومهندس برمجيات",
    roleEn: "Software Engineer & Technical Partner",
    summary:
      "خبير في الحوسبة عالية الأداء، توسعة الواجهات الخلفية، وتحويل المنطق المعقد إلى حلول رقمية مستقرة.",
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
  },
  {
    title: "دراسة هندسية",
    detailAr: "“Design of an Integrated Educational Academy” – 2024",
    detailEn: "Integrated Educational Academy Study",
    description:
      "تصميم شامل لمنصة تعليمية رقمية تربط بين إدارة المحتوى، التقييم، ودعم التحول الرقمي للمؤسسات التعليمية.",
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
      className={`${cairo.className} ${inter.variable} relative min-h-screen overflow-hidden bg-white text-[#1e293b] [&_.header-call-cta]:!hidden`}
    >
      <style>{`
        @keyframes executive-fade-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <JsonLd data={professionalServiceSchema} />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-20 md:gap-28 md:px-16 lg:px-24">
        <section
          className={`grid items-center gap-16 md:grid-cols-[1.1fr_0.9fr] ${fadeInBaseClass}`}
          aria-labelledby="hero"
          style={{ animationDelay: "0.05s" }}
        >
          <div className="space-y-12 text-right">
            <div className="space-y-8">
              <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
                مركز القيادة | Command Center
              </span>
              <h1 id="hero" className="text-4xl font-semibold leading-[1.4] text-[#0F172A] md:text-5xl">
                استوديو هندسة برمجيات وحلول ذكاء اصطناعي | Software Engineering & AI Solutions Studio
              </h1>
              <p className="text-lg leading-8 text-slate-600 md:text-xl">
                نقدّم حلولًا برمجية متقدمة، منصات تعليمية رقمية، وتطبيقات ويب عالية الجودة، مصممة خصيصًا لتلبية احتياجات المؤسسات في الخليج.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-900/10 bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="استشارة هندسية مجانية عبر واتساب"
              >
                <span>استشارة هندسية مجانية</span>
                <span className={`${inter.className} text-xs uppercase tracking-[0.35em] text-slate-200`}>Free Consultation</span>
              </a>
              <p className="text-sm text-slate-400">
                WhatsApp <span className="mx-1">|</span>
                <span dir="ltr" className={`${inter.className} text-slate-500`}>
                  {WHATSAPP_DISPLAY}
                </span>
              </p>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 rounded-[40px] bg-slate-100" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
              <Image
                src="/rafat-3.jpg"
                alt="المهندس رأفت منصور الشنور"
                width={720}
                height={480}
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                priority
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about"
          className={`space-y-6 border-t border-slate-200 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.15s" }}
        >
          <div className="space-y-3 text-right">
            <h2 id="about" className="text-3xl font-semibold text-[#0F172A]">
              من نحن | About
            </h2>
            <p className="text-base leading-8 text-slate-600">
              نحن استوديو هندسي متخصص في تطوير الأنظمة الذكية، يقوده فريق من مهندسي المعلوماتية بخبرة أكاديمية وعملية واسعة. نركز على التحليل الدقيق والتنفيذ عالي الجودة.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="services"
          className={`space-y-10 border-t border-slate-200 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.25s" }}
        >
          <div className="space-y-3 text-right">
            <h2 id="services" className="text-3xl font-semibold text-[#0F172A]">
              الخدمات الهندسية | Engineering Services
            </h2>
            <p className="text-base text-slate-500">
              باقات متكاملة تغطي التحليل، التصميم، والتطبيق العملي لحلول برمجية متطورة.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.en}
                className="flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white px-8 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
              >
                <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-slate-400`}>{service.en}</span>
                <h3 className="text-xl font-semibold text-[#0F172A]">{service.ar}</h3>
                <p className="text-sm leading-7 text-slate-600">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="projects"
          className={`space-y-10 border-t border-slate-200 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.35s" }}
        >
          <div className="space-y-3 text-right">
            <h2 id="projects" className="text-3xl font-semibold text-[#0F172A]">
              المشاريع ودراسات الحالة | Projects & Case Studies
            </h2>
            <p className="text-base text-slate-500">
              حلول تنفيذية مصممة لإعادة تشكيل الخبرات التعليمية والتشغيلية.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.en}
                className="flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
              >
                <div className="overflow-hidden border-b border-slate-200">
                  <Image
                    src={study.image}
                    alt={study.en}
                    width={560}
                    height={360}
                    className="h-48 w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 px-8 py-7 text-right">
                  <span className={`${inter.className} text-xs uppercase tracking-[0.3em] text-slate-400`}>{study.en}</span>
                  <h3 className="text-lg font-semibold text-[#0F172A]">{study.ar}</h3>
                  <p className="text-sm leading-7 text-slate-600">{study.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="team"
          className={`space-y-10 border-t border-slate-200 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.45s" }}
        >
          <div className="space-y-3 text-right">
            <h2 id="team" className="text-3xl font-semibold text-[#0F172A]">
              الفريق الهندسي | Engineering Team
            </h2>
            <p className="text-base text-slate-500">
              قيادة تقنية تجمع بين البحث الأكاديمي والتطبيق العملي في بيئات مؤسسية معقدة.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white px-9 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center justify-end gap-5">
                  <div className="space-y-2 text-right">
                    <h3 className="text-2xl font-semibold text-[#0F172A]">{member.name}</h3>
                    <p className="text-sm text-slate-500">{member.roleAr}</p>
                    <p className={`${inter.className} text-xs uppercase tracking-[0.3em] text-slate-400`}>{member.roleEn}</p>
                  </div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="h-24 w-24 rounded-3xl border border-slate-200 object-cover shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                  />
                </div>
                <p className="text-sm leading-8 text-slate-600">{member.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="achievements"
          className={`space-y-10 border-t border-slate-200 pt-16 ${fadeInBaseClass}`}
          style={{ animationDelay: "0.55s" }}
        >
          <div className="space-y-3 text-right">
            <h2 id="achievements" className="text-3xl font-semibold text-[#0F172A]">
              الإنجازات العلمية | Scientific Achievements
            </h2>
            <p className="text-base text-slate-500">
              أبحاث ودراسات تدعم بناء حلول متقنة وعالية الاعتمادية.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <article
                key={item.detailEn}
                className="flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white px-8 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <span className="text-sm font-semibold text-[#0F172A]">{item.title}</span>
                <span className="text-sm text-slate-500">{item.detailAr}</span>
                <span className={`${inter.className} text-xs uppercase tracking-[0.25em] text-slate-400`}>
                  {item.detailEn}
                </span>
                <p className="text-sm leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
