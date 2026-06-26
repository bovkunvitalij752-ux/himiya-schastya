import type { Metadata } from "next";
import { CalendarCheck, MessageCircleHeart, UsersRound } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Консультации",
};

const formats = [
  {
    title: "Индивидуальная встреча",
    text: "Разбираем личный запрос, эмоциональное состояние и повторяющиеся сценарии.",
    icon: MessageCircleHeart,
  },
  {
    title: "Парная консультация",
    text: "Помогаем услышать друг друга, снизить напряжение и договориться о следующих шагах.",
    icon: UsersRound,
  },
  {
    title: "План сопровождения",
    text: "Собираем маршрут из диагностики, консультаций, упражнений и AI-рекомендаций.",
    icon: CalendarCheck,
  },
];

export default function ConsultationsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Сопровождение"
        title="Консультации для людей, которым важно сохранить связь"
        description="Форматы консультаций рассчитаны на спокойный разбор ситуации, бережную коммуникацию и практические решения."
      />
      <section className="grid gap-4 pb-16 md:grid-cols-3">
        {formats.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft"
          >
            <Icon className="text-coral" size={28} />
            <h2 className="mt-5 text-xl font-semibold text-ink">{title}</h2>
            <p className="mt-3 leading-7 text-neutral-600">{text}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
