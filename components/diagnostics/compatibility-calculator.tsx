"use client";

import { ArrowRight, CalendarDays, HeartHandshake, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type PartnerInput = {
  name: string;
  birthDate: string;
};

type PartnerResult = {
  name: string;
  day: number;
  month: number;
  year: number;
  consciousness: number;
  mission: number;
  worldview: number;
  consciousnessText: string;
  missionText: string;
  worldviewText: string;
};

type CompatibilityResult = {
  first: PartnerResult;
  second: PartnerResult;
  pairMission: number;
  pairMissionText: string;
  score: number;
  level: string;
  summary: string;
  strength: string;
  tension: string;
  communication: string;
  weeklyStep: string;
};

const numberMeanings: Record<number, string> = {
  1: "инициатива, лидерство, самостоятельность и желание влиять на происходящее",
  2: "чувствительность, партнёрство, дипломатия и потребность в мягком контакте",
  3: "общение, творчество, лёгкость, юмор и живое эмоциональное выражение",
  4: "структура, быт, ответственность, правила и желание опереться на понятный порядок",
  5: "свобода, движение, перемены, честность и потребность не чувствовать ограничения",
  6: "любовь, семья, забота, красота, дом и стремление сделать близким хорошо",
  7: "глубина, анализ, внутренняя тишина, смысл и потребность понимать причины",
  8: "сила, деньги, управление, результат, статус и умение собирать ресурсы",
  9: "мудрость, служение, широкий смысл, принятие и способность смотреть масштабно",
};

const pairMissionMeanings: Record<number, string> = {
  1: "учиться действовать вместе и не бороться за главную роль",
  2: "создавать доверие, слышать чувства и договариваться мягко",
  3: "возвращать лёгкость, юмор, разговор и совместное творчество",
  4: "строить устойчивый дом, правила, быт и понятную систему договорённостей",
  5: "сохранять свободу, движение и честность без хаоса и резких побегов",
  6: "раскрывать любовь, семью, красоту и заботу без самопожертвования",
  7: "углублять понимание, уважать тишину, личное пространство и внутренний поиск",
  8: "соединять амбиции, деньги, статус и ответственность без борьбы за власть",
  9: "служить большему смыслу и не растворяться в роли спасателей",
};

const weeklySteps: Record<number, string> = {
  1: "выберите одно общее решение и спокойно распределите, кто за что отвечает",
  2: "проведите разговор без советов: каждый говорит о чувствах, второй только слушает и уточняет",
  3: "сделайте вместе что-то лёгкое: прогулка, свидание, юмор, музыка или творческий вечер",
  4: "наведите порядок в одной бытовой теме: деньги, дом, расписание, обязанности или планы",
  5: "обсудите, где каждому нужно больше свободы, и договоритесь о границах без обид",
  6: "создайте маленький семейный ритуал заботы: ужин, благодарность, объятие, совместное дело",
  7: "дайте друг другу пространство и затем обсудите один глубокий вопрос без давления",
  8: "выберите общую цель на месяц и пропишите первый практический шаг к ней",
  9: "закройте старую обиду или незавершённый разговор, чтобы не тащить его дальше",
};

export function CompatibilityCalculator() {
  const [first, setFirst] = useState<PartnerInput>({ name: "", birthDate: "" });
  const [second, setSecond] = useState<PartnerInput>({ name: "", birthDate: "" });
  const [focus, setFocus] = useState("отношения");
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [error, setError] = useState("");

  const canCalculate = useMemo(
    () => first.name.trim() && first.birthDate && second.name.trim() && second.birthDate,
    [first, second],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canCalculate) {
      setError("Заполните имя и дату рождения для двух партнёров.");
      setResult(null);
      return;
    }

    const calculated = calculateCompatibility(first, second, focus);
    setResult(calculated);
    setError("");
  }

  return (
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

      <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <PartnerField
            title="Партнёр 1"
            value={first}
            onChange={setFirst}
            namePlaceholder="Например: Виталий"
          />
          <PartnerField
            title="Партнёр 2"
            value={second}
            onChange={setSecond}
            namePlaceholder="Например: Виктория"
          />
        </div>

        <label className="grid gap-2 text-sm font-semibold text-[#342217]">
          Фокус разбора
          <select
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
            className="min-h-12 rounded-2xl border border-[#ead9be] bg-white px-4 text-base font-normal outline-none transition focus:border-[#d98a45]"
          >
            <option value="отношения">Отношения</option>
            <option value="семья">Семья</option>
            <option value="конфликт">Конфликт</option>
            <option value="совместная миссия">Совместная миссия</option>
          </select>
        </label>

        <div className="rounded-[1.5rem] border border-[#ead9be] bg-[#fff7e8] p-4">
          <div className="flex gap-3">
            <ShieldCheck className="mt-0.5 shrink-0 text-[#b87835]" size={22} />
            <p className="text-sm leading-6 text-[#6e5848]">
              Это предварительный нумерологический разбор для самонаблюдения. Он помогает увидеть ритмы пары,
              но не заменяет живую консультацию и глубокую диагностику отношений.
            </p>
          </div>
        </div>

        {error ? (
          <div className="rounded-2xl border border-[#e4a18b] bg-[#fff0ea] px-4 py-3 text-sm font-semibold text-[#8a321e]">
            {error}
          </div>
        ) : null}

        <button
          type="submit"
          className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-[#21150f] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
        >
          Рассчитать совместимость
          <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
        </button>
      </form>

      {result ? <CompatibilityReport result={result} /> : null}
    </div>
  );
}

function PartnerField({
  title,
  value,
  onChange,
  namePlaceholder,
}: {
  title: string;
  value: PartnerInput;
  onChange: (value: PartnerInput) => void;
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
          value={value.name}
          onChange={(event) => onChange({ ...value, name: event.target.value })}
          placeholder={namePlaceholder}
          className="min-h-12 rounded-2xl border border-[#ead9be] bg-white px-4 text-base outline-none transition focus:border-[#d98a45]"
        />
        <label className="relative block">
          <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b87835]" size={18} />
          <input
            type="date"
            value={value.birthDate}
            onChange={(event) => onChange({ ...value, birthDate: event.target.value })}
            className="min-h-12 w-full rounded-2xl border border-[#ead9be] bg-white px-4 pl-11 text-base outline-none transition focus:border-[#d98a45]"
          />
        </label>
      </div>
    </div>
  );
}

function CompatibilityReport({ result }: { result: CompatibilityResult }) {
  return (
    <div className="mt-7 rounded-[2rem] border border-[#ead9be] bg-[#fffaf2] p-5 shadow-[0_24px_80px_rgba(88,56,31,0.10)]">
      <div className="flex flex-col gap-4 border-b border-[#ead9be] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#b87835]">Результат пары</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#23150d]">
            {result.first.name} + {result.second.name}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6e5848]">{result.summary}</p>
        </div>
        <div className="rounded-[1.5rem] bg-[#21150f] px-5 py-4 text-center text-white">
          <p className="text-sm text-white/64">Совместимость</p>
          <p className="text-4xl font-semibold tracking-[-0.05em] text-[#ffd58c]">{result.score}%</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <PartnerResultCard partner={result.first} />
        <PartnerResultCard partner={result.second} />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.5rem] border border-[#ead9be] bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b87835]">Миссия пары</p>
          <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-[#23150d]">{result.pairMission}</p>
          <p className="mt-3 leading-7 text-[#6e5848]">{result.pairMissionText}</p>
        </div>
        <div className="rounded-[1.5rem] border border-[#ead9be] bg-white p-5">
          <div className="flex items-center gap-2 text-[#b87835]">
            <HeartHandshake size={21} />
            <p className="text-sm font-semibold uppercase tracking-[0.16em]">Вывод</p>
          </div>
          <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">{result.level}</h4>
          <p className="mt-3 leading-7 text-[#6e5848]">{result.strength}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <ReportBlock icon={<Sparkles size={18} />} title="Где может быть напряжение" text={result.tension} />
        <ReportBlock icon={<UsersRound size={18} />} title="Как лучше говорить" text={result.communication} />
        <ReportBlock icon={<CalendarDays size={18} />} title="Шаг на 7 дней" text={result.weeklyStep} />
      </div>
    </div>
  );
}

function PartnerResultCard({ partner }: { partner: PartnerResult }) {
  return (
    <article className="rounded-[1.5rem] border border-[#ead9be] bg-white p-5">
      <h4 className="text-xl font-semibold tracking-[-0.03em] text-[#23150d]">{partner.name}</h4>
      <p className="mt-1 text-sm text-[#8a6a55]">
        {pad(partner.day)}.{pad(partner.month)}.{partner.year}
      </p>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <NumberPill label="Сознание" value={partner.consciousness} />
        <NumberPill label="Миссия" value={partner.mission} />
        <NumberPill label="Сфера" value={partner.worldview} />
      </div>
      <p className="mt-4 text-sm leading-6 text-[#6e5848]">
        Сознание: {partner.consciousnessText}. Миссия: {partner.missionText}. Сфера: {partner.worldviewText}.
      </p>
    </article>
  );
}

function ReportBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-[#ead9be] bg-white/78 p-5">
      <div className="flex size-10 items-center justify-center rounded-2xl bg-[#fff2d8] text-[#b87835]">{icon}</div>
      <h4 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[#23150d]">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[#6e5848]">{text}</p>
    </div>
  );
}

function NumberPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-2xl bg-[#fff2d8] px-2 py-3 text-center sm:px-3">
      <p className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b87835] sm:text-[11px]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold text-[#23150d]">{value}</p>
    </div>
  );
}

function calculateCompatibility(first: PartnerInput, second: PartnerInput, focus: string): CompatibilityResult {
  const firstResult = calculatePartner(first);
  const secondResult = calculatePartner(second);
  const pairMission = digitalRoot(
    firstResult.consciousness + firstResult.mission + secondResult.consciousness + secondResult.mission,
  );

  const consciousnessGap = Math.abs(firstResult.consciousness - secondResult.consciousness);
  const missionGap = Math.abs(firstResult.mission - secondResult.mission);
  const worldviewGap = Math.abs(firstResult.worldview - secondResult.worldview);
  const resonanceBonus = firstResult.mission === secondResult.consciousness || secondResult.mission === firstResult.consciousness ? 8 : 0;
  const familyBonus = pairMission === 6 || pairMission === 9 ? 5 : 0;
  const rawScore = 96 - consciousnessGap * 6 - missionGap * 5 - worldviewGap * 3 + resonanceBonus + familyBonus;
  const score = Math.max(38, Math.min(97, rawScore));

  return {
    first: firstResult,
    second: secondResult,
    pairMission,
    pairMissionText: pairMissionMeanings[pairMission],
    score,
    level: getCompatibilityLevel(score),
    summary: getSummary(firstResult, secondResult, focus),
    strength: getStrength(score, pairMission, firstResult, secondResult),
    tension: getTension(consciousnessGap, missionGap, worldviewGap, firstResult, secondResult),
    communication: getCommunication(firstResult, secondResult, pairMission),
    weeklyStep: weeklySteps[pairMission],
  };
}

function calculatePartner(partner: PartnerInput): PartnerResult {
  const [year, month, day] = partner.birthDate.split("-").map(Number);
  const consciousness = digitalRoot(day);
  const mission = digitalRoot(day + month + year);
  const worldview = digitalRoot(month + year);

  return {
    name: partner.name.trim(),
    day,
    month,
    year,
    consciousness,
    mission,
    worldview,
    consciousnessText: numberMeanings[consciousness],
    missionText: numberMeanings[mission],
    worldviewText: numberMeanings[worldview],
  };
}

function digitalRoot(value: number): number {
  let result = Math.abs(value);

  while (result > 9) {
    result = String(result)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return result === 0 ? 9 : result;
}

function getCompatibilityLevel(score: number): string {
  if (score >= 85) return "Сильная совместимость";
  if (score >= 70) return "Хорошая совместимость с точками настройки";
  if (score >= 55) return "Потенциал есть, важен осознанный диалог";
  return "Трансформационная пара: потребуется больше бережности";
}

function getSummary(first: PartnerResult, second: PartnerResult, focus: string): string {
  return `В фокусе «${focus}» эта пара соединяет ${first.consciousnessText} и ${second.consciousnessText}. Такой союз может быть очень живым, если партнёры не пытаются переделать друг друга, а учатся переводить свои разные реакции на понятный язык.`;
}

function getStrength(score: number, pairMission: number, first: PartnerResult, second: PartnerResult): string {
  const scoreText =
    score >= 70
      ? "У пары есть хороший резонанс: здесь можно строить доверие, общие планы и зрелую близость."
      : "Пара может быть непростой, но именно поэтому она способна многое подсветить и вывести отношения на новый уровень.";

  return `${scoreText} Главная сила союза — миссия ${pairMission}: ${pairMissionMeanings[pairMission]}. Особенно важно, что ${first.name} несёт ${first.missionText}, а ${second.name} — ${second.missionText}.`;
}

function getTension(
  consciousnessGap: number,
  missionGap: number,
  worldviewGap: number,
  first: PartnerResult,
  second: PartnerResult,
): string {
  const biggestGap = Math.max(consciousnessGap, missionGap, worldviewGap);

  if (biggestGap === consciousnessGap) {
    return `${first.name} и ${second.name} могут по-разному реагировать в моменте: один быстрее действует, другой может чувствовать ситуацию иначе. Важно не спорить о том, чья реакция правильная, а сначала назвать потребность.`;
  }

  if (biggestGap === missionGap) {
    return "Главная зона настройки — разные жизненные задачи. Может казаться, что партнёр хочет «не туда», хотя на самом деле каждый идёт к своей внутренней зрелости.";
  }

  return "Напряжение может появляться из-за разной сферы восприятия: быт, свобода, забота или порядок могут означать для партнёров разные вещи. Помогают конкретные договорённости: что для каждого означает безопасность, уважение и близость.";
}

function getCommunication(first: PartnerResult, second: PartnerResult, pairMission: number): string {
  return `Лучший стиль общения для этой пары — меньше обвинений и больше перевода: «я чувствую», «мне важно», «я прошу». Для миссии ${pairMission} особенно полезно регулярно сверяться, где каждому тепло, а где он начинает закрываться.`;
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}
