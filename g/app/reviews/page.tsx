import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  MessageCircleHeart,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Отзывы",
  description:
    "Истории клиентов «Химии счастья»: как диагностика, консультации и практики помогают парам говорить спокойнее и видеть отношения яснее.",
};

const featured = [
  {
    name: "Анна и Михаил",
    context: "8 лет вместе",
    text: "Мы впервые смогли спокойно обсудить то, что раньше сразу превращалось в спор. Самое ценное — никто не пытался сделать одного из нас виноватым.",
    shift: "От обвинений к спокойному диалогу",
  },
  {
    name: "Елена",
    context: "индивидуальная диагностика",
    text: "Я увидела, где додумывала за партнёра, а где правда нужен разговор. После диагностики стало легче говорить без тревоги.",
    shift: "От тревоги к ясности",
  },
  {
    name: "Игорь",
    context: "парная консультация",
    text: "Понравилось, что рекомендации были конкретными, без лекции и оценки. Мы ушли с понятным планом на неделю.",
    shift: "От тупика к действиям",
  },
];

const metrics = [
  { value: "92%", label: "отмечают больше ясности после первой диагностики" },
  { value: "78%", label: "начинают разговоры спокойнее после практик" },
  { value: "4.9/5", label: "средняя оценка бережности формата" },
];

const beforeAfter = [
  {
    before: "Мы снова ругаемся из-за одного и того же",
    after: "Мы видим повторяющийся сценарий и останавливаем его раньше",
  },
  {
    before: "Я боюсь начинать разговор",
    after: "У меня есть структура, с которой разговор звучит мягче",
  },
  {
    before: "Кажется, что партнёр меня не слышит",
    after: "Мы различаем просьбы, ожидания и реальные договорённости",
  },
];

const trust = [
  "Отзывы адаптированы без раскрытия личных деталей",
  "Мы сохраняем приватность чувствительных историй",
  "Фокусируемся на результате, а не на драме",
];

export default function ReviewsPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/60 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              Истории клиентов
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Люди приходят за решением, а находят новый способ говорить
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              Эти истории показывают главный результат «Химии счастья»: меньше защиты,
              больше ясности, уважения и конкретных шагов.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostics"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
              >
                Пройти диагностику
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/consultations"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] bg-white/55 px-7 py-4 text-sm font-semibold text-[#342217] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Посмотреть консультации
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/70 bg-white/66 p-6 shadow-[0_34px_120px_rgba(88,56,31,0.14)] backdrop-blur-2xl sm:p-8">
            <Quote className="text-[#d98a45]" size={42} />
            <p className="mt-8 text-2xl font-medium leading-10 tracking-[-0.02em] text-[#342217]">
              “Мы не получили волшебную таблетку. Мы получили способ остановиться, услышать
              друг друга и не разрушать разговор в первые пять минут.”
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-[#ead9be] pt-6">
              <div className="flex size-11 items-center justify-center rounded-full bg-[#21150f] text-sm font-semibold text-[#ffd58c]">
                АМ
              </div>
              <div>
                <p className="font-semibold text-[#23150d]">Анна и Михаил</p>
                <p className="text-sm text-[#6e5848]">парная консультация</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.value}
              className="rounded-[2rem] border border-[#ead9be] bg-white/74 p-6 shadow-[0_24px_90px_rgba(88,56,31,0.10)] backdrop-blur-xl"
            >
              <TrendingUp className="text-[#d98a45]" size={28} />
              <p className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-[#23150d]">
                {metric.value}
              </p>
              <p className="mt-3 leading-7 text-[#6e5848]">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Реальные изменения
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Истории не про идеальные пары, а про людей, которые начали слышать иначе
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featured.map((review) => (
              <article
                key={review.name}
                className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)] transition duration-300 hover:-translate-y-1"
              >
                <MessageCircleHeart className="text-[#d98a45]" size={30} />
                <p className="mt-7 text-lg leading-8 text-[#4a3324]">“{review.text}”</p>
                <div className="mt-7 border-t border-[#ead9be] pt-5">
                  <p className="font-semibold text-[#23150d]">{review.name}</p>
                  <p className="mt-1 text-sm text-[#6e5848]">{review.context}</p>
                  <p className="mt-4 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                    {review.shift}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
                До и после
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Прогресс выглядит как маленькие, но устойчивые сдвиги
              </h2>
            </div>
            <div className="grid gap-4">
              {beforeAfter.map((item) => (
                <article
                  key={item.before}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd58c]">
                    Было
                  </p>
                  <p className="mt-2 leading-7 text-white/72">{item.before}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#ffd58c]">
                    Стало
                  </p>
                  <p className="mt-2 leading-7 text-white">{item.after}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {trust.map((item, index) => (
            <article
              key={item}
              className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.08)]"
            >
              {index === 0 ? (
                <ShieldCheck className="text-[#d98a45]" size={28} />
              ) : index === 1 ? (
                <HeartHandshake className="text-[#d98a45]" size={28} />
              ) : (
                <UsersRound className="text-[#d98a45]" size={28} />
              )}
              <p className="mt-5 text-xl font-semibold leading-8 text-[#23150d]">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ead9be] bg-white/76 p-8 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#fff2d8] px-4 py-2 text-sm font-semibold text-[#8a5527]">
                <CheckCircle2 size={16} />
                Первый шаг
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Ваша история тоже может стать спокойнее
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Начните с диагностики, чтобы увидеть карту отношений и выбрать бережный маршрут
                изменений.
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
                href="/contacts"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-[#d9bf95] px-7 py-4 text-sm font-semibold text-[#342217] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff8ea]"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
