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
  title: "FluxCars | Partnership model to launch an auto business",
  description:
    "Launch a local business selling cars from China on top of FluxCars: website, catalog, logistics, payment infrastructure, Google Ads, and CRM.",
};

const navItems = [
  { label: "Benefits", href: "#benefits", icon: Sparkles },
  { label: "How it works", href: "#how-it-works", icon: Settings2 },
  { label: "Who it’s for", href: "#for-whom", icon: Users },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contact", href: "#contacts", icon: Mail },
];

const heroBullets = [
  "Tens of thousands of cars on your website",
  "Delivery anywhere in the world",
  "One exclusive partner per region",
  "No six-figure launch costs from scratch",
];

const launchStackItems = [
  {
    title: "Localized platform for your region",
    icon: Globe,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_24px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Access to over 100,000 vehicles directly from China",
    icon: CarFront,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_24px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Lead generation and advertising tools",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_24px_rgba(26,122,77,0.2)]",
  },
  {
    title: "International logistics and delivery",
    icon: Plane,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_24px_rgba(51,65,85,0.2)]",
  },
];

const benefitCards = [
  {
    title: "Launch-ready website for your market",
    text: "We launch a website in the right language, tailored to your region and audience.",
    icon: Globe,
  },
  {
    title: "Tens of thousands of listings from China",
    text: "Your website features tens of thousands of current vehicle offers. We handle catalog updates and maintenance.",
    icon: CarFront,
  },
  {
    title: "Delivery anywhere in the world",
    text: "We manage international logistics and organize vehicle delivery worldwide.",
    icon: Globe,
  },
  {
    title: "Payment infrastructure",
    text: "We help build a working model for international settlements with clients.",
    icon: ShieldCheck,
  },
  {
    title: "Corporate email setup",
    text: "We set up corporate email on your domain so the project looks like a full business from day one.",
    icon: Mail,
  },
  {
    title: "Google Ads setup and management",
    text: "We launch and manage Google campaigns so you start getting inquiries faster.",
    icon: Sparkles,
  },
  {
    title: "CRM integration",
    text: "We connect the platform to your CRM so leads and deals go straight into your system.",
    icon: Building2,
  },
  {
    title: "Technical support and updates",
    text: "We maintain and evolve the platform. You don’t need to keep a dev team.",
    icon: BadgeCheck,
  },
];

const fluxCarsResponsibilities = [
  {
    title: "Provides the website and platform",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Publishes and updates the catalog",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Maintains and develops the system",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Helps with payment infrastructure",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Organizes international logistics and delivery",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Connects email, ads, and CRM",
    icon: Mail,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const partnerResponsibilities = [
  {
    title: "Promotes the project in its market",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Handles inbound inquiries",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Consults customers",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Supports the buyer",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Builds the local brand",
    icon: Globe,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Grows sales and scales the business",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const reasons = [
  {
    title: "A web platform to launch",
    text: "From day one you enter the market with a tech platform and a large selection of vehicles.",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "A ready-to-run foundation",
    text: "You get a working system: website, logistics, payment infrastructure, advertising, and CRM integration.",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Focus on sales, not tech",
    text: "To enter the market, you don’t need to build development, integrations, and operations on your own.",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Grow your own brand",
    text: "Over time you build a local brand, traffic, CRM, lead base, and recognition in your market.",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const exclusivityItems = [
  {
    title: "No internal competition within the network",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Market exclusivity",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "A clear incentive to invest in brand and promotion",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Limited number of partner slots",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const audienceItems = [
  {
    title: "Entrepreneurs who want to enter the China-car niche quickly",
    icon: BriefcaseBusiness,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Local dealers and companies with sales experience",
    icon: Building2,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Marketing teams that know how to generate leads",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Those who want to launch an auto project without complex in-house development",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Those who know their market and want to build a strong local brand",
    icon: Globe,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const steps = [
  {
    title: "We analyze your market and launch format",
    text: "We define the best way to launch in your region: website language, positioning, customer model, and promotion.",
    icon: Search,
  },
  {
    title: "We prepare the infrastructure",
    text: "We launch the website, connect corporate email, CRM, and core tools for handling inquiries.",
    icon: Settings2,
  },
  {
    title: "We populate the catalog",
    text: "We list tens of thousands of offers from the Chinese market and keep the catalog updated.",
    icon: Database,
  },
  {
    title: "We enable customer acquisition",
    text: "We help launch promotion in your market and support the technical and operational side of the project.",
    icon: Megaphone,
  },
  {
    title: "You start selling and earning",
    text: "You handle inquiries, consult customers, support deals, and earn from vehicle sales in your market.",
    icon: TrendingUp,
  },
  {
    title: "You scale a ready business model",
    text: "As demand grows, you scale sales and strengthen your market presence using FluxCars infrastructure.",
    icon: BriefcaseBusiness,
  },
];

const clientValueItems = [
  {
    title: "Vehicle technical inspection",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Direct access to the Chinese auto market",
    icon: Globe,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Local communication and support",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "A clear purchase process",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Support with payment and delivery",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Access to international supply via a local service",
    icon: Building2,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const faqItems = [
  {
    question: "Is this a franchise or a partner model?",
    answer: "It’s a hybrid model with ready infrastructure for launching a local project.",
  },
  {
    question: "Do I need to hire developers?",
    answer: "No. The website, technical support, and platform development are handled by us.",
  },
  {
    question: "Who updates the vehicle catalog?",
    answer: "We update and manage the catalog.",
  },
  {
    question: "Who handles delivery?",
    answer: "We organize international logistics and vehicle delivery.",
  },
  {
    question: "Can you connect our CRM?",
    answer: "Yes. We integrate the platform with your CRM.",
  },
  {
    question: "Can we run ads through you?",
    answer: "Yes. We set up and manage Google Ads campaigns.",
  },
  {
    question: "How many partners can there be in one region?",
    answer: "Only one. One region — one FluxCars partner.",
  },
];

const contactFields = [
  { label: "Name", name: "name", type: "text", placeholder: "Your name" },
  { label: "Company", name: "company", type: "text", placeholder: "Company name" },
  { label: "Region", name: "region", type: "text", placeholder: "Region" },
  { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
  { label: "Phone / Telegram", name: "phone", type: "text", placeholder: "+1 000 000 0000" },
];

const contactStrings = {
  commentLabel: "Comment",
  commentPlaceholder: "Briefly describe your market, experience, and goals",
  consentText: "I consent to the processing of personal data and to be contacted about my request.",
  consentError: "Please confirm consent to personal data processing.",
  submitHelperText:
    "By clicking the button, you confirm interest in a partnership launch and feedback from FluxCars.",
  submitButton: "Submit request",
  submittingButton: "Sending...",
  submitError: "Failed to send the message.",
  networkError: "Network error. Check your connection and try again.",
  successMessage: "Request sent successfully. We’ll contact you shortly.",
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
            <LanguageSwitch current="en" variant="dark" />
            <div className="hidden sm:block">
              <Button asChild size="lg" className="bg-[var(--luxury-gold)] text-stone-950 hover:bg-[#f0c978]">
              <Link href="#contacts">Become a partner</Link>
            </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="container-shell pt-8 pb-16 sm:pt-12 lg:pt-16">
        <div className="hero-cover">
          <Image
            src="/hero-premium-car.jpg"
            alt="Premium black performance car front view"
            width={1600}
            height={2000}
            priority
            sizes="100vw"
            className="hero-cover__image"
          />
          <div className="relative z-10 grid min-h-[inherit] content-between gap-6 p-5 sm:gap-10 sm:p-9 lg:p-12">
            <div className="max-w-4xl space-y-5 sm:space-y-7">
              <span className="eyebrow">Premium B2B platform for auto businesses</span>
              <h1 className="text-4xl leading-[0.94] font-semibold text-[var(--luxury-cream)] sm:text-7xl lg:text-8xl">
                Launch your auto business with FluxCars
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-200/78 sm:text-xl sm:leading-8">
                A ready-to-launch website, live China vehicle catalog, logistics, payment infrastructure, Google Ads,
                corporate email, and CRM integration in one partner model.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[var(--luxury-gold)] px-8 text-stone-950 hover:bg-[#f0c978]">
                  <Link href="#contacts">
                    Become a partner
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border-[#d8b36a55] bg-stone-950/45 px-8 text-stone-100 hover:bg-stone-900/80">
                  <Link href="#how-it-works">See the model</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="hero-glass-card max-w-xl">
                <p className="text-base leading-7 font-medium text-stone-100 sm:text-lg sm:leading-8">
                  You sell and build the local brand. FluxCars runs the website, catalog updates, logistics,
                  transactions, ads setup, and integrations.
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
        <div className="premium-panel grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-14">
          <SectionHeading
            eyebrow="Why it pays off"
            title="Don’t spend hundreds of thousands to enter the auto business"
          />
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Building a China-car sales project from scratch requires major investment in development, catalog,
            technical support, advertising, international payments, CRM, email, logistics, and operations.
            <br />
            <br />
            FluxCars already brings all of this together in one system. You get a ready foundation to launch and grow
            in your market.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="benefits" className="container-shell section-space">
        <SectionHeading eyebrow="Benefits" title="What a FluxCars partner gets" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
          <SectionHeading eyebrow="Operating model" title="A simple operating model" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden border-[#d8b36a2e]/90 bg-[linear-gradient(165deg,rgba(37,31,23,0.96)_0%,rgba(15,13,10,0.9)_100%)] shadow-[0_24px_60px_rgba(0,0,0,0.24)]">
              <CardHeader>
                <CardTitle className="text-2xl">What FluxCars does</CardTitle>
                <CardDescription className="text-slate-600">Infrastructure, platform, and operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={fluxCarsResponsibilities} />
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-slate-200/90 bg-[linear-gradient(165deg,rgba(255,255,255,0.98)_0%,rgba(246,249,255,0.94)_100%)] shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
              <CardHeader>
                <CardTitle className="text-2xl">What the partner does</CardTitle>
                <CardDescription className="text-slate-600">Local market, customers, and sales growth</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={partnerResponsibilities} />
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 rounded-[28px] bg-slate-950 px-6 py-7 text-lg leading-8 font-medium text-white sm:px-8 sm:text-xl">
            You focus on the market and customers. We handle infrastructure and operations.
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading
          eyebrow="Why they choose"
          title="Fast time to market"
          copy="While others build for years, you can launch promotion quickly and start selling."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
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
        <div className="premium-panel grid gap-10 overflow-hidden p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="space-y-6">
            <span className="eyebrow">Exclusivity</span>
            <h2 className="section-title">One partner for your region</h2>
            <p className="section-copy">
              We don’t sell the same model to multiple players within one market. One region — one FluxCars partner.
            </p>
            <p className="text-lg leading-8 font-medium text-[#d8b36a]">Availability is limited by region.</p>
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
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Who it’s for" title="Who the FluxCars partnership model is for" />
          <div className="overflow-hidden rounded-[34px] border border-[#d9e4ff] bg-[linear-gradient(145deg,#f6fbff_0%,#eef6ff_45%,#f8f4ff_100%)] p-6 shadow-[0_24px_70px_rgba(24,64,140,0.12)] sm:p-8">
            <ul className="grid gap-4 sm:grid-cols-2">
              {audienceItems.map(({ title, icon: Icon, iconWrapClass }) => (
                <li
                  key={title}
                  className="rounded-[24px] border border-white/90 bg-white/80 px-5 py-5 shadow-[0_16px_42px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
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
        <SectionHeading eyebrow="Launch steps" title="How the partnership launches" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                    Launch step
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
        <div className="overflow-hidden rounded-[36px] border border-[#d9e4ff] bg-[linear-gradient(140deg,#f6fbff_0%,#eef6ff_45%,#f7f3ff_100%)] p-8 shadow-[0_28px_90px_rgba(24,64,140,0.12)] sm:p-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-14">
          <SectionHeading
            eyebrow="Customer value"
            title="What your customer gets"
            copy="For the customer it’s a convenient local service. For you it’s a strong international platform behind you."
          />
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {clientValueItems.map(({ title, icon: Icon, iconWrapClass }) => (
                <div
                  key={title}
                  className="rounded-[24px] border border-white/90 bg-white/80 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-0.5"
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
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="premium-panel mt-12 p-6 sm:p-8">
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
                Final step
              </span>
                <h2 className="max-w-4xl text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
                  Launch your auto business with FluxCars
                </h2>
              <p className="max-w-3xl text-base leading-8 text-stone-100/82 sm:text-lg">
                Get a website in the right language, tens of thousands of listings from the Chinese market, an updated
                catalog, international logistics, delivery anywhere in the world, payment infrastructure, corporate
                email, Google Ads, and CRM integration.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-8 font-medium text-white">
                Don’t spend hundreds of thousands to launch from scratch. Use the ready FluxCars platform and focus on
                sales.
              </p>
              <p className="text-lg leading-8 font-medium text-[#f5e6c7]">
                One partner per region. Slots are limited.
              </p>
              <Button asChild size="lg" className="bg-white px-8 text-slate-950 hover:bg-stone-900/70">
                <Link href="#contacts">Get partnership terms</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacts" className="container-shell section-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title">Leave a request and let’s discuss your market launch</h2>
            <p className="section-copy">
              Tell us about your region, company, and project format. We’ll contact you to discuss partnership terms,
              launch, and market exclusivity.
            </p>
            <div className="grid gap-4">
              {[
                { text: "We’ll explain the partnership model and launch terms", icon: PhoneCall },
                { text: "We’ll show how the project infrastructure looks", icon: Building2 },
                { text: "We’ll discuss market exclusivity", icon: ShieldCheck },
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
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">China</h3>
              <p className="text-base leading-7 text-slate-100">+86 150 2112 5206 (WeChat, Viber)</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">About the company</h3>
              <p className="text-base leading-7 text-slate-100">Hefei Accord Import and Export Co., LTD</p>
              <p className="text-sm leading-6 text-slate-300">
                Legal address: Floor 12, 6-9, 11-14, Building B, No. 188, Shangcheng Avenue, Futian District, Yiwu,
                Jinhua City, Zhejiang Province
              </p>
              <p className="text-sm leading-6 text-slate-300">Trade register number: 913 4012 MAE3J 77X26</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">Contact channels</h3>
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
