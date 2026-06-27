import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  containerClassName,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section className={cn("px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-7xl", containerClassName)}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b87835]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? <p className="mt-6 text-lg leading-8 text-cocoa">{description}</p> : null}
    </div>
  );
}
