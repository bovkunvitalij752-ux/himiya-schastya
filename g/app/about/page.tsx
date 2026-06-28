import type { Metadata } from "next";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  HeartHandshake,
  LockKeyhole,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О проекте",
  description:
    "Миссия, принципы и этика AI-платформы «Химия счастья» для гармоничных отношений и крепких семей.",
};

const principles = [
  {
    title: "Бережность",
    text: "Мы не обвиняем и не ставим диагнозы. Мы помогаем людям говорить яснее и мягче.",
    icon: HeartHandshake,
  },
  {
    title: "Осознанность",
    text: "В центре не быстрые советы, а понимание сценариев, чувств, границ и потребностей.",
    icon: MessageCircleHeart,
  },
  {
    title: "Технологичность",
    text: "AI помогает находить паттерны и подбирать практики, но решение всегда остаётся за человеком.",
    icon: BrainCircuit,
  },
  {
    title: "Приватность",
    text: "Отношения — чувствительная тема. Поэтому безопасность данных заложена в архитектуру продукта.",
    icon: LockKeyhole,
  },
];

const roadmap = [
  "Диагностика отношений и эмоционального климата",
  "Персональные рекомендации и практики общения",
  "Запись на консультации и сопровождение пары",
  "Личный кабинет с историей прогресса и мягкими напоминаниями",
];

const trust = [
  "Человеческий язык вместо холодных отчётов",
  "Прозрачная логика рекомендаций",
  "Этичная работа с AI и чувствительными запросами",
  "Фокус на укреплении связи, а не на поиске виноватого",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-[#fbf6ec] text-[#21160f]">
      <section className="relative px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fbf6ec_0%,#fff8ea_48%,#f4efe8_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9be] bg-white/60 px-4 py-2 text-sm font-semibold text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl">
              <Sparkles size={16} />
              О проекте
            </div>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#23150d] sm:text-6xl lg:text-7xl">
              Мы создаём новую культуру заботы об отношениях
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6e5848]">
              «Химия счастья» соединяет психологию, практики осознанности и искусственный
              интеллект, чтобы пары могли лучше понимать себя, друг друга и динамику своей
              семьи.
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
            <div className="flex items-center justify-between gap-4 border-b border-[#ead9be] pb-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
                  Mission System
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
                  Отношения как навык будущего
                </h2>
              </div>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
                <UsersRound size={24} />
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-[#6e5848]">
              В мире, где люди всё быстрее работают, переезжают, растят детей и переживают
              стресс, отношениям нужна такая же современная поддержка, как здоровью, финансам
              и образованию.
            </p>
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-[#ead9be] shadow-[0_24px_80px_rgba(88,56,31,0.12)]">
              <Image
                src="/images/about-couple-berega.jpg"
                alt="Пара в теплом свете"
                width={1400}
                height={950}
                className="h-72 w-full object-cover object-center"
              />
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {["Понимать", "Говорить", "Договариваться", "Сохранять тепло"].map((item) => (
                <div key={item} className="rounded-2xl bg-[#fffaf2]/88 p-4 font-semibold text-[#342217]">
                  {item}
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
              Принципы
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Премиальный продукт начинается не с дизайна, а с этики
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map(({ icon: Icon, title, text }) => (
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
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] bg-[linear-gradient(135deg,#21150f_0%,#3c2416_58%,#6f3b1f_100%)] p-6 text-white shadow-[0_34px_120px_rgba(33,21,15,0.28)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffd58c]">
              Роль AI
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
              AI не заменяет любовь, он помогает увидеть невидимое
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Алгоритмы помогают находить повторяющиеся паттерны, но в центре остаются люди:
              их чувства, границы, ответственность и выбор.
            </p>
          </div>
          <div className="grid gap-3">
            {trust.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">
              Дорожная карта
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
              Мы строим не сайт, а экосистему поддержки семьи
            </h2>
          </div>
          <div className="grid gap-4">
            {roadmap.map((item, index) => (
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
                    Каждый модуль будет развиваться как часть единого, бережного пути клиента.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Этика",
              text: "Рекомендации объясняются человеческим языком и не подменяют профессиональную помощь.",
            },
            {
              icon: LockKeyhole,
              title: "Безопасность",
              text: "Архитектура продукта проектируется вокруг приватности и контроля пользователя.",
            },
            {
              icon: HeartHandshake,
              title: "Доверие",
              text: "Пользователь должен чувствовать уважение на каждом экране, в каждом вопросе и тексте.",
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
                Следующий шаг
              </div>
              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
                Начните с диагностики или консультации
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
                Так мы быстрее поймём вашу ситуацию и предложим самый бережный маршрут.
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
