import {
  ArrowRight,
  BrainCircuit,
  CalendarHeart,
  CheckCircle2,
  HeartHandshake,
  MessageCircleHeart,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breakdowns = [
  "Разговоры превращаются в защиту, молчание или взаимные претензии.",
  "Пара видит симптомы конфликта, но не замечает его настоящую причину.",
  "У людей нет безопасного пространства, где можно говорить честно и спокойно.",
];

const helpSteps = [
  {
    title: "Диагностика",
    text: "Определяем эмоциональный климат, повторяющиеся сценарии и зоны роста пары.",
  },
  {
    title: "AI-рекомендации",
    text: "Собираем персональный маршрут: практики, вопросы для разговора и мягкие действия.",
  },
  {
    title: "Сопровождение",
    text: "Помогаем закреплять новые привычки общения через консультации и понятные шаги.",
  },
];

const principles = [
  "Психология без давления",
  "Осознанность без эзотерики",
  "Искусственный интеллект как помощник, не замена человеку",
  "Конфиденциальность и бережный тон",
];

const stories = [
  {
    name: "Анна и Михаил",
    result: "Вернули спокойные разговоры после периода постоянных споров.",
  },
  {
    name: "Елена",
    result: "Поняла, где ей нужна поддержка, а где достаточно честного диалога.",
  },
  {
    name: "Игорь",
    result: "Получил понятные шаги вместо ощущения, что отношения невозможно исправить.",
  },
];

const diagnostics = [
  "Эмоциональная близость",
  "Уровень доверия",
  "Сценарии конфликтов",
  "Готовность к совместным решениям",
];

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/images/hero-family-mity3548web.jpg"
          alt="Счастливая семья в теплой домашней атмосфере"
          fill
          priority
          className="scale-110 object-cover object-center blur-sm saturate-[0.92]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_30%,rgba(255,224,166,0.28),transparent_32%),linear-gradient(90deg,rgba(30,17,10,0.93)_0%,rgba(70,42,28,0.78)_45%,rgba(255,246,231,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0)_58%,#fbf6ec_100%)]" />
        <div className="absolute inset-y-4 right-0 hidden w-[46vw] md:block">
          <Image
            src="/images/hero-family-mity3548web.jpg"
            alt="Счастливая семья в зеленом парке"
            fill
            priority
            className="object-contain object-right-center drop-shadow-[0_34px_80px_rgba(34,19,12,0.34)]"
            sizes="46vw"
          />
        </div>

        <div className="relative mx-auto flex min-h-[92vh] w-full max-w-7xl flex-col justify-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-rise text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-medium text-white/90 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <Sparkles size={16} />
              AI-платформа для гармоничных отношений
            </div>

            <h1 className="mt-7 max-w-3xl text-6xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
              Химия счастья
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/86 sm:text-2xl sm:leading-9">
              Помогаем создавать счастливые отношения с помощью психологии, осознанности и
              искусственного интеллекта.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#2c1a10] shadow-[0_22px_70px_rgba(255,255,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe2a8]"
              >
                Записаться
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/diagnostics"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2c1a10]"
              >
                <Play size={17} />
                Пройти диагностику
              </Link>
            </div>
          </div>

          <div className="absolute bottom-6 left-4 right-4 mx-auto grid max-w-7xl gap-3 sm:left-6 sm:right-6 md:grid-cols-3 lg:px-8">
            {["AI-анализ", "Психология", "Осознанность"].map((item) => (
              <div
                key={item}
                className="hidden rounded-2xl border border-white/18 bg-white/12 px-5 py-4 text-sm font-medium text-white/86 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:block"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,#fbf6ec,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Почему отношения рушатся
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl lg:text-6xl">
              Не из-за отсутствия любви, а из-за потери безопасного диалога
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {breakdowns.map((item, index) => (
              <article
                key={item}
                className="group rounded-[2rem] border border-[#ead9be] bg-white/62 p-6 shadow-[0_24px_90px_rgba(88,56,31,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#2e1a10] text-sm font-semibold text-[#ffd58c]">
                  0{index + 1}
                </span>
                <p className="mt-8 text-xl font-medium leading-8 text-[#4a3324]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Как мы помогаем
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Превращаем хаос переживаний в ясную карту действий
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e5848]">
              Платформа соединяет бережную психологическую логику, AI-анализ и практики
              осознанного общения, чтобы пара могла двигаться без стыда, давления и догадок.
            </p>
          </div>

          <div className="grid gap-4">
            {helpSteps.map((step, index) => (
              <article
                key={step.title}
                className="flex gap-5 rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_24px_90px_rgba(88,56,31,0.10)] backdrop-blur-xl transition duration-300 hover:-translate-y-1"
              >
                <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffe7b8,#d98a45)] text-[#2e1a10] shadow-[0_18px_50px_rgba(217,138,69,0.25)]">
                  {index === 0 ? <ShieldCheck size={24} /> : index === 1 ? <BrainCircuit size={24} /> : <HeartHandshake size={24} />}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#23150d]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[#6e5848]">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#21150f] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
                Наш подход
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Технологии должны делать отношения человечнее
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/70">
              Мы не обещаем магических решений. Мы создаём среду, где люди видят друг друга
              яснее, говорят мягче и быстрее находят следующий честный шаг.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {principles.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl"
              >
                <CheckCircle2 className="shrink-0 text-[#ffd58c]" size={22} />
                <span className="text-white/82">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
                Истории клиентов
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Маленькие изменения в диалоге дают большие изменения в семье
              </h2>
            </div>
            <MessageCircleHeart className="text-[#d98a45]" size={44} />
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.name}
                className="rounded-[2rem] border border-[#ead9be] bg-white p-6 shadow-[0_24px_90px_rgba(88,56,31,0.10)] transition duration-300 hover:-translate-y-1"
              >
                <div className="mb-8 h-1.5 w-16 rounded-full bg-[linear-gradient(90deg,#d98a45,#ffd58c)]" />
                <p className="text-xl font-medium leading-8 text-[#4a3324]">“{story.result}”</p>
                <p className="mt-7 font-semibold text-[#23150d]">{story.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-[#ead9be] bg-[linear-gradient(135deg,rgba(255,255,255,0.86),rgba(255,230,187,0.42))] p-6 shadow-[0_34px_120px_rgba(88,56,31,0.12)] backdrop-blur-xl sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Диагностика отношений
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Поймите, что происходит между вами сейчас
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#6e5848]">
              Диагностика помогает увидеть не виноватого, а систему: где теряется контакт,
              что усиливает напряжение и какие действия дадут самый мягкий эффект.
            </p>
          </div>

          <div className="grid content-center gap-3 sm:grid-cols-2">
            {diagnostics.map((item) => (
              <div key={item} className="rounded-2xl bg-white/72 p-5 shadow-[0_18px_60px_rgba(88,56,31,0.08)]">
                <UsersRound className="text-[#d98a45]" size={24} />
                <p className="mt-4 font-semibold text-[#342217]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-8 text-white shadow-[0_34px_120px_rgba(33,21,15,0.30)] sm:p-12 lg:p-16">
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
                Призыв записаться
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Начните с одного бережного разговора
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Мы поможем выбрать формат: диагностика, консультация или персональный маршрут
                для вашей пары.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contacts"
                className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#2c1a10] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe2a8]"
              >
                <CalendarHeart size={18} />
                Записаться
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/diagnostics"
                className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2c1a10]"
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
