import {
  ArrowRight,
  CalendarHeart,
  CheckCircle2,
  HeartHandshake,
  Mail,
  MessageCircleHeart,
  Sparkles,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const audience = [
  "Пары, которые хотят вернуть тепло и спокойный диалог",
  "Семьи на этапе перемен, кризиса или важных решений",
  "Люди, которым важно строить отношения осознанно",
];

const outcomes = [
  "Бережная диагностика отношений и эмоционального климата",
  "Персональные рекомендации и практики на каждый день",
  "Маршрут консультаций, упражнений и осознанных разговоров",
  "Пространство, где можно говорить без обвинений и давления",
];

const reviews = [
  {
    name: "Анна и Михаил",
    text: "Мы впервые смогли обсудить сложную тему спокойно и без ощущения, что кто-то проиграл.",
  },
  {
    name: "Елена",
    text: "После диагностики стало понятно, где мне нужна поддержка, а где достаточно честного разговора.",
  },
  {
    name: "Игорь",
    text: "Очень понравился тон проекта: без морали, без давления, с конкретными шагами.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/images/family-hero.png"
          alt="Счастливая семья в теплом домашнем пространстве"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(50,27,16,0.82)_0%,rgba(92,52,30,0.58)_42%,rgba(255,255,255,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0)_44%,rgba(251,247,239,0.92)_100%)]" />

        <div className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm backdrop-blur">
              <Sparkles size={16} />
              AI-платформа для отношений и семьи
            </div>
            <h1 className="text-5xl font-semibold leading-[1.05] md:text-7xl">Химия счастья</h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-white/88 md:text-2xl md:leading-9">
              Пространство любви, осознанности и гармоничных отношений
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#f7d89a] px-6 py-3 text-sm font-semibold text-[#3a2416] shadow-[0_18px_50px_rgba(247,216,154,0.28)] transition hover:bg-white"
              >
                Записаться
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/diagnostics"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/35 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#3a2416]"
              >
                Пройти диагностику
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ef] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c88442]">О нас</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#302015] md:text-5xl">
              Мы создаем мягкую, умную и человеческую поддержку для отношений
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#6f5b4c]">
            «Химия счастья» соединяет психологию, коучинг, практики осознанности и AI,
            чтобы помогать людям слышать друг друга, видеть причины конфликтов и выбирать
            действия, которые укрепляют близость.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c88442]">
              Для кого проект
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#302015] md:text-5xl">
              Для тех, кто хочет не просто сохранить отношения, а сделать их живыми
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {audience.map((item) => (
              <article key={item} className="rounded-lg border border-[#ead8bd] bg-[#fffaf2] p-6">
                <UsersRound className="text-[#d4864f]" size={28} />
                <h3 className="mt-5 text-xl font-semibold leading-7 text-[#302015]">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#3a2416] px-4 py-16 text-white sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d89a]">
              Что вы получите
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Ясность, поддержку и понятный маршрут к гармонии
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-lg border border-white/14 bg-white/8 p-5">
                <CheckCircle2 className="text-[#f7d89a]" size={24} />
                <p className="mt-4 leading-7 text-white/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf7ef] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c88442]">
                Отзывы
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#302015] md:text-5xl">
                Когда разговор становится теплее, меняется вся атмосфера
              </h2>
            </div>
            <HeartHandshake className="text-[#d4864f]" size={42} />
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-lg bg-white p-6 shadow-[0_18px_60px_rgba(83,55,35,0.10)]"
              >
                <MessageCircleHeart className="text-[#d4864f]" size={26} />
                <p className="mt-5 leading-8 text-[#6f5b4c]">“{review.text}”</p>
                <p className="mt-5 font-semibold text-[#302015]">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-lg border border-[#ead8bd] bg-[#fffaf2] p-6 md:grid-cols-[1fr_0.8fr] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c88442]">
              Контакты
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#302015] md:text-5xl">
              Начнем с бережного первого шага
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f5b4c]">
              Оставьте заявку на консультацию или начните с диагностики. Мы поможем выбрать
              спокойный и точный формат для вашей ситуации.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Link
              href="/contacts"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#3a2416] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f3d24]"
            >
              <CalendarHeart size={18} />
              Записаться на встречу
            </Link>
            <Link
              href="mailto:hello@himiya-schastya.ru"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#d7b57c] px-6 py-3 text-sm font-semibold text-[#3a2416] transition hover:bg-white"
            >
              <Mail size={18} />
              Написать нам
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
