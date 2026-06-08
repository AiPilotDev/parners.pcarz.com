import Link from "next/link";

import { cn } from "@/lib/utils";

type LanguageSwitchProps = {
  current: "ru" | "en" | "es";
  variant?: "light" | "dark";
};

const flags = {
  ru: (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect width="24" height="8" fill="#ffffff" />
      <rect y="8" width="24" height="8" fill="#1c57d6" />
      <rect y="16" width="24" height="8" fill="#d5242a" />
      <rect width="24" height="24" fill="none" className="stroke-slate-200/70" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect width="24" height="24" fill="#1e3a8a" />
      <path d="M0 0h3l21 15v3h-3L0 3zM24 0h-3L0 15v3h3L24 3z" fill="#ffffff" />
      <path d="M0 0h2l22 16v2h-2L0 2zM24 0h-2L0 16v2h2L24 2z" fill="#dc2626" />
      <rect x="10" width="4" height="24" fill="#ffffff" />
      <rect y="10" width="24" height="4" fill="#ffffff" />
      <rect x="11" width="2" height="24" fill="#dc2626" />
      <rect y="11" width="24" height="2" fill="#dc2626" />
      <rect width="24" height="24" fill="none" className="stroke-slate-200/70" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <rect width="24" height="24" fill="#c61a1a" />
      <rect y="6" width="24" height="12" fill="#f6c300" />
      <rect width="24" height="24" fill="none" className="stroke-slate-200/70" />
    </svg>
  ),
} as const;

const options = [
  { code: "en", label: "EN", href: "/", title: "English" },
  { code: "es", label: "ES", href: "/es", title: "Español" },
  { code: "ru", label: "RU", href: "/ru", title: "Русский" },
] as const;

export function LanguageSwitch({ current, variant = "light" }: LanguageSwitchProps) {
  const isDark = variant === "dark";
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full p-1",
        isDark
          ? "border border-[#d8b36a33] bg-stone-950/70 shadow-[0_14px_36px_rgba(0,0,0,0.2)]"
          : "border border-[#d8b36a33] bg-stone-950/70 shadow-[0_14px_36px_rgba(0,0,0,0.2)]"
      )}
    >
      {options.map((option) => (
        <Link
          key={option.code}
          href={option.href}
          aria-label={`Switch language to ${option.title}`}
          title={option.title}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] transition",
            current === option.code
              ? "bg-[#d8b36a] text-stone-950 shadow-[0_10px_24px_rgba(216,179,106,0.3)]"
              : isDark
                ? "text-stone-300 hover:bg-white/10 hover:text-white"
                : "text-stone-300 hover:bg-white/10 hover:text-white"
          )}
        >
          <span className="text-base leading-none">{flags[option.code]}</span>
          <span>{option.label}</span>
        </Link>
      ))}
    </div>
  );
}
