import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white shadow-[0_22px_70px_rgba(33,21,15,0.22)] hover:-translate-y-0.5 hover:bg-[#6f3b1f]",
  secondary:
    "border border-[#d9bf95] bg-white/60 text-coffee backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white",
  ghost:
    "border border-white/30 bg-white/12 text-white shadow-[0_22px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white hover:text-ink",
  light:
    "bg-white text-ink shadow-[0_22px_70px_rgba(255,255,255,0.28)] hover:-translate-y-0.5 hover:bg-[#ffe2a8]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-11 px-5 py-3 text-sm",
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-13 px-7 py-4 text-sm",
};

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  className?: string;
};

export type ButtonProps = SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ease-premium",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow ? <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" /> : null}
    </button>
  );
}

export type ButtonLinkProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function ButtonLink({
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 ease-premium",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow ? <ArrowRight size={17} className="transition duration-300 group-hover:translate-x-1" /> : null}
    </Link>
  );
}
