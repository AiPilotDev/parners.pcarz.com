import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Check,
  ChevronRight,
  Database,
  Globe,
  Mail,
  Megaphone,
  PhoneCall,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { AnimatedSection } from "@/components/landing/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FluxCars | Партнерская модель для запуска авто-бизнеса",
  description:
    "Запустите локальный бизнес по продаже автомобилей из Китая на базе FluxCars: сайт, каталог, логистика, платежная инфраструктура, Google Ads и CRM.",
};

const navItems = [
  { label: "Преимущества", href: "#benefits" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Для кого", href: "#for-whom" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

const heroBullets = [
  "Десятки тысяч авто на вашем сайте",
  "Доставка в любую точку мира",
  "Один партнёр на одну страну",
  "Без затрат в сотни тысяч долларов на запуск с нуля",
];

const benefitCards = [
  {
    title: "Готовый сайт под ваш рынок",
    text: "Запускаем сайт на нужном языке, адаптированный под вашу страну и вашу аудиторию.",
    icon: Globe,
  },
  {
    title: "Десятки тысяч предложений с китайского рынка",
    text: "На вашем сайте размещаются десятки тысяч актуальных предложений автомобилей. Обновление каталога, актуализация и ведение — на нашей стороне.",
    icon: CarFront,
  },
  {
    title: "Доставка в любую точку мира",
    text: "Мы закрываем международную логистику и организуем поставку автомобилей в любую точку мира.",
    icon: Globe,
  },
  {
    title: "Платёжная инфраструктура",
    text: "Помогаем выстроить рабочую схему международных расчётов для сделок с клиентами.",
    icon: ShieldCheck,
  },
  {
    title: "Подключение корпоративной почты",
    text: "Настраиваем корпоративную почту на вашем домене, чтобы проект с первого дня выглядел как полноценный бизнес.",
    icon: Mail,
  },
  {
    title: "Настройка и ведение Google Ads",
    text: "Запускаем и сопровождаем рекламные кампании в Google, чтобы вы быстрее начали получать заявки.",
    icon: Sparkles,
  },
  {
    title: "Интеграция с вашей CRM",
    text: "Подключаем платформу к вашей CRM, чтобы заявки и сделки сразу попадали в вашу систему.",
    icon: Building2,
  },
  {
    title: "Техническая поддержка и обновления",
    text: "Платформу поддерживаем и развиваем мы. Вам не нужно держать команду разработчиков.",
    icon: BadgeCheck,
  },
];

const fluxCarsResponsibilities = [
  "даёт сайт и платформу",
  "размещает и обновляет каталог",
  "поддерживает и развивает систему",
  "помогает с платежной инфраструктурой",
  "организует международную логистику и доставку",
  "подключает почту, рекламу и CRM",
];

const partnerResponsibilities = [
  "продвигает проект на своём рынке",
  "работает с входящими заявками",
  "консультирует клиентов",
  "сопровождает покупателя",
  "развивает локальный бренд",
  "строит продажи и масштабирует бизнес",
];

const reasons = [
  {
    title: "Быстрый выход на рынок",
    text: "Пока другие строят платформу месяцами, вы можете быстрее запустить продвижение и начать получать заявки.",
  },
  {
    title: "Сильная витрина с первого дня",
    text: "Большой каталог на сайте сразу усиливает доверие клиента и улучшает восприятие бренда.",
  },
  {
    title: "Готовая основа для работы",
    text: "Вы получаете не просто сайт, а рабочую систему: каталог, логистику, платежную инфраструктуру, рекламу и CRM-связку.",
  },
  {
    title: "Фокус на продажах, а не на технических задачах",
    text: "Чтобы войти в рынок, не нужно самостоятельно собирать разработку, интеграции и операционные процессы.",
  },
  {
    title: "Рост собственного бренда",
    text: "Со временем вы накапливаете локальный бренд, трафик, CRM, базу лидов и узнаваемость на своём рынке.",
  },
];

const exclusivityBullets = [
  "отсутствие внутренней конкуренции внутри сети",
  "эксклюзив на рынок",
  "смысл инвестировать в продвижение и бренд",
  "ограниченное количество партнёрских мест",
];

const audienceBullets = [
  "предпринимателям, которые хотят быстро войти в нишу авто из Китая",
  "локальным продавцам и компаниям с опытом в продажах",
  "маркетинговым командам, умеющим генерировать лиды",
  "тем, кто хочет запустить авто-проект без сложной собственной разработки",
  "тем, кто понимает свой рынок и хочет строить сильный локальный бренд",
];

const steps = [
  {
    title: "Изучаем ваш рынок и формат запуска",
    text: "Определяем, как лучше запустить проект именно в вашей стране: язык сайта, подачу, модель работы с клиентами и формат продвижения.",
    icon: Search,
  },
  {
    title: "Подготавливаем инфраструктуру",
    text: "Запускаем сайт, подключаем корпоративную почту, CRM и базовые инструменты для обработки заявок.",
    icon: Settings2,
  },
  {
    title: "Наполняем сайт каталогом автомобилей",
    text: "Размещаем на сайте десятки тысяч предложений с китайского рынка. Обновление и актуализацию каталога берём на себя.",
    icon: Database,
  },
  {
    title: "Подключаем привлечение клиентов",
    text: "Помогаем запустить продвижение на вашем рынке и поддерживаем техническую и операционную часть проекта.",
    icon: Megaphone,
  },
  {
    title: "Выходите на продажи и начинаете зарабатывать",
    text: "Вы обрабатываете обращения, консультируете клиентов, сопровождаете сделки и получаете прибыль от продаж автомобилей на своём рынке.",
    icon: TrendingUp,
  },
  {
    title: "Развиваете готовую бизнес-модель",
    text: "По мере роста спроса вы масштабируете продажи и укрепляете своё присутствие на рынке, опираясь на уже готовую инфраструктуру FluxCars.",
    icon: BriefcaseBusiness,
  },
];

const clientValueBullets = [
  "сайт на своём языке",
  "большой выбор автомобилей из Китая",
  "локальную коммуникацию и сопровождение",
  "понятный процесс покупки",
  "поддержку по оплате и доставке",
  "доступ к международной поставке через локальный сервис",
];

const faqItems = [
  {
    question: "Это франшиза или партнёрская модель?",
    answer: "Это партнёрская модель с готовой инфраструктурой для запуска локального проекта.",
  },
  {
    question: "Нужно ли искать разработчиков?",
    answer: "Нет. Сайт, техническая поддержка и развитие платформы находятся на нашей стороне.",
  },
  {
    question: "Кто обновляет каталог автомобилей?",
    answer: "Каталог обновляем и ведём мы.",
  },
  {
    question: "Кто занимается доставкой?",
    answer: "Международную логистику и поставку автомобилей организуем мы.",
  },
  {
    question: "Можно ли подключить нашу CRM?",
    answer: "Да. Мы подключаем платформу к вашей CRM.",
  },
  {
    question: "Можно ли запускать рекламу через вас?",
    answer: "Да. Мы настраиваем и ведём рекламные кампании в Google.",
  },
  {
    question: "Сколько партнёров может быть в одной стране?",
    answer: "Только один. На одну страну — один партнёр FluxCars.",
  },
];

const contactFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Ваше имя" },
  { label: "Company", name: "company", type: "text", placeholder: "Название компании" },
  { label: "Country", name: "country", type: "text", placeholder: "Страна" },
  { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
  { label: "Phone / Telegram", name: "phone", type: "text", placeholder: "+971 00 000 00 00" },
];

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="space-y-6">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-4">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
            <Check className="size-3.5" />
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_right,rgba(16,71,200,0.2),transparent_30%),radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_32%)]" />

      <header className="sticky top-0 z-50 border-b border-white/60 bg-[#f4f8fd]/80 backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-8">
          <Link href="#top" className="font-display text-2xl font-semibold tracking-[-0.06em] text-slate-950">
            FluxCars
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
            <Link href="#contacts">Стать партнёром</Link>
          </Button>
        </div>
      </header>

      <section id="top" className="container-shell section-space pt-14 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <AnimatedSection className="space-y-8">
            <span className="eyebrow">Премиальная B2B-платформа для локальных рынков</span>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl leading-[0.98] font-semibold text-slate-950 sm:text-6xl lg:text-7xl">
                Запустите свой авто-бизнес на базе FluxCars
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Готовый сайт на вашем языке, десятки тысяч автомобилей из Китая, обновление каталога,
                международная доставка, платежная инфраструктура, Google Ads, корпоративная почта и интеграция с CRM.
              </p>
            </div>

            <div className="premium-panel max-w-3xl p-6 sm:p-8">
              <p className="text-lg leading-8 font-medium text-slate-900 sm:text-xl">
                Вы занимаетесь продвижением и работой с клиентами. Мы берём на себя платформу, обновление сайта,
                логистику и инфраструктуру сделки.
              </p>
            </div>

            <BulletList items={heroBullets} />

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-blue-700 px-8 hover:bg-blue-800">
                <Link href="#contacts">
                  Стать партнёром
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="border-slate-200 bg-white/80 px-8">
                <Link href="#contacts">Получить условия</Link>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="premium-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,93,252,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(235,243,255,0.88))]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-[28px] border border-blue-100 bg-white/80 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">Launch stack</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950">Сайт, каталог, логистика</p>
                </div>
                <div className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">B2B</div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Сайт, адаптированный под ваш рынок",
                  "Каталог автомобилей из Китая",
                  "Google Ads и интеграция с CRM",
                  "Международная логистика и доставка",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/80 bg-white/88 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <ChevronRight className="size-5" />
                    </div>
                    <p className="text-base leading-7 font-medium text-slate-900">{item}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] bg-slate-950 p-6 text-white">
                <p className="text-sm font-semibold tracking-[0.22em] text-blue-200 uppercase">Эксклюзив на страну</p>
                <p className="mt-3 text-2xl leading-tight font-semibold">
                  Один партнёр в одной стране, без внутренней конкуренции и с готовой базой для роста.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="container-shell section-space">
        <div className="premium-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
          <SectionHeading
            eyebrow="Почему это выгодно"
            title="Не тратьте сотни тысяч долларов, чтобы войти в автобизнес"
          />
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Создание с нуля проекта по продаже автомобилей из Китая требует больших вложений в разработку, каталог,
            техническую поддержку, рекламу, международные платежи, CRM, почту, логистику и операционные процессы.
            <br />
            <br />
            FluxCars уже собирает всё это в одной системе. Вы получаете готовую основу для запуска и роста бизнеса на
            своём рынке.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="benefits" className="container-shell section-space">
        <SectionHeading eyebrow="Преимущества" title="Что получает партнёр FluxCars" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefitCards.map(({ title, text, icon: Icon }, index) => (
            <Card key={title} className={index % 3 === 0 ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,241,255,0.9))]" : ""}>
              <CardHeader className="space-y-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-[0_18px_40px_rgba(16,71,200,0.28)]">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[15px] leading-7">{text}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="how-it-works" className="container-shell section-space">
        <div className="premium-panel p-8 sm:p-10 lg:p-14">
          <SectionHeading eyebrow="Модель работы" title="Простая модель работы" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="border-blue-100/90 bg-[linear-gradient(180deg,rgba(241,247,255,0.95),rgba(255,255,255,0.92))]">
              <CardHeader>
                <CardTitle className="text-2xl">Что делает FluxCars</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={fluxCarsResponsibilities} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Что делает партнёр</CardTitle>
              </CardHeader>
              <CardContent>
                <BulletList items={partnerResponsibilities} />
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 rounded-[28px] bg-slate-950 px-6 py-7 text-lg leading-8 font-medium text-white sm:px-8 sm:text-xl">
            Вы занимаетесь рынком и клиентом. Мы — инфраструктурой и операционной частью.
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading eyebrow="Почему выбирают" title="Почему партнёры выбирают FluxCars" />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reasons.map((item, index) => (
            <div key={item.title} className="premium-panel flex gap-5 p-6 sm:p-7">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <span className="font-display text-lg font-semibold">{index + 1}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl leading-tight font-semibold text-slate-950">{item.title}</h3>
                <p className="text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <div className="premium-panel grid gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="space-y-6">
            <span className="eyebrow">Эксклюзивность</span>
            <h2 className="section-title">Один партнёр на одну страну</h2>
            <p className="section-copy">
              Мы не продаём одну и ту же модель нескольким игрокам внутри одного рынка. На одну страну — один партнёр
              FluxCars.
            </p>
            <p className="text-lg leading-8 font-medium text-blue-700">Количество мест ограничено географией.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {exclusivityBullets.map((item) => (
              <div key={item} className="rounded-[28px] border border-blue-100 bg-blue-50/70 p-6">
                <p className="text-lg leading-8 font-medium text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="for-whom" className="container-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Для кого" title="Кому подходит партнёрская модель FluxCars" />
          <div className="premium-panel p-6 sm:p-8">
            <BulletList items={audienceBullets} />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading eyebrow="Этапы запуска" title="Как запускается партнёрский проект" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => {
            const StepIcon = step.icon;

            return (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-[30px] border border-blue-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,255,0.92)_100%)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(21,93,252,0.16)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_62%)]" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/70 bg-white text-blue-700 shadow-[0_12px_30px_rgba(59,130,246,0.14)]">
                    <StepIcon className="size-6" />
                  </div>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-blue-700 uppercase">
                    Шаг запуска
                  </span>
                </div>
                <h3 className="max-w-sm text-2xl leading-tight font-semibold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{step.text}</p>
              </div>
            </div>
            );
          })}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <div className="premium-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
          <SectionHeading eyebrow="Ценность для клиента" title="Что получает ваш клиент" />
          <div className="space-y-6">
            <BulletList items={clientValueBullets} />
            <div className="rounded-[28px] border border-blue-100 bg-blue-50/80 px-6 py-7 text-lg leading-8 font-medium text-slate-900">
              Для клиента это удобный местный проект. Для вас — сильная международная платформа за спиной.
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="container-shell section-space">
        <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
        <div className="premium-panel mt-12 p-6 sm:p-8">
          <Accordion type="single" collapsible className="divide-y divide-slate-200/70">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-none">
                <AccordionTrigger className="text-lg text-slate-950 hover:text-blue-700">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl text-base leading-7 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <div className="overflow-hidden rounded-[36px] border border-blue-100 bg-[linear-gradient(135deg,#0f172a_0%,#10348b_55%,#155dfc_100%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(16,71,200,0.32)] sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase">
                Финальный шаг
              </span>
              <h2 className="max-w-4xl text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
                Запустите свой авто-бизнес на базе FluxCars
              </h2>
              <p className="max-w-3xl text-base leading-8 text-blue-50/88 sm:text-lg">
                Получите сайт на нужном языке, десятки тысяч предложений с китайского рынка, обновляемый каталог,
                международную логистику, доставку в любую точку мира, платежную инфраструктуру, корпоративную почту,
                Google Ads и интеграцию с вашей CRM.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-8 font-medium text-white">
                Не тратьте сотни тысяч долларов на запуск с нуля. Используйте готовую платформу FluxCars и
                сосредоточьтесь на продажах.
              </p>
              <p className="text-lg leading-8 font-medium text-blue-100">
                Один партнёр на одну страну. Количество мест ограничено.
              </p>
              <Button asChild size="lg" className="bg-white px-8 text-slate-950 hover:bg-blue-50">
                <Link href="#contacts">Получить условия партнёрства</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacts" className="container-shell section-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <span className="eyebrow">Контакты</span>
            <h2 className="section-title">Оставьте заявку и обсудим запуск на вашем рынке</h2>
            <p className="section-copy">
              Расскажите о стране, компании и формате проекта. Мы свяжемся с вами, чтобы обсудить условия партнёрства,
              запуск и эксклюзивность на рынок.
            </p>
            <div className="grid gap-4">
              {[
                "Ответим по модели партнёрства и условиям запуска",
                "Покажем, как выглядит инфраструктура проекта",
                "Обсудим эксклюзивность на ваш рынок",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-4">
                  <PhoneCall className="mt-1 size-5 text-blue-700" />
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form className="premium-panel p-6 sm:p-8" action="#">
            <div className="grid gap-5 md:grid-cols-2">
              {contactFields.map((field) => (
                <label key={field.name} className="grid gap-2 text-sm font-medium text-slate-700">
                  <span>{field.label}</span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              ))}
              <label className="grid gap-2 text-sm font-medium text-slate-700 md:col-span-2">
                <span>Comment</span>
                <textarea
                  name="comment"
                  placeholder="Коротко опишите ваш рынок, опыт и задачу"
                  rows={5}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-500">
                Нажимая кнопку, вы подтверждаете интерес к партнёрскому запуску и обратной связи от FluxCars.
              </p>
              <Button type="submit" size="lg" className="bg-blue-700 px-8 hover:bg-blue-800">
                Оставить заявку
              </Button>
            </div>
          </form>
        </div>
      </AnimatedSection>
    </main>
  );
}
