import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CarFront,
  Check,
  Database,
  Globe,
  HelpCircle,
  Mail,
  Megaphone,
  MessageCircle,
  Plane,
  PhoneCall,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

import { AnimatedSection } from "@/components/landing/animated-section";
import { ContactForm } from "@/components/landing/contact-form";
import { LanguageSwitch } from "@/components/landing/language-switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "FluxCars | Партнерская модель для запуска автобизнеса",
  description:
    "Запустите локальный бизнес по продаже автомобилей из Китая на базе FluxCars: сайт, каталог, логистика, платежная инфраструктура, Google Ads и CRM.",
};

const navItems = [
  { label: "Преимущества", href: "#benefits", icon: Sparkles },
  { label: "Как это работает", href: "#how-it-works", icon: Settings2 },
  { label: "Для кого", href: "#for-whom", icon: Users },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Контакты", href: "#contacts", icon: Mail },
];

const heroBullets = [
  "Десятки тысяч авто на вашем сайте",
  "Доставка в любую точку мира",
  "Один партнёр на ваш регион",
  "Без затрат в сотни тысяч долларов на запуск с нуля",
];

const launchStackItems = [
  {
    title: "Локализованная платформа для вашего региона",
    icon: Globe,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_24px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Доступ к более 100 000 автомобилей напрямую из Китая",
    icon: CarFront,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_24px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Подключение инструментов для лидогенерации и рекламы",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_24px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Международная логистика и доставка",
    icon: Plane,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_24px_rgba(51,65,85,0.2)]",
  },
];

const benefitCards = [
  {
    title: "Готовый сайт под ваш рынок",
    text: "Запускаем сайт на нужном языке, адаптированный под ваш регион и вашу аудиторию.",
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
  {
    title: "Даёт сайт и платформу",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Размещает и обновляет каталог",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Поддерживает и развивает систему",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Помогает с платёжной инфраструктурой",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Организует международную логистику и доставку",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Подключает почту, рекламу и CRM",
    icon: Mail,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const partnerResponsibilities = [
  {
    title: "Продвигает проект на своём рынке",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Работает с входящими заявками",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Консультирует клиентов",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Сопровождает покупателя",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Развивает локальный бренд",
    icon: Globe,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Строит продажи и масштабирует бизнес",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const reasons = [
  {
    title: "Веб-платформа для старта",
    text: "С первого дня вы выходите на рынок с технологической платформой и большим выбором автомобилей.",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Готовая основа для работы",
    text: "Вы получаете рабочую систему: вебсайт, логистику, платежную инфраструктуру, рекламу и CRM-связку.",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Фокус на продажах, а не на технических задачах",
    text: "Чтобы войти в рынок, не нужно самостоятельно собирать разработку, интеграции и операционные процессы.",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Рост собственного бренда",
    text: "Со временем вы накапливаете локальный бренд, трафик, CRM, базу лидов и узнаваемость на своём рынке.",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const exclusivityItems = [
  {
    title: "Отсутствие внутренней конкуренции внутри сети",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Эксклюзив на рынок",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Смысл инвестировать в продвижение и бренд",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Ограниченное количество партнёрских мест",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const audienceItems = [
  {
    title: "Предпринимателям, которые хотят быстро войти в нишу авто из Китая",
    icon: BriefcaseBusiness,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Локальным продавцам и компаниям с опытом в продажах",
    icon: Building2,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Маркетинговым командам, умеющим генерировать лиды",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Тем, кто хочет запустить авто-проект без сложной собственной разработки",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Тем, кто понимает свой рынок и хочет строить сильный локальный бренд",
    icon: Globe,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const steps = [
  {
    title: "Изучаем ваш рынок и формат запуска",
    text: "Определяем, как лучше запустить проект именно в вашем регионе: язык сайта, подачу, модель работы с клиентами и формат продвижения.",
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

const clientValueItems = [
  {
    title: "Проверку тех. состояния авто",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Прямой доступ к китайскому авторынку",
    icon: Globe,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Локальную коммуникацию и сопровождение",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Понятный процесс покупки",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Поддержку по оплате и доставке",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Доступ к международной поставке через локальный сервис",
    icon: Building2,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const faqItems = [
  {
    question: "Это франшиза или партнёрская модель?",
    answer: "Это смешанная модель, с готовой инфраструктурой для запуска локального проекта.",
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
    question: "Сколько партнёров может быть в одном регионе?",
    answer: "Только один. На один регион — один партнёр FluxCars.",
  },
];

const contactFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Ваше имя" },
  { label: "Company", name: "company", type: "text", placeholder: "Название компании" },
  { label: "Регион", name: "region", type: "text", placeholder: "Регион" },
  { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
  { label: "Phone / Telegram", name: "phone", type: "text", placeholder: "+971 00 000 00 00" },
];

const contactStrings = {
  commentLabel: "Комментарий",
  commentPlaceholder: "Коротко опишите ваш рынок, опыт и задачу",
  consentText: "Соглашаюсь на обработку персональных данных и обратную связь по моей заявке.",
  consentError: "Подтвердите согласие на обработку персональных данных.",
  submitHelperText:
    "Нажимая кнопку, вы подтверждаете интерес к партнёрскому запуску и обратной связи от FluxCars.",
  submitButton: "Оставить заявку",
  submittingButton: "Отправка...",
  submitError: "Не удалось отправить сообщение.",
  networkError: "Ошибка сети. Проверьте подключение и попробуйте снова.",
  successMessage: "Заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.",
};

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
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#d8b36a] text-stone-950">
            <Check className="size-3.5" />
          </span>
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ResponsibilityList({
  items,
}: {
  items: Array<{
    title: string;
    icon: LucideIcon;
    iconWrapClass: string;
  }>;
}) {
  return (
    <ul className="grid gap-3">
      {items.map(({ title, icon: Icon, iconWrapClass }) => (
        <li
          key={title}
          className="flex items-start gap-3 rounded-2xl border border-white/85 bg-white/75 px-4 py-4 shadow-[0_14px_34px_rgba(15,23,42,0.08)]"
        >
          <span className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl ${iconWrapClass}`}>
            <Icon className="size-4.5" />
          </span>
          <span className="leading-7 text-slate-900">{title}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(circle_at_top_right,rgba(216,179,106,0.16),transparent_30%),radial-gradient(circle_at_top_left,rgba(167,82,42,0.12),transparent_32%)]" />

      <header className="sticky top-0 z-50 border-b border-slate-700/80 bg-slate-900/95 backdrop-blur-xl">
        <div className="container-shell flex h-20 items-center justify-between gap-3 sm:gap-8">
          <Link href="#top" className="flex items-center">
            <Image src="/fluxcars_logo.webp" alt="FluxCars" width={140} height={40} className="h-8 w-auto object-contain brightness-0 invert sm:h-10" priority />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
                >
                  <Icon className="size-4 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitch current="ru" variant="dark" />
            <div className="hidden sm:block">
              <Button asChild size="lg" className="bg-[var(--luxury-gold)] text-stone-950 hover:bg-[#f0c978]">
            <Link href="#contacts">Стать партнёром</Link>
          </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="container-shell pt-6 pb-8 sm:pt-10 lg:pt-12">
        <div className="hero-cover">
          <Image
            src="/hero-premium-car.jpg"
            alt="Фронтальный вид премиального черного автомобиля"
            width={1600}
            height={2000}
            priority
            sizes="100vw"
            className="hero-cover__image"
          />
          <div className="relative z-10 grid min-h-[inherit] content-between gap-6 p-5 sm:gap-10 sm:p-9 lg:p-12">
            <div className="max-w-4xl space-y-5 sm:space-y-7">
              <span className="eyebrow">Премиальная B2B-платформа для автобизнеса</span>
              <h1 className="text-4xl leading-[0.94] font-semibold text-[var(--luxury-cream)] sm:text-7xl lg:text-8xl">
                Запустите свой автобизнес на базе FluxCars
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-200/78 sm:text-xl sm:leading-8">
                Готовый сайт на вашем языке, живой каталог автомобилей из Китая, международная доставка,
                платежная инфраструктура, Google Ads, корпоративная почта и интеграция с CRM в одной модели.{" "}
                <a
                  href="https://chinamotor.by"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#d8b36a] underline decoration-[#d8b36a66] underline-offset-4 transition-colors hover:text-[#f0c978]"
                >
                  Пример сайта по продаже авто из Китая
                </a>
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[var(--luxury-gold)] px-8 text-stone-950 hover:bg-[#f0c978]">
                  <Link href="#contacts">
                    Стать партнёром
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border-[#d8b36a55] bg-stone-950/45 px-8 text-stone-100 hover:bg-stone-900/80">
                  <Link href="#how-it-works">Посмотреть модель</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="hero-glass-card max-w-xl">
                <p className="text-base leading-7 font-medium text-stone-100 sm:text-lg sm:leading-8">
                  Вы продаёте и развиваете локальный бренд. FluxCars ведёт сайт, каталог, логистику,
                  сделки, рекламный запуск и интеграции.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-4 sm:gap-3">
                {heroBullets.map((item) => (
                  <div key={item} className="hero-metric">
                    <p className="text-sm leading-5 font-semibold text-stone-100 sm:leading-6">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-shell section-space">
        <div className="premium-panel grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
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
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefitCards.map(({ title, text, icon: Icon }, index) => (
            <Card key={title} className={index % 3 === 0 ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(232,241,255,0.9))]" : ""}>
              <CardHeader className="space-y-5">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[var(--luxury-gold)] text-stone-950 shadow-[0_18px_40px_rgba(216,179,106,0.2)]">
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
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="operating-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Что делает FluxCars</CardTitle>
                <CardDescription className="text-slate-600">Инфраструктура, платформа и операционная часть</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={fluxCarsResponsibilities} />
              </CardContent>
            </Card>
            <Card className="operating-card operating-card--partner overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Что делает партнёр</CardTitle>
                <CardDescription className="text-slate-600">Локальный рынок, клиенты и развитие продаж</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={partnerResponsibilities} />
              </CardContent>
            </Card>
          </div>
          <div className="operating-summary mt-8 rounded-[28px] px-6 py-7 text-lg leading-8 font-medium sm:px-8 sm:text-xl">
            Вы занимаетесь рынком и клиентом. Мы — инфраструктурой и операционной частью.
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading
          eyebrow="Почему выбирают"
          title="Быстрый выход на рынок"
          copy="Пока другие строят бизнес годами, вы можете моментально запустить продвижение и делать продажи."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {reasons.map(({ title, text, icon: Icon, iconWrapClass }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-white/90 bg-[linear-gradient(170deg,rgba(255,255,255,0.98)_0%,rgba(243,248,255,0.9)_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_70px_rgba(30,64,175,0.14)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.14),transparent_62%)]" />
              <div className="relative space-y-3">
                <div className={`mb-1 flex size-12 items-center justify-center rounded-2xl ${iconWrapClass}`}>
                  <Icon className="size-5" />
                </div>
                <h3 className="text-2xl leading-tight font-semibold text-slate-950">{title}</h3>
                <p className="text-base leading-7 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <div className="premium-panel grid gap-8 overflow-hidden p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="space-y-6">
            <span className="eyebrow">Эксклюзивность</span>
            <h2 className="section-title">Один партнёр на ваш регион</h2>
            <p className="section-copy">
              Мы не продаём одну и ту же модель нескольким игрокам внутри одного рынка. На один регион — один партнёр
              FluxCars.
            </p>
            <p className="text-lg leading-8 font-medium text-[#d8b36a]">Количество мест ограничено регионом.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {exclusivityItems.map(({ title, icon: Icon, iconWrapClass }) => (
              <div
                key={title}
                className="rounded-[28px] border border-white/90 bg-[linear-gradient(165deg,rgba(255,255,255,0.98)_0%,rgba(244,248,255,0.9)_100%)] p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${iconWrapClass}`}>
                  <Icon className="size-5" />
                </div>
                <p className="text-lg leading-8 font-medium text-slate-900">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="for-whom" className="container-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Для кого" title="Кому подходит партнёрская модель FluxCars" />
          <div className="audience-panel overflow-hidden rounded-[34px] border p-6 sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {audienceItems.map(({ title, icon: Icon, iconWrapClass }) => (
                <li
                  key={title}
                  className="audience-card rounded-[24px] border px-5 py-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${iconWrapClass}`}>
                    <Icon className="size-5" />
                  </div>
                  <p className="text-base leading-7 font-medium text-slate-900">{title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading eyebrow="Этапы запуска" title="Как запускается партнёрский проект" />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step) => {
            const StepIcon = step.icon;

            return (
            <div
              key={step.title}
              className="group relative overflow-hidden rounded-[30px] border border-[#d8b36a2e]/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(239,246,255,0.92)_100%)] p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(21,93,252,0.16)] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.2),transparent_62%)]" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/70 bg-white text-[#d8b36a] shadow-[0_12px_30px_rgba(216,179,106,0.18)]">
                    <StepIcon className="size-6" />
                  </div>
                  <span className="rounded-full border border-[#d8b36a2e] bg-stone-900/70 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#d8b36a] uppercase">
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
        <div className="customer-value-panel overflow-hidden rounded-[36px] border p-8 sm:p-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:p-14">
          <SectionHeading
            eyebrow="Ценность для клиента"
            title="Что получает ваш клиент"
            copy="Для клиента это удобный местный проект. Для вас — сильная международная платформа за спиной."
          />
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {clientValueItems.map(({ title, icon: Icon, iconWrapClass }) => (
                <div
                  key={title}
                  className="customer-value-card rounded-[24px] border p-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className={`mb-4 flex size-11 items-center justify-center rounded-2xl ${iconWrapClass}`}>
                    <Icon className="size-5" />
                  </div>
                  <p className="text-base leading-7 font-medium text-slate-900">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="faq" className="container-shell section-space">
        <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
        <div className="premium-panel mt-8 p-6 sm:p-8">
          <Accordion type="single" collapsible className="divide-y divide-slate-200/70">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question} className="border-none">
                <AccordionTrigger className="text-lg text-slate-950 hover:text-[#d8b36a]">
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
        <div className="overflow-hidden rounded-[36px] border border-[#d8b36a2e] bg-[linear-gradient(135deg,#15110d_0%,#2a1d12_55%,#8f4a22_100%)] px-8 py-10 text-white shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:px-10 lg:px-14 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] uppercase">
                Финальный шаг
              </span>
              <h2 className="max-w-4xl text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
                Запустите свой автобизнес на базе FluxCars
              </h2>
              <p className="max-w-3xl text-base leading-8 text-stone-100/82 sm:text-lg">
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
              <p className="text-lg leading-8 font-medium text-[#f5e6c7]">
                Один партнёр на ваш регион. Количество мест ограничено.
              </p>
              <Button asChild size="lg" className="bg-white px-8 text-slate-950 hover:bg-stone-900/70">
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
              Расскажите о регионе, компании и формате проекта. Мы свяжемся с вами, чтобы обсудить условия партнёрства,
              запуск и эксклюзивность на рынок.
            </p>
            <div className="grid gap-4">
              {[
                { text: "Ответим по модели партнёрства и условиям запуска", icon: PhoneCall },
                { text: "Покажем, как выглядит инфраструктура проекта", icon: Building2 },
                { text: "Обсудим эксклюзивность на ваш рынок", icon: ShieldCheck },
              ].map(({ text, icon: Icon }) => (
                <div key={text} className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/75 px-4 py-4">
                  <Icon className="mt-1 size-5 text-[#d8b36a]" />
                  <p className="text-base leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <ContactForm fields={contactFields} strings={contactStrings} />
        </div>
      </AnimatedSection>

      <footer className="container-shell section-space pt-8">
        <div className="overflow-hidden rounded-[34px] border border-[#d8b36a24] bg-[linear-gradient(145deg,#15110d_0%,#211912_45%,#090807_100%)] p-8 text-slate-100 shadow-[0_26px_90px_rgba(2,6,23,0.45)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">English speaking support</h3>
              <a href="tel:+447822032515" className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-[#ead3a1]">
                <PhoneCall className="size-4" />
                +44 7822 032515
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">Китай</h3>
              <p className="text-base leading-7 text-slate-100">+86 150 2112 5206 (WeChat, Viber)</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">О компании</h3>
              <p className="text-base leading-7 text-slate-100">Hefei Accord Import and Export Co., LTD</p>
              <p className="text-sm leading-6 text-slate-300">
                Legal address: Floor 12, 6-9, 11-14, Building B, No. 188, Shangcheng Avenue, Futian District, Yiwu,
                Jinhua City, Zhejiang Province
              </p>
              <p className="text-sm leading-6 text-slate-300">Trade register number: 913 4012 MAE3J 77X26</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">Каналы связи</h3>
              <div className="grid gap-3">
                <a
                  href="https://t.me/chinamotor_bot"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d8b36a55] bg-[#d8b36a1f] px-4 py-3 text-sm font-semibold text-[#f5e6c7] transition hover:bg-[#d8b36a33]"
                >
                  <Send className="size-4" />
                  Telegram
                </a>
                <a
                  href="https://connect.viber.com/ru/business/467d53c8-1703-11f0-b10f-36482bc6d4ae"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#d8b36a55] bg-[#d8b36a1f] px-4 py-3 text-sm font-semibold text-[#f4d99b] transition hover:bg-[#d8b36a30]"
                >
                  <MessageCircle className="size-4" />
                  Viber
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
