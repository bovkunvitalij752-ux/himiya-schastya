import { ArrowRight, BrainCircuit, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

const pillars = [
  {
    title: "Диагностика отношений",
    text: "Понимаем динамику пары, сильные стороны, повторяющиеся конфликты и зоны роста.",
    icon: BrainCircuit,
  },
  {
    title: "AI-рекомендации",
    text: "Персональные шаги, упражнения и сценарии разговоров на основе контекста семьи.",
    icon: Sparkles,
  },
  {
    title: "Этичная поддержка",
    text: "Платформа помогает принимать решения, сохраняя приватность, уважение и границы.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="grid gap-10 py-14 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-20">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-coral">
            AI-платформа для отношений
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Химия счастья
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
            Создаем цифрового помощника для людей, которые хотят понимать друг друга глубже,
            выходить из конфликтов спокойнее и строить крепкие семьи.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/diagnostics"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-ink"
            >
              Начать диагностику
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/consultations"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-forest/20 px-5 py-3 text-sm font-semibold text-forest transition hover:border-forest/50 hover:bg-white"
            >
              Записаться на консультацию
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
          <div className="rounded-md bg-mist p-5">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-md bg-coral text-white">
                <HeartHandshake size={24} />
              </div>
              <div>
                <p className="text-sm text-neutral-500">Индекс устойчивости пары</p>
                <p className="text-2xl font-semibold text-ink">82%</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {["Эмоциональная близость", "Коммуникация", "Совместные цели"].map((item, index) => (
                <div key={item}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-ink">{item}</span>
                    <span className="text-neutral-500">{[88, 74, 83][index]}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white">
                    <div
                      className="h-2 rounded-full bg-forest"
                      style={{ width: `${[88, 74, 83][index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 pb-16 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft"
          >
            <Icon className="text-coral" size={26} />
            <h2 className="mt-5 text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-3 leading-7 text-neutral-600">{text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
