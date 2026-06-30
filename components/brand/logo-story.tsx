import Image from "next/image";

const meanings = [
  {
    title: "О — отношения",
    text: "Центр логотипа символизирует завершенность, целостность и общий цикл, который удерживает связь.",
  },
  {
    title: "ОН",
    text: "Буква H и центр O создают мужское начало: энергию, которая тянется к общему ядру отношений.",
  },
  {
    title: "ОНА",
    text: "Буква HA и центр O создают женское начало: движение к тому же центру, где рождается единство.",
  },
  {
    title: "Лотос",
    text: "Символ любви, чистоты и способности сохранять свет даже после сложных жизненных периодов.",
  },
];

export function LogoStory() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#ead9be] bg-white shadow-[0_34px_120px_rgba(88,56,31,0.14)]">
          <Image
            src="/images/brand-logo-gold.jpg"
            alt="Философия логотипа Химия счастья"
            width={1254}
            height={1254}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">Философия логотипа</p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#23150d] sm:text-5xl">
            Мы возвращаем целостность туда, где она была утрачена
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e5848]">
            «Химия счастья» — не сложение двух половин, а проявление единого ядра, которое уже существует
            в центре любых отношений. Логотип зашифровывает эту идею через химическую форму, символы ОН и ОНА,
            общий центр и образ лотоса.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {meanings.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#ead9be] bg-white/74 p-5 shadow-[0_20px_70px_rgba(88,56,31,0.08)] backdrop-blur-xl"
              >
                <h3 className="text-lg font-semibold text-[#23150d]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6e5848]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
