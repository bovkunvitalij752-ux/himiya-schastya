"use client";

import { ArrowRight, CalendarDays, Sparkles, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

type IndividualResult = {
  name: string;
  consciousness: number;
  mission: number;
  personalYear: number;
  consciousnessTitle: string;
  exactDayText: string;
  triggerText: string;
  karmicTask: string;
  moneyText: string;
  missionText: string;
  yearText: string;
};

type NumberProfile = {
  title: string;
  exact: string;
  trigger: string;
  karmic: string;
  money: string;
};

const consciousnessProfiles: Record<number, NumberProfile> = {
  1: {
    title: "Лидер · Солнце",
    exact: "Чистое сознание лидера",
    trigger: "Когда не признают авторитет, спорят с решением или действуют без согласования.",
    karmic: "Понять себя, признать личную силу и научиться вести людей без подавления их пути.",
    money: "Деньги через лидерство и личный масштаб.",
  },
  2: {
    title: "Партнёр · Луна",
    exact: "Сознание чувствительности и настройки",
    trigger: "Когда нет тепла, контакта, поддержки или человек чувствует эмоциональную холодность.",
    karmic: "Научиться доверять себе, не растворяться в партнёре и выстраивать зрелую близость.",
    money: "Деньги через партнёрства, помощь, красоту, заботу и тонкую коммуникацию.",
  },
  3: {
    title: "Творец · Речь",
    exact: "Сознание общения и расширения",
    trigger: "Когда запрещают проявляться, обесценивают идеи или лишают радости и лёгкости.",
    karmic: "Научиться говорить честно, раскрывать талант и не прятать живость за шутками.",
    money: "Деньги через слово, обучение, творчество, публичность и коммуникации.",
  },
  4: {
    title: "Опора · Порядок",
    exact: "Сознание структуры и ответственности",
    trigger: "Когда вокруг хаос, нарушены правила, нет ясности или обещания не выполняются.",
    karmic: "Создать внутреннюю устойчивость и перестать контролировать всё из страха.",
    money: "Деньги через систему, дисциплину, ремесло, управление процессами и надёжность.",
  },
  5: {
    title: "Проводник · Свобода",
    exact: "Сознание движения и перемен",
    trigger: "Когда ограничивают свободу, давят рамками или не дают выбирать свой путь.",
    karmic: "Научиться проходить перемены без разрушения и соединять свободу с ответственностью.",
    money: "Деньги через движение, продажи, поездки, новые форматы и гибкость.",
  },
  6: {
    title: "Сердце · Венера",
    exact: "Сознание любви, семьи и красоты",
    trigger: "Когда не ценят заботу, нарушают гармонию или любовь превращается в обязанность.",
    karmic: "Раскрывать любовь без спасательства, самопожертвования и ожидания благодарности.",
    money: "Деньги через красоту, семью, комфорт, заботу, творчество и создание атмосферы.",
  },
  7: {
    title: "Мудрец · Глубина",
    exact: "Сознание анализа и внутреннего поиска",
    trigger: "Когда нет смысла, давят поверхностностью или не уважают личное пространство.",
    karmic: "Научиться доверять жизни, выходить из изоляции и делиться своей глубиной.",
    money: "Деньги через аналитику, исследования, знания, наставничество и экспертность.",
  },
  8: {
    title: "Управитель · Сила",
    exact: "Сознание результата и влияния",
    trigger: "Когда забирают контроль, обесценивают достижения или нарушают справедливость.",
    karmic: "Соединить силу с этикой и не мерить любовь только результатом или статусом.",
    money: "Деньги через управление, бизнес, ресурсы, стратегию и ответственность.",
  },
  9: {
    title: "Учитель · Смысл",
    exact: "Сознание мудрости и служения",
    trigger: "Когда нет большого смысла, человек чувствует бесполезность или чужую боль как свою.",
    karmic: "Помогать без спасательства и сохранять личные границы даже при большом сердце.",
    money: "Деньги через пользу людям, образование, миссию, творчество и социальный масштаб.",
  },
};

const missionMeanings: Record<number, string> = {
  1: "миссия личной силы и самостоятельного пути",
  2: "миссия партнёрства, доверия и тонкой настройки отношений",
  3: "миссия творчества, речи и лёгкости",
  4: "миссия порядка, зрелости и устойчивого фундамента",
  5: "миссия свободы, движения и честных перемен",
  6: "миссия творчества и комфорта",
  7: "миссия глубины, знания и внутреннего поиска",
  8: "миссия силы, управления и материальной реализации",
  9: "миссия мудрости, служения и большого смысла",
};

const yearMeanings: Record<number, string> = {
  1: "год старта и личного решения",
  2: "год контакта и настройки отношений",
  3: "год обучения, анализа и расширения",
  4: "год мистики и порядка",
  5: "год перемен, движения и обновления",
  6: "год любви, семьи и ответственности",
  7: "год глубины, тишины и внутренней работы",
  8: "год результата, денег и управления",
  9: "год завершения, мудрости и освобождения",
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
            Карта чисел
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#23150d]">
            Число сознания, миссия и личный год
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
          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold text-[#8a5527]">{result.name}</p>
              <p className="mt-2 text-sm leading-6 text-[#6e5848]">
                Базовая карта показывает три главные точки: Число Сознания, Миссию и Личный год.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <NumberBox label="ЧС" value={result.consciousness} />
              <NumberBox label="Миссия" value={result.mission} />
              <NumberBox label="Год" value={result.personalYear} />
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <InsightBlock title="Число Сознания" text={`${result.consciousness} · ${result.consciousnessTitle}`} />
            <InsightBlock title="Точный день ЧС" text={`${result.consciousness} · ${result.exactDayText}`} />
            <InsightBlock title="Триггер ЧС" text={result.triggerText} />
            <InsightBlock title="Кармическая задача" text={result.karmicTask} />
            <InsightBlock title="Деньги и реализация" text={result.moneyText} />
            <InsightBlock title="Миссия" text={`${result.mission} · ${result.missionText}`} />
            <InsightBlock title="Личный год" text={`${result.personalYear} · ${result.yearText}`} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function NumberBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-0 rounded-2xl bg-[#ffecc8] px-2 py-3 text-center">
      <p className="truncate text-[10px] font-semibold uppercase tracking-[0.08em] text-[#b87835]">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold text-[#23150d]">{value}</p>
    </div>
  );
}

function InsightBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.25rem] border border-[#ead9be] bg-white/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b87835]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#6e5848]">{text}</p>
    </div>
  );
}

function calculateIndividualCard(name: string, birthDate: string): IndividualResult {
  const [year, month, day] = birthDate.split("-").map(Number);
  const currentYear = new Date().getFullYear();
  const consciousness = digitalRoot(day);
  const mission = digitalRoot(day + month + year);
  const personalYear = digitalRoot(day + month + currentYear);
  const profile = consciousnessProfiles[consciousness];

  return {
    name: name.trim(),
    consciousness,
    mission,
    personalYear,
    consciousnessTitle: profile.title,
    exactDayText: profile.exact,
    triggerText: profile.trigger,
    karmicTask: profile.karmic,
    moneyText: profile.money,
    missionText: missionMeanings[mission],
    yearText: yearMeanings[personalYear],
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
