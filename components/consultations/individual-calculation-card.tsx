"use client";

import { ArrowRight, CalendarDays, Sparkles, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

type IndividualResult = {
  name: string;
  consciousness: number;
  mission: number;
  worldview: number;
  personalYear: number;
  portrait: string;
  strength: string;
  missionText: string;
  worldviewText: string;
  yearText: string;
  recommendation: string;
};

const consciousnessMeanings: Record<number, string> = {
  1: "человек инициативы: быстро чувствует, где нужно взять ответственность, запустить движение и не ждать разрешения извне",
  2: "человек тонкого контакта: хорошо считывает настроение, нуждается в доверии и раскрывается через бережное партнёрство",
  3: "человек живого общения: раскрывается через слово, творчество, лёгкость, юмор и способность соединять людей",
  4: "человек опоры: ему важно наводить порядок, создавать правила, держать обещания и превращать хаос в понятную систему",
  5: "человек перемен: ему нужна свобода, движение, новые впечатления и честный разговор без ощущения клетки",
  6: "человек сердца: сильно включается в семью, заботу, красоту, дом и желание сделать жизнь близких теплее",
  7: "человек глубины: много анализирует, ищет смысл, тонко чувствует невысказанное и нуждается в личном пространстве",
  8: "человек результата: видит цели, ресурсы, статус, деньги и умеет собирать энергию в конкретное действие",
  9: "человек широкого смысла: мыслит масштабно, умеет сострадать и часто чувствует внутреннюю потребность быть полезным",
};

const missionMeanings: Record<number, string> = {
  1: "учиться проявляться смело, не прятать силу и не превращать лидерство в давление",
  2: "строить союз через доверие, мягкость, диалог и умение слышать вторую сторону",
  3: "возвращать лёгкость, радость, творчество и живое общение туда, где стало слишком тяжело",
  4: "создавать устойчивость: дом, порядок, договорённости, финансовую и эмоциональную надёжность",
  5: "не бояться перемен, но проходить их осознанно, не разрушая близость импульсивными решениями",
  6: "раскрывать любовь, заботу, красоту и семейность без спасательства и самопожертвования",
  7: "углублять понимание себя, партнёра и причин повторяющихся сценариев",
  8: "соединять силу, амбиции и материальную реализацию с уважением к чувствам близких",
  9: "видеть больший смысл отношений и не растворяться в роли спасателя для всех",
};

const worldviewMeanings: Record<number, string> = {
  1: "сфера действия: важно видеть цель, направление и возможность влиять на ситуацию",
  2: "сфера чувств: тон, безопасность и эмоциональный климат значат очень много",
  3: "сфера общения: разговор, признание, вдохновение и ощущение живого интереса",
  4: "сфера структуры: спокойнее, когда есть план, правила и понятные обязанности",
  5: "сфера свободы: важно не застревать, иметь выбор и пространство для движения",
  6: "сфера любви: дом, близость, красота и забота становятся главным языком души",
  7: "сфера смысла: хочется докопаться до сути и не жить поверхностно",
  8: "сфера результата: важны эффективность, развитие, признание и ощущение силы",
  9: "сфера мудрости: важны человечность, польза, принятие и большой горизонт",
};

const yearMeanings: Record<number, string> = {
  1: "год запуска: хорошо начинать новое, принимать решения и возвращать себе право выбирать",
  2: "год отношений: важны диалог, партнёрство, примирение и аккуратная настройка контакта",
  3: "год проявления: больше говорить, показывать себя, создавать, учиться радоваться",
  4: "год фундамента: наводить порядок, укреплять быт, здоровье, финансы и договорённости",
  5: "год перемен: обновлять привычки, расширять круг общения и не бояться честных поворотов",
  6: "год семьи: уделить внимание любви, дому, детям, красоте и качеству близости",
  7: "год внутренней работы: замедлиться, разобраться в причинах и услышать собственную правду",
  8: "год результата: собирать ресурсы, укреплять статус, деньги и управленческие решения",
  9: "год завершения: отпускать лишнее, подводить итоги и освобождать место для нового этапа",
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
          <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold text-[#8a5527]">{result.name}</p>
              <p className="mt-2 text-sm leading-6 text-[#6e5848]">{result.portrait}</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <NumberBox label="Сознание" value={result.consciousness} />
              <NumberBox label="Миссия" value={result.mission} />
              <NumberBox label="Сфера" value={result.worldview} />
              <NumberBox label="Год" value={result.personalYear} />
            </div>
          </div>

          <div className="mt-4 grid gap-3">
            <InsightBlock title="Сильная сторона" text={result.strength} />
            <InsightBlock title="Миссия" text={result.missionText} />
            <InsightBlock title="Сфера" text={result.worldviewText} />
            <InsightBlock title="Фокус года" text={result.yearText} />
          </div>

          <div className="mt-4 rounded-[1.25rem] bg-white/78 p-4 shadow-[inset_0_0_0_1px_rgba(234,217,190,0.8)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b87835]">
              Мягкая рекомендация
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6e5848]">{result.recommendation}</p>
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
  const worldview = digitalRoot(month + year);
  const personalYear = digitalRoot(day + month + currentYear);

  return {
    name: name.trim(),
    consciousness,
    mission,
    worldview,
    personalYear,
    portrait: `По первому впечатлению ${name.trim()} — ${consciousnessMeanings[consciousness]}. Это не приговор и не ярлык, а мягкая подсказка: через какую энергию человеку проще входить в контакт, принимать решения и проявляться в отношениях.`,
    strength: `Главный ресурс карты — число ${consciousness}. Оно показывает, как человек естественно реагирует на жизнь, где берёт силу и каким способом чаще всего влияет на пространство вокруг себя.`,
    missionText: `Миссия ${mission}: ${missionMeanings[mission]}. В отношениях это проявляется как задача, которую важно проживать осознанно, без крайностей и привычных автоматических реакций.`,
    worldviewText: `Сфера ${worldview}: ${worldviewMeanings[worldview]}. Это помогает понять, через какую область человеку проще чувствовать безопасность, доверие и настоящую близость.`,
    yearText: `Персональный год ${personalYear}: ${yearMeanings[personalYear]}. Сейчас полезно смотреть не только на характер, но и на период, в котором человек находится.`,
    recommendation:
      "Для более точного разбора лучше смотреть не одно число, а всю связку: дату рождения, запрос, семейный сценарий, стиль общения и совместимость с партнёром. Тогда карта превращается не в гадание, а в понятный маршрут для отношений.",
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
