import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pСarz Partners",
  description:
    "Премиальная партнерская платформа для запуска локального бизнеса по продаже автомобилей из Китая под брендом партнера.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
