import { ArrowRight, HeartHandshake, Mail } from "lucide-react";
import Link from "next/link";

const productLinks = [
  { href: "/diagnostics", label: "Диагностика" },
  { href: "/consultations", label: "Консультации" },
  { href: "/reviews", label: "Отзывы" },
];

const companyLinks = [
  { href: "/about", label: "О проекте" },
  { href: "/contacts", label: "Контакты" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#21150f] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_34px_120px_rgba(33,21,15,0.28)] backdrop-blur-xl">
        <div className="grid gap-10 border-b border-white/10 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:p-10">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-[#21150f]">
                <HeartHandshake size={22} />
              </span>
              <span className="grid leading-tight">
                <span className="text-base font-semibold tracking-[-0.02em]">Химия счастья</span>
                <span className="text-xs font-medium text-white/58">AI для отношений</span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
              Платформа для диагностики отношений, консультаций и бережного сопровождения пар
              с помощью психологии, осознанности и искусственного интеллекта.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffd58c]">
              Продукт
            </h2>
            <div className="mt-5 grid gap-3">
              {productLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/68 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffd58c]">
              Компания
            </h2>
            <div className="mt-5 grid gap-3">
              {companyLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/68 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffd58c]">
              Связь
            </h2>
            <a
              href="mailto:hello@himiya-schastya.ru"
              className="mt-5 flex items-center gap-3 text-sm text-white/68 transition hover:text-white"
            >
              <Mail size={18} />
              hello@himiya-schastya.ru
            </a>
            <Link
              href="/contacts"
              className="group mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#21150f] transition duration-300 hover:bg-[#ffe2a8]"
            >
              Записаться
              <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 py-5 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 Химия счастья. Все права защищены.</p>
          <p>Создаём культуру осознанных отношений.</p>
        </div>
      </div>
    </footer>
  );
}
