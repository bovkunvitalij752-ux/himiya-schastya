import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardVariant = "surface" | "glass" | "dark" | "outline";

const variantStyles: Record<CardVariant, string> = {
  surface: "border-[#ead9be] bg-white shadow-soft",
  glass: "border-white/70 bg-white/70 shadow-soft backdrop-blur-xl",
  dark: "border-white/10 bg-white/[0.07] text-white backdrop-blur-xl",
  outline: "border-[#ead9be] bg-transparent",
};

type CardProps = {
  children: ReactNode;
  variant?: CardVariant;
  interactive?: boolean;
  className?: string;
};

export function Card({ children, variant = "surface", interactive = false, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-card border p-6 transition duration-300 ease-premium",
        variantStyles[variant],
        interactive && "hover:-translate-y-1 hover:bg-white",
        className,
      )}
    >
      {children}
    </article>
  );
}

export function FeatureCard({
  icon,
  title,
  children,
  className,
}: {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card variant="glass" interactive className={className}>
      {icon ? (
        <div className="mb-7 flex size-13 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffe7b8,#d98a45)] text-[#2e1a10] shadow-glow">
          {icon}
        </div>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">{title}</h3>
      <div className="mt-4 leading-7 text-cocoa">{children}</div>
    </Card>
  );
}
