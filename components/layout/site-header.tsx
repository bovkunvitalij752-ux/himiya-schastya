"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "О проекте" },
  { href: "/consultations", label: "Консультации" },
  { href: "/diagnostics", label: "Диагностика" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/contacts", label: "Контакты" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead9be]/70 bg-[#fbf6ec]/82 shadow-[0_18px_70px_rgba(88,56,31,0.08)] backdrop-blur-2xl">
      <div className="mx-auto flex min-h-28 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo onClick={() => setIsOpen(false)} className="transition duration-300 hover:-translate-y-0.5" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-[#6e5848] transition duration-300 hover:bg-white/72 hover:text-[#21150f]",
                  isActive && "bg-white text-[#21150f] shadow-[0_12px_40px_rgba(88,56,31,0.10)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/diagnostics"
            className="rounded-full border border-[#d9bf95] bg-white/50 px-5 py-3 text-sm font-semibold text-[#342217] transition duration-300 hover:bg-white"
          >
            Диагностика
          </Link>
          <Link
            href="/contacts"
            className="group inline-flex items-center gap-2 rounded-full bg-[#21150f] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(33,21,15,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
          >
            Записаться
            <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-[#d9bf95] bg-white/70 text-[#21150f] shadow-[0_14px_40px_rgba(88,56,31,0.10)] lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-[#ead9be] bg-[#fbf6ec]/96 px-4 py-4 shadow-[0_24px_70px_rgba(88,56,31,0.10)] backdrop-blur-2xl lg:hidden"
          aria-label="Мобильная навигация"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold text-[#6e5848] transition hover:bg-white",
                  pathname === item.href && "bg-white text-[#21150f] shadow-[0_12px_40px_rgba(88,56,31,0.10)]",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contacts"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#21150f] px-5 py-3 text-sm font-semibold text-white"
            >
              Записаться
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
