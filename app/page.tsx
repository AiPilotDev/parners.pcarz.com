import {
  ArrowRight,
  BanknoteArrowDown,
  BriefcaseBusiness,
  Globe2,
  Handshake,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { AnimatedSection } from "@/components/landing/animated-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const trustItems = [
  "Локальный бренд партнера, а не чужая витрина",
  "Платформа, платежи и логистика уже выстроены",
  "Запуск без разработки международной схемы с нуля",
  "Поддержка обновлений и роста после старта",
];

const problems = [
  "Создание сайта и платформы",
  "Каталог и регулярное обновление ассортимента",
  "Международные платежи и движение денег",
  "Логистика, поставка и операционное сопровождение",
];

const solutions = [
  "Локализованный сайт под рынок партнера",
  "Готовая техническая платформа и обработка заявок",
  "Поддержка платежной инфраструктуры",
  "Рабочая модель доставки автомобилей из Китая",
];

const processSteps = [
  {
    title: "Старт под вашим брендом",
    description:
      "Запускаем локальный проект с вашим позиционированием, языком и структурой коммуникации для рынка.",
  },
  {
    title: "Подключение инфраструктуры",
    description:
      "pСarz закрывает платформу, каталог, платежную модель и логистический контур поставки.",
  },
  {
    title: "Выход в продажи",
    description:
      "Партнер фокусируется на маркетинге, заявках, переговорах и сопровождении клиента до сделки.",
  },
  {
    title: "Рост без перестройки ядра",
    description:
      "Масштабирование идет на уже готовой системе: вы усиливаете рынок, а не переписываете продукт.",
  },
];

const caseStudies = [
  {
    title: "Локальный предприниматель",
    text: "Запускает авто-проект быстрее, чем при самостоятельной сборке платформы, и сразу работает с продажами, а не с подрядчиками.",
  },
  {
    title: "Действующий авто-продавец",
    text: "Усиливает текущий бизнес каталогом автомобилей из Китая, сохраняя локальный бренд и доверие своей аудитории.",
  },
  {
    title: "Маркетинговая команда",
    text: "Монетизирует сильную лидогенерацию через собственный продукт, опираясь на готовую международную инфраструктуру.",
  },
];

const advantages = [
  {
    icon: Globe2,
    title: "Локализация без компромиссов",
    text: "Сайт и коммуникация адаптируются под конкретный рынок, а клиент воспринимает проект как местный сервис.",
  },
  {
    icon: BanknoteArrowDown,
    title: "Снижение входного барьера",
    text: "Без крупных затрат на продуктовую разработку, поддержку, интеграции и запуск платежной схемы.",
  },
  {
    icon: Truck,
    title: "Операционная устойчивость",
    text: "Партнер не остается один на один с поставкой, расчетами и координацией международной сделки.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Фокус на выручке",
    text: "Вся энергия уходит в каналы продаж, бренд, переговоры и развитие локального спроса.",
  },
];

const faqs = [
  {
    question: "Чем модель pСarz отличается от обычной франшизы?",
    answer:
      "Это не просто передача названия и шаблонного сайта. Партнер получает живую платформу, обновления, платежную и логистическую инфраструктуру, а также основу для устойчивого локального бизнеса.",
  },
  {
    question: "Что именно остается в зоне ответственности партнера?",
    answer:
      "Партнер отвечает за локальный маркетинг, привлечение лидов, коммуникацию с клиентами, сопровождение сделки и развитие собственного бренда на рынке.",
  },
  {
    question: "Подходит ли модель тем, кто только выходит в нишу?",
    answer:
      "Да. Модель создана именно для быстрого входа без построения международной инфраструктуры с нуля. Это снижает риск старта и ускоряет первые продажи.",
  },
  {
    question: "Можно ли масштабироваться постепенно?",
    answer:
      "Да. Вы можете стартовать с небольшого объема, усиливать рекламные каналы и команду по мере спроса, не меняя платформу и операционный фундамент.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <header className="mb-10 flex items-center justify-between border-b border-black/8 py-4">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.35em] text-muted-foreground">
              pСarz Partners
            </p>
            <p className="mt-2 text-sm text-black/70">
              Инфраструктура для локального авто-бизнеса
            </p>
          </div>
          <Button variant="secondary" asChild>
            <a href="#cta">Обсудить запуск</a>
          </Button>
        </header>

        <AnimatedSection className="grid gap-10 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-black/10 bg-white/65 px-4 py-2 font-sans text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Партнерская модель запуска локального авто-проекта
            </div>
            <h1 className="max-w-4xl text-5xl leading-[1.02] tracking-[-0.04em] text-balance sm:text-6xl lg:text-7xl">
              Готовая платформа для продажи автомобилей из Китая под брендом вашего рынка.
            </h1>
            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-muted-foreground">
              pСarz берет на себя технологию, обновления, платежную инфраструктуру и логистику.
              Партнер строит локальный бренд, управляет продажами и растит спрос там, где знает рынок лучше всех.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#cta">
                  Получить условия партнерства
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#process">Как работает модель</a>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden bg-[#161616] text-white shadow-[0_30px_120px_rgba(10,10,10,0.28)]">
            <CardHeader className="border-b border-white/10 pb-5">
              <CardDescription className="font-sans uppercase tracking-[0.2em] text-white/60">
                Executive Summary
              </CardDescription>
              <CardTitle className="text-2xl">
                Вы управляете рынком и клиентом. Мы удерживаем за спиной всю сложную инфраструктуру.
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-5 p-6 font-sans text-sm leading-7 text-white/75">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 size-4 text-[#c6a972]" />
                <p>Локализованный сайт, каталог автомобилей и обработка заявок уже готовы к запуску.</p>
              </div>
              <div className="flex items-start gap-3">
                <Handshake className="mt-1 size-4 text-[#c6a972]" />
                <p>Платежи, поставка и операционное сопровождение не нужно собирать с нуля.</p>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-1 size-4 text-[#c6a972]" />
                <p>Модель масштабируется по мере спроса без дорогостоящей перестройки платформы.</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection className="grid gap-4 border-y border-black/8 py-6 font-sans md:grid-cols-4" delay={0.08}>
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-black/72">
              <span className="size-2 rounded-full bg-accent" />
              <span>{item}</span>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 py-20 lg:grid-cols-2" delay={0.12}>
          <Card className="bg-transparent">
            <CardHeader>
              <CardDescription className="uppercase tracking-[0.22em]">Проблема</CardDescription>
              <CardTitle className="text-3xl">
                Самостоятельный запуск авто-бизнеса из Китая обычно упирается не в спрос, а в инфраструктуру.
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 font-sans">
              {problems.map((item) => (
                <div key={item} className="rounded-2xl border border-black/8 bg-white/55 px-5 py-4 text-sm text-black/75">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-[#191919] text-white">
            <CardHeader>
              <CardDescription className="uppercase tracking-[0.22em] text-white/55">
                Решение pСarz
              </CardDescription>
              <CardTitle className="text-3xl">
                Партнер получает не шаблон, а работающую операционную основу для продаж на своем рынке.
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 font-sans">
              {solutions.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/78">
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="process" className="py-10" delay={0.16}>
          <div className="mb-10 max-w-3xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">Процесс</p>
            <h2 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">
              Четкое разделение ролей ускоряет запуск и снижает цену ошибки.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={step.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-5 font-sans text-sm text-muted-foreground">0{index + 1}</div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm leading-7 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-6 py-20 lg:grid-cols-[0.95fr_1.05fr]" delay={0.2}>
          <div className="max-w-2xl">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">Кому подходит</p>
            <h2 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">
              Модель создана для тех, кто силен в локальном рынке, но не хочет строить международную систему самостоятельно.
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-8 text-muted-foreground">
              Предприниматели, локальные продавцы, маркетинговые команды и компании, которые хотят быстро войти
              в нишу автомобилей из Китая, получают основу для уверенного запуска и роста.
            </p>
          </div>
          <div className="grid gap-5">
            {caseStudies.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-sans text-sm leading-7 text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-10" delay={0.24}>
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Ключевые преимущества
              </p>
              <h2 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">
                Все, что замедляет старт с нуля, уже вынесено из вашей критической зоны риска.
              </h2>
            </div>
            <p className="max-w-lg font-sans text-sm leading-7 text-muted-foreground">
              pСarz позволяет сфокусироваться на том, что приносит выручку: маркетинге, переговорах, сделках и развитии бренда.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
                  <CardHeader>
                    <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-[#181818] text-[#c6a972]">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-sans text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]" delay={0.28}>
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
            <h2 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">
              Ответы на ключевые вопросы до начала переговоров.
            </h2>
          </div>
          <Card className="px-6">
            <Accordion type="single" collapsible>
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </AnimatedSection>

        <AnimatedSection id="cta" className="pt-8" delay={0.32}>
          <Card className="overflow-hidden bg-[#111111] text-white">
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-end lg:p-12">
              <div className="max-w-3xl">
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-white/50">
                  Финальный акцент
                </p>
                <h2 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">
                  Запускать авто-бизнес с нуля долго, дорого и рискованно. С pСarz быстрее, спокойнее и системнее.
                </h2>
                <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-white/70">
                  Вы получаете не просто сайт, а рабочую платформу для старта и роста на своем рынке. Мы закрываем основу.
                  Вы превращаете ее в сильный локальный бизнес.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Button size="lg" className="bg-[#c6a972] text-black hover:bg-[#d2b57f]" asChild>
                  <a href="mailto:partners@pcarz.com">
                    Связаться с pСarz
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/45">
                  partners@pcarz.com
                </p>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </main>
  );
}
