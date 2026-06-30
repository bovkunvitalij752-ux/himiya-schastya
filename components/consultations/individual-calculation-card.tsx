"use client";

import { ArrowRight, CalendarDays, Sparkles, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

type IndividualResult = {
  name: string;
  consciousness: number;
  mission: number;
  worldview: number;
  personalYear: number;
  text: string;
};

const numberMeanings: Record<number, string> = {
  1: "инициатива, самостоятельность и лидерская энергия",
  2: "чувствительность, партнёрство и тонкая настройка",
  3: "общение, творчество и лёгкость",
  4: "структура, быт и ответственность",
  5: "свобода, движение и перемены",
  6: "любовь, семья, забота и красота",
  7: "глубина, анализ и внутренний поиск",
  8: "сила, управление, деньги и результат",
  9: "мудрость, служение и широкий смысл",
};

export function IndividualCalculationCard() {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<IndividualResult | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !birthDate) {
      setError("Введите имя и дату рождения.");
      setResult(null);
      return;
    }

    setResult(calculateIndividualCard(name, birthDate));
    setError("");
  }

  return (
    <div className="mt-8 max-w-2xl rounded-[2rem] border border-[#ead9be] bg-white/72 p-5 shadow-[0_26px_90px_rgba(88,56,31,0.10)] backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b87835]">
            Индивидуальная карта
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
            Быстрый расчёт по дате рождения
          </h2>
        </div>
        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#21150f] text-[#ffd58c]">
          <Sparkles size={21} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-[1fr_0.9fr_auto]">
        <label className="relative block">
          <UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b87835]" size={18} />
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Имя"
            className="min-h-12 w-full rounded-2xl border border-[#ead9be] bg-[#fffaf2] px-4 pl-11 text-base outline-none transition focus:border-[#d98a45] focus:bg-white"
          />
        </label>

        <label className="relative block">
          <CalendarDays className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#b87835]" size={18} />
          <input
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
            className="min-h-12 w-full rounded-2xl border border-[#ead9be] bg-[#fffaf2] px-4 pl-11 text-base outline-none transition focus:border-[#d98a45] focus:bg-white"
          />
        </label>

        <button
          type="submit"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#21150f] px-5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#6f3b1f]"
        >
          Рассчитать
          <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1" />
        </button>
      </form>

      {error ? <p className="mt-3 text-sm font-semibold text-[#9f3a24]">{error}</p> : null}

      {result ? (
        <div className="mt-5 rounded-[1.5rem] border border-[#ead9be] bg-[#fffaf2] p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#8a5527]">{result.name}</p>
              <p className="mt-1 text-sm leading-6 text-[#6e5848]">{result.text}</p>
            </div>
            <div className="grid grid-cols-4 gap-2 sm:min-w-80">
              <NumberBox label="Сознание" value={result.consciousness} />
              <NumberBox label="Миссия" value={result.mission} />
              <NumberBox label="Мир" value={result.worldview} />
              <NumberBox label="Год" value={result.personalYear} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function NumberBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-2xl bg-[#ffecc8] px-2 py-3 text-center">
      <p className="truncate text-[9px] font-semibold uppercase tracking-[0.08em] text-[#b87835] sm:text-[10px]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold text-[#23150d]">{value}</p>
    </div>
  );
}

function calculateIndividualCard(name: string, birthDate: string): IndividualResult {
  const [year, month, day] = birthDate.split("-").map(Number);
  const currentYear = new Date().getFullYear();
  const consciousness = digitalRoot(day);
  const mission = digitalRoot(day + month + year);
  const worldview = digitalRoot(month + year);
  const personalYear = digitalRoot(day + month + currentYear);

  return {
    name: name.trim(),
    consciousness,
    mission,
    worldview,
    personalYear,
    text: `Сознание: ${numberMeanings[consciousness]}. Миссия: ${numberMeanings[mission]}.`,
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
