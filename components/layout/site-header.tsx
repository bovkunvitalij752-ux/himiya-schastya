"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-[#fbfaf7]/90 backdrop-blur">
      <div className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-forest text-sm font-bold text-white">
            ХС
          </span>
          <span className="font-semibold text-ink">Химия счастья</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition hover:bg-white hover:text-forest",
                pathname === item.href && "bg-white text-forest shadow-sm",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-forest/15 bg-white text-forest md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-forest/10 bg-white px-4 py-3 md:hidden"
          aria-label="Мобильная навигация"
        >
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-medium text-neutral-700",
                  pathname === item.href && "bg-mist text-forest",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
