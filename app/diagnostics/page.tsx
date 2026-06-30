import type { Metadata } from "next";
import {
  BrainCircuit,
  CheckCircle2,
  HeartHandshake,
  Infinity,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";

import { CompatibilityCalculator } from "@/components/diagnostics/compatibility-calculator";

export const metadata: Metadata = {
  title: "AI-диагностика совместимости",
  description:
    "Рабочий прототип нумерологической диагностики совместимости пары: имя, дата рождения, число сознания, число миссии и миссия пары.",
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
    text: "Смотрит не только общий процент, но и диалог, быт, конфликтные сценарии и эмоциональную близость.",
    icon: Infinity,
  },
];

const reportBlocks = [
  "Мировоззрение каждого партнёра",
  "Число сознания каждого партнёра",
  "Число миссии каждого партнёра",
  "Миссия пары",
  "Предварительный процент совместимости",
  "Бережная рекомендация для первого шага",
];

export default function DiagnosticsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,213,140,0.35),transparent_34%),linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div className="animate-rise lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/62 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              AI-платформа глубокой совместимости
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Диагностика совместимости пары
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Введите имена и даты рождения двух партнёров. Система сразу посчитает базовые нумерологические
              показатели и покажет предварительную совместимость.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { label: "Сознание", value: "по дню", tone: "внутренний ритм" },
                { label: "Миссия", value: "по дате", tone: "главная задача" },
                { label: "Пара", value: "общий код", tone: "миссия отношений" },
              ].map((item) => (
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

          <CompatibilityCalculator />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">Что рассчитывает система</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Не сухой процент, а первая карта отношений
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">Следующий уровень</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Этот прототип станет основой AI-отчёта пары
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Сейчас расчёт работает на базовой нумерологической логике. Дальше мы сможем подключить более глубокие
              формулы из приложения и добавить AI-интерпретацию на основе вашей методики.
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
                Живой первый шаг
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Теперь пользователь может не просто читать, а проверять совместимость
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Это уже первый интерактивный продуктовый модуль. Следующий шаг — сохранить результаты в Supabase и
                сделать красивую страницу полного отчёта.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#ead9be] bg-[#fffaf2] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b87835]">Что дальше</p>
              <p className="mt-4 text-lg leading-8 text-[#6e5848]">
                После расчёта можно добавить кнопку “Получить полный отчёт” и вести человека к записи, оплате или
                личному кабинету.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
