import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "О проекте",
};

const values = [
  "Научный подход к отношениям без холодности и давления.",
  "Персонализация рекомендаций под контекст пары и семьи.",
  "Этичная работа с чувствительными данными и приватностью.",
  "Практические шаги, которые можно применять в обычной жизни.",
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Миссия"
        title="Помочь людям понимать себя и друг друга глубже"
        description="«Химия счастья» соединяет психологию, коучинг, практики осознанности и искусственный интеллект, чтобы поддерживать пары на пути к устойчивым и теплым отношениям."
      />
      <section className="grid gap-4 pb-16 md:grid-cols-2">
        {values.map((value, index) => (
          <article
            key={value}
            className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft"
          >
            <span className="text-sm font-semibold text-gold">0{index + 1}</span>
            <p className="mt-4 text-lg leading-8 text-ink">{value}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
