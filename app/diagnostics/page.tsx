import type { Metadata } from "next";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  HeartHandshake,
  Infinity,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI-диагностика совместимости",
  description:
    "Предварительная AI-диагностика совместимости пары: число сознания, число миссии, миссия пары, сценарии общения и рекомендации для отношений.",
};

const analysisModules = [
  {
    title: "Число сознания",
    text: "Показывает внутренний ритм человека, его способ воспринимать мир, реагировать на события и принимать решения.",
    icon: BrainCircuit,
  },
  {
    title: "Число миссии",
    text: "Помогает увидеть главную задачу личности, направление роста и повторяющиеся жизненные уроки.",
    icon: Sparkles,
  },
  {
    title: "Миссия пары",
    text: "Соединяет две карты и показывает, ради чего отношения могут раскрывать силу, зрелость и общий смысл.",
    icon: HeartHandshake,
  },
  {
    title: "Глубокая совместимость",
    text: "Смотрит не только общий процент, но и диалог, быт, деньги, конфликтные сценарии и эмоциональную близость.",
    icon: Infinity,
  },
];

const reportBlocks = [
  "Мировоззрение каждого партнёра",
  "Сильные стороны пары",
  "Зоны напряжения и повторяющиеся конфликты",
  "Семейная миссия и общий вектор",
  "Практики для бережного разговора",
  "План действий на ближайшие 7 дней",
];

const sampleSignals = [
  { label: "Сознание", value: "8 / 10", tone: "Сила и ответственность" },
  { label: "Миссия", value: "6 / 9", tone: "Забота, красота и мудрость" },
  { label: "Диалог", value: "74%", tone: "Есть потенциал для мягкой настройки" },
];

export default function DiagnosticsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,213,140,0.35),transparent_34%),linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/62 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              AI-платформа глубокой совместимости
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Диагностика совместимости пары
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Первый продуктовый экран будущего AI-движка «Химии счастья»: соединяем данные двух людей, цифровые
              расчёты, психологию отношений и бережную интерпретацию на человеческом языке.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {sampleSignals.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-[#ead9be] bg-white/72 p-4 shadow-[0_18px_60px_rgba(88,56,31,0.08)] backdrop-blur-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b87835]">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#23150d]">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-[#6e5848]">{item.tone}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/70 p-5 shadow-[0_34px_120px_rgba(88,56,31,0.14)] backdrop-blur-2xl sm:p-7">
            <div className="flex items-center justify-between gap-4 border-b border-[#ead9be] pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">Compatibility Form</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                  Введите данные двух партнёров
                </h2>
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
                <UsersRound size={24} />
              </div>
            </div>

            <form className="mt-6 grid gap-5">
              <div className="grid gap-4 md:grid-cols-2">
                <PartnerField title="Партнёр 1" namePlaceholder="Имя или псевдоним" />
                <PartnerField title="Партнёр 2" namePlaceholder="Имя или псевдоним" />
              </div>

              <label className="grid gap-2 text-sm font-semibold text-[#342217]">
                Что сейчас важно понять в отношениях?
                <textarea
                  rows={4}
                  placeholder="Например: часто спорим, сложно договариваться, хочется понять совместимость и общий вектор."
                  className="resize-none rounded-[1.5rem] border border-[#ead9be] bg-[#fffaf2] px-4 py-3 text-base font-normal leading-7 outline-none transition focus:border-[#d98a45] focus:bg-white"
                />
              </label>

              <div className="rounded-[1.5rem] border border-[#ead9be] bg-[#fff7e8] p-4">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 shrink-0 text-[#b87835]" size={22} />
                  <p className="text-sm leading-6 text-[#6e5848]">
                    Отчёт является инструментом самонаблюдения и не заменяет медицинскую, психологическую, финансовую
                    или юридическую консультацию.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Получить предварительный разбор
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">Что рассчитывает система</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Не сухой процент, а карта отношений
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {analysisModules.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#ead9be] bg-white/76 p-6 shadow-[0_24px_90px_rgba(88,56,31,0.09)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#fff2d8] text-[#b87835]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">{title}</h3>
                <p className="mt-4 leading-7 text-[#6e5848]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">Будущий отчёт</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              AI объяснит, как двум людям лучше слышать друг друга
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Расчётный слой даст числа и связи, а AI-слой превратит их в понятный отчёт: что усиливает пару, где
              появляются риски и какой первый шаг лучше сделать без давления.
            </p>
          </div>

          <div className="grid gap-3">
            {reportBlocks.map((item) => (
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
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ead9be] bg-white/76 p-8 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                <MessageCircleHeart size={16} />
                Следующий этап продукта
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Подключим реальные формулы из приложения и сделаем первый рабочий расчёт
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Эта страница уже показывает будущую механику. Дальше мы можем перенести расчёты из APK или исходного
                кода приложения и превратить форму в настоящий интерактивный прототип.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Записаться на разбор
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] px-7 py-4 text-sm font-semibold text-[#342217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8ea]"
              >
                Узнать философию проекта
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PartnerField({
  title,
  namePlaceholder,
}: {
  title: string;
  namePlaceholder: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-[#ead9be] bg-[#fffaf2]/82 p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-[#342217]">
        <UsersRound size={17} className="text-[#b87835]" />
        {title}
      </p>
      <div className="mt-4 grid gap-3">
        <input
          type="text"
          placeholder={namePlaceholder}
          className="min-h-12 rounded-2xl border border-[#ead9be] bg-white px-4 text-base outline-none transition focus:border-[#d98a45]"
        />
        <label className="relative block">
          <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b87835]" size={18} />
          <input
            type="date"
            className="min-h-12 w-full rounded-2xl border border-[#ead9be] bg-white px-4 pl-11 text-base outline-none transition focus:border-[#d98a45]"
          />
        </label>
        <select className="min-h-12 rounded-2xl border border-[#ead9be] bg-white px-4 text-base outline-none transition focus:border-[#d98a45]">
          <option>Фокус: отношения</option>
          <option>Фокус: семья</option>
          <option>Фокус: конфликт</option>
          <option>Фокус: совместная миссия</option>
        </select>
      </div>
    </div>
  );
}
