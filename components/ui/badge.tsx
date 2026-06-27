import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "warm" | "dark" | "glass";

const toneStyles: Record<BadgeTone, string> = {
  warm: "border-[#ead9be] bg-white/60 text-[#8a5527] shadow-[0_20px_70px_rgba(88,56,31,0.08)]",
  dark: "border-white/12 bg-white/[0.08] text-[#ffd58c]",
  glass: "border-white/25 bg-white/12 text-white/90 shadow-[0_20px_80px_rgba(0,0,0,0.18)]",
};

type BadgeProps = {
  children: ReactNode;
  icon?: ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, icon, tone = "warm", className }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl",
        toneStyles[tone],
        className,
      )}
    >
      {icon}
      {children}
    </div>
  );
}
