import type { Metadata } from "next";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  HeartPulse,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Диагностика отношений",
  description:
    "Бережная AI-диагностика отношений: эмоциональная близость, доверие, конфликты, ценности и персональные рекомендации.",
};

const signals = [
  {
    title: "Эмоциональная близость",
    value: "82%",
    text: "Насколько партнёры чувствуют тепло, поддержку и интерес друг к другу.",
  },
  {
    title: "Коммуникация",
    value: "67%",
    text: "Как пара обсуждает сложные темы, слышит просьбы и выдерживает напряжение.",
  },
  {
    title: "Доверие",
    value: "74%",
    text: "Уровень безопасности, предсказуемости и честности в контакте.",
  },
  {
    title: "Сценарии конфликтов",
    value: "59%",
    text: "Повторяющиеся циклы: защита, молчание, критика, уход от разговора.",
  },
];

const process = [
  "Мягкие вопросы о текущей ситуации и истории пары",
  "AI-анализ паттернов общения и эмоциональных триггеров",
  "Профиль отношений с сильными сторонами и зонами роста",
  "Персональный маршрут: практики, разговоры и рекомендации",
];

const outcomes = [
  "Понятная карта того, что происходит между вами сейчас",
  "Приоритетные темы, с которых лучше начинать изменения",
  "Практики для спокойных разговоров без давления",
  "Рекомендация формата: диагностика, консультация или сопровождение",
];

export default function DiagnosticsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/60 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              Диагностика отношений
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Увидьте отношения как живую систему
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Бережная AI-диагностика помогает понять, где в паре есть тепло, где возникает
              напряжение и какие шаги дадут самый мягкий результат.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Начать диагностику
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/consultations"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] bg-white/55 px-7 py-4 text-sm font-semibold text-[#342217] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Обсудить с экспертом
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] border border-white/70 bg-white/66 p-5 shadow-[0_34px_120px_rgba(88,56,31,0.14)] backdrop-blur-2xl sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-[#ead9be] pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
                    Relationship OS
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                    Профиль пары
                  </h2>
                </div>
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
                  <BrainCircuit size={24} />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {signals.map((signal) => (
                  <article
                    key={signal.title}
                    className="rounded-[1.5rem] border border-[#efe0c9] bg-[#fffaf2]/88 p-5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-semibold text-[#342217]">{signal.title}</h3>
                      <span className="text-2xl font-semibold tracking-[-0.04em] text-[#b87835]">
                        {signal.value}
                      </span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-[#ead9be]">
                      <div
                        className="h-2 rounded-full bg-[linear-gradient(90deg,#d98a45,#ffd58c)]"
                        style={{ width: signal.value }}
                      />
                    </div>
                    <p className="mt-4 text-sm leading-6 text-[#755f50]">{signal.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Как проходит диагностика
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Спокойно, понятно и без ощущения экзамена
            </h2>
          </div>

          <div className="grid gap-4">
            {process.map((item, index) => (
              <article
                key={item}
                className="flex gap-5 rounded-[2rem] border border-[#ead9be] bg-white/72 p-5 shadow-[0_24px_90px_rgba(88,56,31,0.09)] backdrop-blur-xl"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#21150f] text-sm font-semibold text-[#ffd58c]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#23150d]">
                    {item}
                  </h3>
                  <p className="mt-2 leading-7 text-[#6e5848]">
                    Каждый шаг создан так, чтобы человек чувствовал ясность, а не давление.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
                Что вы получите
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Не диагноз, а маршрут к более тёплому контакту
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/72">
                Мы показываем не “кто виноват”, а как устроена динамика пары и какие действия
                помогут вернуть безопасность в разговор.
              </p>
            </div>

            <div className="grid gap-3">
              {outcomes.map((item) => (
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {[
            { icon: Clock3, label: "15-20 минут", text: "Можно пройти в спокойном темпе" },
            { icon: LockKeyhole, label: "Конфиденциально", text: "Данные остаются внутри сервиса" },
            { icon: ShieldCheck, label: "Бережно", text: "Формулировки без обвинений" },
            { icon: HeartPulse, label: "Практично", text: "Рекомендации сразу можно применять" },
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]"
            >
              <item.icon className="text-[#d98a45]" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[#23150d]">{item.label}</h3>
              <p className="mt-3 leading-7 text-[#6e5848]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ead9be] bg-white/76 p-8 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                <MessageCircleHeart size={16} />
                Первый шаг без давления
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Начните с диагностики, если хотите понять отношения глубже
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                После диагностики можно перейти к консультации, персональному маршруту или
                самостоятельным практикам.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Записаться
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] px-7 py-4 text-sm font-semibold text-[#342217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8ea]"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
