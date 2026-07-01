import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  inverted?: boolean;
  showText?: boolean;
  className?: string;
  onClick?: () => void;
};

export function BrandLogo({
  href = "/",
  inverted = false,
  showText = true,
  className,
  onClick,
}: BrandLogoProps) {
  const content = (
    <>
      <span
        className={cn(
          "relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-[1.65rem] border shadow-[0_22px_70px_rgba(184,120,53,0.22),inset_0_0_22px_rgba(255,255,255,0.52)] sm:size-24",
          inverted
            ? "border-white/18 bg-white"
            : "border-[#e7c27b] bg-[radial-gradient(circle_at_50%_35%,#fff8df_0%,#f5dfa8_48%,#d7a94e_100%)]",
        )}
      >
        <span className="pointer-events-none absolute inset-1 rounded-[1.35rem] border border-white/42" />
        <Image
          src="/images/brand-logo-mark.jpg"
          alt="Логотип Химия счастья"
          width={72}
          height={72}
          className="relative size-[88%] rounded-[1.15rem] object-cover brightness-[1.04] contrast-[1.04] sepia-[0.34] saturate-[1.45]"
          priority
        />
      </span>
      {showText ? (
        <span className="grid leading-tight">
          <span
            className={cn(
              "text-base font-semibold tracking-[-0.02em]",
              inverted ? "text-white" : "text-[#23150d]",
            )}
          >
            Химия счастья
          </span>
          <span className={cn("text-xs font-medium", inverted ? "text-white/58" : "text-[#8a6a55]")}>
            AI для отношений
          </span>
        </span>
      ) : null}
    </>
  );

  if (!href) {
    return <div className={cn("flex items-center gap-4", className)}>{content}</div>;
  }

  return (
    <Link href={href} onClick={onClick} className={cn("flex items-center gap-4", className)}>
      {content}
    </Link>
  );
}
