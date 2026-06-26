import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-forest/10 bg-white/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© 2026 Химия счастья</p>
        <div className="flex gap-4">
          <Link href="/contacts" className="hover:text-forest">
            Контакты
          </Link>
          <Link href="/diagnostics" className="hover:text-forest">
            Диагностика
          </Link>
        </div>
      </div>
    </footer>
  );
}
