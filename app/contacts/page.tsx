import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircleHeart,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Связаться с «Химией счастья»: запись на диагностику, консультацию, сопровождение пары или раннее тестирование AI-платформы.",
};

const requestTypes = [
  {
    title: "Хочу пройти диагностику",
    text: "Подойдёт, если сначала хочется понять текущую динамику отношений.",
    icon: Sparkles,
  },
  {
    title: "Нужна консультация",
    text: "Для личного или парного разговора с понятным следующим шагом.",
    icon: MessageCircleHeart,
  },
  {
    title: "Интересует сопровождение",
    text: "Для тех, кто хочет не одну встречу, а бережный маршрут изменений.",
    icon: CalendarHeart,
  },
];

const nextSteps = [
  "Мы читаем ваш запрос и уточняем контекст",
  "Предлагаем формат: диагностика, консультация или сопровождение",
  "Согласуем удобное время и спокойный первый шаг",
];

export default function ContactsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/60 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              Запись и связь
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Начните с бережного первого сообщения
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Расскажите коротко, что происходит. Мы поможем выбрать формат: диагностику,
              консультацию или сопровождение пары.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@himiya-schastya.ru"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Написать на email
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/diagnostics"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] bg-white/55 px-7 py-4 text-sm font-semibold text-[#342217] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Сначала пройти диагностику
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/66 p-6 shadow-[0_34px_120px_rgba(88,56,31,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="flex items-center justify-between gap-4 border-b border-[#ead9be] pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
                  Contact Flow
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                  Что будет после заявки
                </h2>
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
                <HeartHandshake size={24} />
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[1.5rem] bg-[#fffaf2]/88 p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#21150f] text-sm font-semibold text-[#ffd58c]">
                    0{index + 1}
                  </span>
                  <p className="leading-7 text-[#6e5848]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Выберите сценарий
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Можно прийти с ясным запросом, а можно просто с ощущением, что так дальше тяжело
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {requestTypes.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#ead9be] bg-white/74 p-6 shadow-[0_24px_90px_rgba(88,56,31,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex size-13 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffe7b8,#d98a45)] text-[#2e1a10]">
                  <Icon size={25} />
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-[#6e5848]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="space-y-4">
            <div className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]">
              <Mail className="text-[#d98a45]" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[#23150d]">Email</h3>
              <a
                href="mailto:hello@himiya-schastya.ru"
                className="mt-3 block leading-7 text-[#6e5848] transition hover:text-[#21150f]"
              >
                hello@himiya-schastya.ru
              </a>
            </div>
            <div className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]">
              <MapPin className="text-[#d98a45]" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[#23150d]">Формат</h3>
              <p className="mt-3 leading-7 text-[#6e5848]">Онлайн-консультации и диагностика</p>
            </div>
            <div className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]">
              <Clock3 className="text-[#d98a45]" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[#23150d]">Ответ</h3>
              <p className="mt-3 leading-7 text-[#6e5848]">
                Обычно отвечаем после первичного просмотра запроса.
              </p>
            </div>
          </aside>

          <form className="rounded-[2.5rem] border border-white/70 bg-white/76 p-6 shadow-[0_34px_120px_rgba(88,56,31,0.14)] backdrop-blur-2xl sm:p-8">
            <div className="grid gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
                  Заявка
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#23150d] sm:text-4xl">
                  Расскажите, с чем нужна помощь
                </h2>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[#342217]">
                Имя
                <input
                  className="min-h-13 rounded-2xl border border-[#ead9be] bg-[#fffaf2] px-4 text-base font-normal outline-none transition focus:border-[#d98a45] focus:bg-white"
                  placeholder="Как к вам обращаться"
                />
              </label>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#342217]">
                  Email
                  <input
                    type="email"
                    className="min-h-13 rounded-2xl border border-[#ead9be] bg-[#fffaf2] px-4 text-base font-normal outline-none transition focus:border-[#d98a45] focus:bg-white"
                    placeholder="name@email.com"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#342217]">
                  Формат
                  <select className="min-h-13 rounded-2xl border border-[#ead9be] bg-[#fffaf2] px-4 text-base font-normal outline-none transition focus:border-[#d98a45] focus:bg-white">
                    <option>Диагностика отношений</option>
                    <option>Индивидуальная консультация</option>
                    <option>Парная консультация</option>
                    <option>План сопровождения</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[#342217]">
                Что сейчас происходит
                <textarea
                  className="min-h-40 rounded-2xl border border-[#ead9be] bg-[#fffaf2] p-4 text-base font-normal leading-7 outline-none transition focus:border-[#d98a45] focus:bg-white"
                  placeholder="Можно написать коротко: что беспокоит, чего хочется, какой формат вам ближе."
                />
              </label>

              <button
                type="button"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Отправить заявку
                <Send size={18} className="transition duration-300 group-hover:translate-x-1" />
              </button>
              <p className="text-sm leading-6 text-[#6e5848]">
                Форма подготовлена для будущего подключения Supabase. Пока можно написать напрямую
                на email.
              </p>
            </div>
          </form>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
                Доверие
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Вы можете написать без идеальной формулировки
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Запрос можно описать коротко и простыми словами",
                "Мы не оцениваем и не ищем виноватого",
                "Чувствительная информация обрабатывается бережно",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#ffd58c]" size={22} />
                  <span className="leading-7 text-white/82">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ead9be] bg-white/76 p-8 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                <ShieldCheck size={16} />
                Не знаете, с чего начать?
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Начните с диагностики, если пока сложно сформулировать запрос
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Она поможет увидеть картину отношений и понять, какой формат поддержки нужен.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/diagnostics"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Пройти диагностику
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/consultations"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] px-7 py-4 text-sm font-semibold text-[#342217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8ea]"
              >
                Посмотреть консультации
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
