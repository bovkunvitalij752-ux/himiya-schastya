import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { IndividualCalculationCard } from "@/components/consultations/individual-calculation-card";

export const metadata: Metadata = {
  title: "Консультации",
  description:
    "Бережные индивидуальные и парные консультации для укрепления отношений, снижения конфликтов и построения понятного маршрута изменений.",
};

const formats = [
  {
    title: "Индивидуальная встреча",
    text: "Для личного запроса, внутреннего напряжения, выбора решения или подготовки к важному разговору.",
    icon: MessageCircleHeart,
    accent: "от 50 минут",
  },
  {
    title: "Парная консультация",
    text: "Для пары, которая хочет снизить конфликтность, услышать друг друга и договориться о следующих шагах.",
    icon: UsersRound,
    accent: "до 90 минут",
  },
  {
    title: "План сопровождения",
    text: "Для устойчивой работы: диагностика, консультации, практики, домашние задания и AI-рекомендации.",
    icon: CalendarCheck,
    accent: "4-8 недель",
  },
];

const fit = [
  "Вы часто спорите об одном и том же, но не находите решения",
  "В отношениях стало меньше тепла, доверия или живого интереса",
  "Нужно спокойно обсудить кризис, переезд, семью, деньги или будущее",
  "Вы хотите сохранить отношения, но не знаете, с чего начать",
];

const steps = [
  {
    title: "Запрос",
    text: "Формулируем, что важно решить сейчас, и выбираем самый мягкий формат работы.",
  },
  {
    title: "Разбор",
    text: "Смотрим на ситуацию как на систему: эмоции, роли, ожидания, повторяющиеся циклы.",
  },
  {
    title: "Договорённости",
    text: "Собираем конкретные шаги: что обсудить, что попробовать и как снизить напряжение.",
  },
];

export default function ConsultationsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ec_0%,#fff8ea_50%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/60 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              Бережное сопровождение
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Консультации, где отношения можно услышать заново
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Помогаем снизить напряжение, увидеть настоящую причину конфликта и найти
              следующий шаг без давления, стыда и обвинений.
            </p>
            <IndividualCalculationCard />
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Записаться
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
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
                  Session Map
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                  Встреча без давления
                </h2>
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
                <HeartHandshake size={24} />
              </div>
            </div>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#ead9be] shadow-[0_24px_80px_rgba(88,56,31,0.12)]">
              <Image
                src="/images/consultation-couple-berega.jpg"
                alt="Пара на консультации"
                width={1400}
                height={950}
                className="h-64 w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-[1.5rem] bg-[#fffaf2]/88 p-5">
                  <span className="text-sm font-semibold text-[#b87835]">0{index + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-[#23150d]">{step.title}</h3>
                  <p className="mt-2 leading-7 text-[#6e5848]">{step.text}</p>
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
              Форматы помощи
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Выбираем формат под состояние пары, а не наоборот
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {formats.map(({ icon: Icon, title, text, accent }) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#ead9be] bg-white/74 p-6 shadow-[0_24px_90px_rgba(88,56,31,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-13 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffe7b8,#d98a45)] text-[#2e1a10]">
                    <Icon size={25} />
                  </div>
                  <span className="rounded-full bg-[#fff2d8] px-3 py-1 text-xs font-semibold text-[#8a5527]">
                    {accent}
                  </span>
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
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
              Кому подходит
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              Если кажется, что вы говорите, но не встречаетесь
            </h2>
          </div>
          <div className="grid gap-3">
            {fit.map((item) => (
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

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Безопасная рамка",
              text: "Мы не ищем виноватого. Мы помогаем увидеть динамику и вернуть уважительный контакт.",
            },
            {
              icon: MessageCircleHeart,
              title: "Живой разговор",
              text: "Встреча строится вокруг реальной ситуации, а не шаблонной схемы.",
            },
            {
              icon: CalendarCheck,
              title: "Понятный план",
              text: "После консультации остаются конкретные шаги, которые можно применить в жизни.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]"
            >
              <Icon className="text-[#d98a45]" size={28} />
              <h3 className="mt-5 text-xl font-semibold text-[#23150d]">{title}</h3>
              <p className="mt-3 leading-7 text-[#6e5848]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ead9be] bg-white/76 p-8 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                <Sparkles size={16} />
                Можно начать с одной встречи
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Запишитесь, если хотите разобраться бережно и по-взрослому
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Мы подберём формат под вашу ситуацию: индивидуально, парно или через диагностику.
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
                href="/diagnostics"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] px-7 py-4 text-sm font-semibold text-[#342217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8ea]"
              >
                Пройти диагностику
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
