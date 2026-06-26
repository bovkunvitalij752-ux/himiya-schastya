import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Отзывы",
};

const reviews = [
  {
    name: "Анна и Михаил",
    text: "Мы впервые смогли спокойно обсудить то, что раньше сразу превращалось в спор.",
  },
  {
    name: "Елена",
    text: "Диагностика помогла увидеть, где я додумывала за партнера, а где правда нужен разговор.",
  },
  {
    name: "Игорь",
    text: "Понравилось, что рекомендации были конкретными, без ощущения лекции или оценки.",
  },
];

export default function ReviewsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Опыт пользователей"
        title="Истории людей, которые начали говорить друг с другом иначе"
        description="Отзывы ниже показывают тональность продукта: меньше обвинений, больше ясности, уважения и практических действий."
      />
      <section className="grid gap-4 pb-16 md:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name}
            className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft"
          >
            <p className="leading-8 text-neutral-700">“{review.text}”</p>
            <p className="mt-5 font-semibold text-forest">{review.name}</p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
