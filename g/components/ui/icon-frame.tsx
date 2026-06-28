import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconFrameTone = "warm" | "dark" | "light";

const toneStyles: Record<IconFrameTone, string> = {
  warm: "bg-[linear-gradient(135deg,#ffe7b8,#d98a45)] text-[#2e1a10] shadow-glow",
  dark: "bg-ink text-amber shadow-[0_18px_50px_rgba(33,21,15,0.20)]",
  light: "bg-white text-ink shadow-[0_18px_50px_rgba(255,255,255,0.22)]",
};

export function IconFrame({
  children,
  tone = "warm",
  className,
}: {
  children: ReactNode;
  tone?: IconFrameTone;
  className?: string;
}) {
  return (
    <span className={cn("flex size-13 shrink-0 items-center justify-center rounded-2xl", toneStyles[tone], className)}>
      {children}
    </span>
  );
}
