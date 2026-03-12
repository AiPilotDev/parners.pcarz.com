import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Montserrat } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fluxcars.com"),
  title: "FluxCars Partners | Запуск локального авто-бизнеса",
  description:
    "Партнерская модель FluxCars для запуска локального бизнеса по продаже автомобилей из Китая на готовой международной платформе.",
  keywords: [
    "FluxCars",
    "партнерская модель",
    "авто из Китая",
    "запуск авто-бизнеса",
    "B2B платформа",
    "автомобили из Китая",
  ],
  openGraph: {
    title: "FluxCars Partners",
    description:
      "Запустите локальный авто-бизнес на базе FluxCars: сайт, каталог, логистика, платежная инфраструктура и CRM.",
    url: "https://fluxcars.com",
    siteName: "FluxCars",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxCars Partners",
    description:
      "Готовая платформа для запуска локального бизнеса по продаже автомобилей из Китая.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${manrope.variable} ${montserrat.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
