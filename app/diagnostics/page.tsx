import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Диагностика отношений",
};

const stages = [
  "Контекст пары и история отношений",
  "Коммуникация, конфликты и доверие",
  "Ценности, роли и ожидания",
  "Персональные рекомендации и упражнения",
];

export default function DiagnosticsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Диагностика"
        title="Понимание отношений начинается с ясной картины"
        description="Диагностика помогает увидеть не только проблему, но и ресурсы пары: что уже работает, где есть напряжение и какие действия дадут лучший эффект."
      />
      <section className="pb-16">
        <div className="rounded-lg border border-forest/10 bg-white p-5 shadow-soft">
          <div className="grid gap-3 md:grid-cols-4">
            {stages.map((stage, index) => (
              <div key={stage} className="rounded-md bg-mist p-5">
                <span className="text-sm font-semibold text-coral">Шаг {index + 1}</span>
                <h2 className="mt-3 text-lg font-semibold leading-7 text-ink">{stage}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
