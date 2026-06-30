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
          "relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border shadow-[0_18px_50px_rgba(33,21,15,0.16)]",
          inverted ? "border-white/14 bg-white" : "border-[#ead9be] bg-[#fbf6ec]",
        )}
      >
        <Image
          src="/images/brand-logo-mark.jpg"
          alt="Логотип Химия счастья"
          width={72}
          height={72}
          className="size-full object-cover"
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
    return <div className={cn("flex items-center gap-3", className)}>{content}</div>;
  }

  return (
    <Link href={href} onClick={onClick} className={cn("flex items-center gap-3", className)}>
      {content}
    </Link>
  );
}
