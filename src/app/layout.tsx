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
  title: "FluxCars Partners | Launch a local auto business",
  description:
    "FluxCars partnership model to launch a local business selling cars from China on top of a ready international platform.",
  keywords: [
    "FluxCars",
    "partnership model",
    "cars from China",
    "launch auto business",
    "B2B platform",
    "vehicle catalog",
  ],
  openGraph: {
    title: "FluxCars Partners",
    description:
      "Launch a local auto business with FluxCars: website, catalog, logistics, payment infrastructure, and CRM.",
    url: "https://fluxcars.com",
    siteName: "FluxCars",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FluxCars Partners",
    description:
      "A ready platform to launch a local business selling cars from China.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${montserrat.variable} bg-background font-sans text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
