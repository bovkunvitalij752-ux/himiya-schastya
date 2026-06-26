type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <section className="py-12 md:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-ink md:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">{description}</p>
    </section>
  );
}
