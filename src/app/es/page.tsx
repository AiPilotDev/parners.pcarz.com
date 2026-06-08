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
  title: "FluxCars | Modelo de alianza para lanzar un negocio automotriz",
  description:
    "Lanza un negocio local de venta de autos desde China con FluxCars: website, catálogo, logística, infraestructura de pagos, Google Ads y CRM.",
};

const navItems = [
  { label: "Beneficios", href: "#benefits", icon: Sparkles },
  { label: "Cómo funciona", href: "#how-it-works", icon: Settings2 },
  { label: "Para quién", href: "#for-whom", icon: Users },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Contacto", href: "#contacts", icon: Mail },
];

const heroBullets = [
  "Decenas de miles de autos en tu website",
  "Entrega a cualquier parte del mundo",
  "Un socio exclusivo por región",
  "Sin costos de lanzamiento de seis cifras",
];

const launchStackItems = [
  {
    title: "Plataforma localizada para tu región",
    icon: Globe,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_24px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Acceso a más de 100.000 vehículos directamente desde China",
    icon: CarFront,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_24px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Herramientas de generación de leads y publicidad",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_24px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Logística y entrega internacional",
    icon: Plane,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_24px_rgba(51,65,85,0.2)]",
  },
];

const benefitCards = [
  {
    title: "Website lista para tu mercado",
    text: "Lanzamos una website en el idioma correcto, adaptada a tu región y audiencia.",
    icon: Globe,
  },
  {
    title: "Decenas de miles de ofertas desde China",
    text: "Tu website muestra decenas de miles de ofertas actuales. Nosotros gestionamos la actualización del catálogo.",
    icon: CarFront,
  },
  {
    title: "Entrega a cualquier parte del mundo",
    text: "Gestionamos la logística internacional y organizamos la entrega de vehículos en todo el mundo.",
    icon: Globe,
  },
  {
    title: "Infraestructura de pagos",
    text: "Ayudamos a construir un esquema operativo de pagos internacionales con clientes.",
    icon: ShieldCheck,
  },
  {
    title: "Correo corporativo",
    text: "Configuramos el correo corporativo en tu dominio para que el proyecto se vea profesional desde el día uno.",
    icon: Mail,
  },
  {
    title: "Configuración y gestión de Google Ads",
    text: "Lanzamos y gestionamos campañas en Google para que empieces a recibir consultas antes.",
    icon: Sparkles,
  },
  {
    title: "Integración con CRM",
    text: "Conectamos la plataforma con tu CRM para que los leads y ventas entren directamente a tu sistema.",
    icon: Building2,
  },
  {
    title: "Soporte técnico y actualizaciones",
    text: "Mantenemos y evolucionamos la plataforma. No necesitas un equipo de desarrollo propio.",
    icon: BadgeCheck,
  },
];

const fluxCarsResponsibilities = [
  {
    title: "Aporta la website y la plataforma",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Publica y actualiza el catálogo",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Mantiene y desarrolla el sistema",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Ayuda con la infraestructura de pagos",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Organiza la logística y la entrega internacional",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Conecta email, publicidad y CRM",
    icon: Mail,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const partnerResponsibilities = [
  {
    title: "Promueve el proyecto en su mercado",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Gestiona las consultas entrantes",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Asesora a los clientes",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Acompaña al comprador",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Desarrolla la marca local",
    icon: Globe,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Impulsa ventas y escala el negocio",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const reasons = [
  {
    title: "Una plataforma web para lanzar",
    text: "Desde el día uno entras al mercado con una plataforma tecnológica y una gran selección de vehículos.",
    icon: Building2,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Una base lista para operar",
    text: "Obtienes un sistema completo: website, logística, infraestructura de pagos, publicidad e integración con CRM.",
    icon: Database,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Enfócate en ventas, no en tecnología",
    text: "Para entrar al mercado no necesitas crear desarrollo, integraciones y operaciones por tu cuenta.",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Haz crecer tu propia marca",
    text: "Con el tiempo construyes marca local, tráfico, CRM, base de leads y reconocimiento en tu mercado.",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const exclusivityItems = [
  {
    title: "Sin competencia interna en la red",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Exclusividad por mercado",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Un incentivo claro para invertir en marca y promoción",
    icon: TrendingUp,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Número limitado de cupos",
    icon: Sparkles,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const audienceItems = [
  {
    title: "Emprendedores que quieren entrar rápido en el nicho de autos desde China",
    icon: BriefcaseBusiness,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Vendedores locales y empresas con experiencia en ventas",
    icon: Building2,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Equipos de marketing que saben generar leads",
    icon: Megaphone,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Quienes quieren lanzar un proyecto automotriz sin desarrollo interno complejo",
    icon: Settings2,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Quienes conocen su mercado y quieren construir una marca local fuerte",
    icon: Globe,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const steps = [
  {
    title: "Analizamos tu mercado y el formato de lanzamiento",
    text: "Definimos la mejor forma de lanzar en tu región: idioma de la website, posicionamiento, modelo de cliente y promoción.",
    icon: Search,
  },
  {
    title: "Preparamos la infraestructura",
    text: "Lanzamos la website, conectamos correo corporativo, CRM y herramientas clave para gestionar consultas.",
    icon: Settings2,
  },
  {
    title: "Poblamos el catálogo",
    text: "Publicamos decenas de miles de ofertas del mercado chino y mantenemos el catálogo actualizado.",
    icon: Database,
  },
  {
    title: "Activamos la captación de clientes",
    text: "Ayudamos a lanzar la promoción en tu mercado y apoyamos la parte técnica y operativa del proyecto.",
    icon: Megaphone,
  },
  {
    title: "Empiezas a vender y generar ingresos",
    text: "Gestionas las consultas, asesoras clientes, acompañas las ventas y generas ingresos en tu mercado.",
    icon: TrendingUp,
  },
  {
    title: "Escalas un modelo de negocio listo",
    text: "A medida que crece la demanda, escalas ventas y refuerzas tu presencia usando la infraestructura de FluxCars.",
    icon: BriefcaseBusiness,
  },
];

const clientValueItems = [
  {
    title: "Inspección técnica del vehículo",
    icon: ShieldCheck,
    iconWrapClass:
      "border border-[#f3e2bf] bg-[linear-gradient(145deg,#fffaf0_0%,#f7e7c6_100%)] text-[#8b5b10] shadow-[0_10px_22px_rgba(170,120,30,0.2)]",
  },
  {
    title: "Acceso directo al mercado automotriz chino",
    icon: Globe,
    iconWrapClass:
      "border border-[#cfd8ff] bg-[linear-gradient(145deg,#f6f9ff_0%,#dbe7ff_100%)] text-[#2348a6] shadow-[0_10px_22px_rgba(35,72,166,0.2)]",
  },
  {
    title: "Comunicación y acompañamiento local",
    icon: PhoneCall,
    iconWrapClass:
      "border border-[#d8efe0] bg-[linear-gradient(145deg,#f4fcf8_0%,#d6f3e3_100%)] text-[#1a7a4d] shadow-[0_10px_22px_rgba(26,122,77,0.2)]",
  },
  {
    title: "Un proceso de compra claro",
    icon: BadgeCheck,
    iconWrapClass:
      "border border-[#d7deec] bg-[linear-gradient(145deg,#f8fafd_0%,#e5ebf6_100%)] text-[#334155] shadow-[0_10px_22px_rgba(51,65,85,0.2)]",
  },
  {
    title: "Apoyo con pago y entrega",
    icon: Plane,
    iconWrapClass:
      "border border-[#cde8f8] bg-[linear-gradient(145deg,#f0faff_0%,#d9f0ff_100%)] text-[#145587] shadow-[0_10px_22px_rgba(20,85,135,0.2)]",
  },
  {
    title: "Acceso a suministro internacional vía un servicio local",
    icon: Building2,
    iconWrapClass:
      "border border-[#e3dbff] bg-[linear-gradient(145deg,#f8f5ff_0%,#ebe4ff_100%)] text-[#5a36a3] shadow-[0_10px_22px_rgba(90,54,163,0.2)]",
  },
];

const faqItems = [
  {
    question: "¿Es una franquicia o un modelo de alianza?",
    answer: "Es un modelo híbrido con infraestructura lista para lanzar un proyecto local.",
  },
  {
    question: "¿Necesito contratar desarrolladores?",
    answer: "No. La website, el soporte técnico y el desarrollo de la plataforma están de nuestro lado.",
  },
  {
    question: "¿Quién actualiza el catálogo de vehículos?",
    answer: "Nosotros actualizamos y gestionamos el catálogo.",
  },
  {
    question: "¿Quién se encarga de la entrega?",
    answer: "Organizamos la logística internacional y la entrega de vehículos.",
  },
  {
    question: "¿Pueden conectar nuestro CRM?",
    answer: "Sí. Integramos la plataforma con tu CRM.",
  },
  {
    question: "¿Podemos hacer publicidad con ustedes?",
    answer: "Sí. Configuramos y gestionamos campañas de Google Ads.",
  },
  {
    question: "¿Cuántos socios puede haber en una región?",
    answer: "Solo uno. Una región — un socio FluxCars.",
  },
];

const contactFields = [
  { label: "Nombre", name: "name", type: "text", placeholder: "Tu nombre" },
  { label: "Empresa", name: "company", type: "text", placeholder: "Nombre de la empresa" },
  { label: "Región", name: "region", type: "text", placeholder: "Región" },
  { label: "Email", name: "email", type: "email", placeholder: "name@company.com" },
  { label: "Teléfono / Telegram", name: "phone", type: "text", placeholder: "+34 600 000 000" },
];

const contactStrings = {
  commentLabel: "Comentario",
  commentPlaceholder: "Describe brevemente tu mercado, experiencia y objetivo",
  consentText: "Acepto el tratamiento de datos personales y el contacto sobre mi solicitud.",
  consentError: "Por favor confirma el consentimiento para el tratamiento de datos personales.",
  submitHelperText:
    "Al hacer clic en el botón, confirmas interés en el lanzamiento en alianza y en recibir contacto de FluxCars.",
  submitButton: "Enviar solicitud",
  submittingButton: "Enviando...",
  submitError: "No se pudo enviar el mensaje.",
  networkError: "Error de red. Verifica tu conexión e inténtalo de nuevo.",
  successMessage: "Solicitud enviada con éxito. Nos pondremos en contacto contigo pronto.",
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
            <LanguageSwitch current="es" variant="dark" />
            <div className="hidden sm:block">
              <Button asChild size="lg" className="bg-[var(--luxury-gold)] text-stone-950 hover:bg-[#f0c978]">
              <Link href="#contacts">Convertirse en socio</Link>
            </Button>
            </div>
          </div>
        </div>
      </header>

      <section id="top" className="container-shell pt-6 pb-8 sm:pt-10 lg:pt-12">
        <div className="hero-cover">
          <Image
            src="/hero-premium-car.jpg"
            alt="Vista frontal de un auto premium negro"
            width={1600}
            height={2000}
            priority
            sizes="100vw"
            className="hero-cover__image"
          />
          <div className="relative z-10 grid min-h-[inherit] content-between gap-6 p-5 sm:gap-10 sm:p-9 lg:p-12">
            <div className="max-w-4xl space-y-5 sm:space-y-7">
              <span className="eyebrow">Plataforma B2B premium para negocios automotrices</span>
              <h1 className="text-4xl leading-[0.94] font-semibold text-[var(--luxury-cream)] sm:text-7xl lg:text-8xl">
                Lanza tu negocio automotriz con FluxCars
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-200/78 sm:text-xl sm:leading-8">
                Una website lista para lanzar en tu idioma, catálogo vivo de vehículos desde China, logística,
                infraestructura de pagos, Google Ads, correo corporativo e integración con CRM en un solo modelo.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-[var(--luxury-gold)] px-8 text-stone-950 hover:bg-[#f0c978]">
                  <Link href="#contacts">
                    Convertirse en socio
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="border-[#d8b36a55] bg-stone-950/45 px-8 text-stone-100 hover:bg-stone-900/80">
                  <Link href="#how-it-works">Ver el modelo</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div className="hero-glass-card max-w-xl">
                <p className="text-base leading-7 font-medium text-stone-100 sm:text-lg sm:leading-8">
                  Tú vendes y construyes la marca local. FluxCars opera la website, el catálogo, la logística,
                  las transacciones, la publicidad y las integraciones.
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
            eyebrow="Por qué conviene"
            title="No gastes cientos de miles para entrar al negocio automotriz"
          />
          <p className="text-base leading-8 text-slate-600 sm:text-lg">
            Crear desde cero un proyecto de venta de autos de China requiere una gran inversión en desarrollo, catálogo,
            soporte técnico, publicidad, pagos internacionales, CRM, email, logística y operaciones.
            <br />
            <br />
            FluxCars ya integra todo esto en un solo sistema. Obtienes una base lista para lanzar y crecer en tu mercado.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id="benefits" className="container-shell section-space">
        <SectionHeading eyebrow="Beneficios" title="Lo que obtiene un socio de FluxCars" />
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
          <SectionHeading eyebrow="Modelo operativo" title="Un modelo operativo simple" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="operating-card overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Qué hace FluxCars</CardTitle>
                <CardDescription className="text-slate-600">Infraestructura, plataforma y operaciones</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={fluxCarsResponsibilities} />
              </CardContent>
            </Card>
            <Card className="operating-card operating-card--partner overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl">Qué hace el socio</CardTitle>
                <CardDescription className="text-slate-600">Mercado local, clientes y crecimiento de ventas</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsibilityList items={partnerResponsibilities} />
              </CardContent>
            </Card>
          </div>
          <div className="operating-summary mt-8 rounded-[28px] px-6 py-7 text-lg leading-8 font-medium sm:px-8 sm:text-xl">
            You focus on the market and customers. We handle infrastructure and operations.
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-space">
        <SectionHeading
          eyebrow="Por qué eligen"
          title="Salida rápida al mercado"
          copy="Mientras otros construyen durante años, tú puedes lanzar promoción rápido y empezar a vender."
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
            <span className="eyebrow">Exclusividad</span>
            <h2 className="section-title">Un socio por región</h2>
            <p className="section-copy">
              No vendemos el mismo modelo a varios jugadores dentro de un mismo mercado. Una región — un socio FluxCars.
            </p>
            <p className="text-lg leading-8 font-medium text-[#d8b36a]">La disponibilidad está limitada por región.</p>
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
          <SectionHeading eyebrow="Para quién" title="Para quién es el modelo de alianza FluxCars" />
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
        <SectionHeading eyebrow="Pasos de lanzamiento" title="Cómo se lanza la alianza" />
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
                    Paso de lanzamiento
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
            eyebrow="Valor para el cliente"
            title="Qué obtiene tu cliente"
            copy="Para el cliente es un servicio local cómodo. Para ti es una plataforma internacional sólida detrás."
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
        <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />
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
                Paso final
              </span>
                <h2 className="max-w-4xl text-4xl leading-[1.02] font-semibold sm:text-5xl lg:text-6xl">
                  Lanza tu negocio automotriz con FluxCars
                </h2>
              <p className="max-w-3xl text-base leading-8 text-stone-100/82 sm:text-lg">
                Obtén una website en el idioma correcto, decenas de miles de ofertas del mercado chino, un catálogo
                actualizado, logística internacional, entrega a cualquier parte del mundo, infraestructura de pagos,
                correo corporativo, Google Ads e integración con CRM.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-8 font-medium text-white">
                No gastes cientos de miles para lanzar desde cero. Usa la plataforma FluxCars lista y enfócate en las
                ventas.
              </p>
              <p className="text-lg leading-8 font-medium text-[#f5e6c7]">
                Un socio por región. Los cupos son limitados.
              </p>
              <Button asChild size="lg" className="bg-white px-8 text-slate-950 hover:bg-stone-900/70">
                <Link href="#contacts">Obtener condiciones de alianza</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="contacts" className="container-shell section-space pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6">
            <span className="eyebrow">Contacto</span>
            <h2 className="section-title">Deja una solicitud y hablemos del lanzamiento en tu mercado</h2>
            <p className="section-copy">
              Cuéntanos sobre tu región, empresa y formato del proyecto. Te contactaremos para hablar de las condiciones
              de la alianza, el lanzamiento y la exclusividad del mercado.
            </p>
            <div className="grid gap-4">
              {[
                { text: "Explicamos el modelo de alianza y las condiciones de lanzamiento", icon: PhoneCall },
                { text: "Mostramos cómo luce la infraestructura del proyecto", icon: Building2 },
                { text: "Hablamos de exclusividad de mercado", icon: ShieldCheck },
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
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">Sobre la empresa</h3>
              <p className="text-base leading-7 text-slate-100">Hefei Accord Import and Export Co., LTD</p>
              <p className="text-sm leading-6 text-slate-300">
                Legal address: Floor 12, 6-9, 11-14, Building B, No. 188, Shangcheng Avenue, Futian District, Yiwu,
                Jinhua City, Zhejiang Province
              </p>
              <p className="text-sm leading-6 text-slate-300">Trade register number: 913 4012 MAE3J 77X26</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-[0.16em] text-[#ead3a1] uppercase">Canales de contacto</h3>
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
