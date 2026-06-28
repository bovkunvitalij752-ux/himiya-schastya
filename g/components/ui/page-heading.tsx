type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <section className="py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-caramel">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-ink md:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-cocoa">{description}</p>
    </section>
  );
}
