import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { PageHeading } from "@/components/ui/page-heading";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Связь"
        title="Обсудим, как «Химия счастья» может помочь вашему запросу"
        description="Оставьте обращение для консультации, партнерства или участия в раннем тестировании платформы."
      />
      <section className="grid gap-6 pb-16 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
          <div className="space-y-5">
            <p className="flex items-center gap-3 text-neutral-700">
              <Mail className="text-coral" size={20} />
              hello@himiya-schastya.ru
            </p>
            <p className="flex items-center gap-3 text-neutral-700">
              <MapPin className="text-coral" size={20} />
              Онлайн-консультации
            </p>
          </div>
        </div>

        <form className="rounded-lg border border-forest/10 bg-white p-6 shadow-soft">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-ink">
              Имя
              <input className="min-h-12 rounded-md border border-forest/15 px-3 outline-none focus:border-forest" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Email
              <input
                type="email"
                className="min-h-12 rounded-md border border-forest/15 px-3 outline-none focus:border-forest"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-ink">
              Сообщение
              <textarea className="min-h-32 rounded-md border border-forest/15 p-3 outline-none focus:border-forest" />
            </label>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Отправить
              <Send size={18} />
            </button>
          </div>
        </form>
      </section>
    </PageShell>
  );
}
