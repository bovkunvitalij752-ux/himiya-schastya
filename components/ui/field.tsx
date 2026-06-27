import type { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("grid gap-2", className)}>
      <span className="text-sm font-semibold text-ink">{label}</span>
      {children}
      {hint ? <span className="text-sm leading-6 text-cocoa">{hint}</span> : null}
    </label>
  );
}

export function FieldLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-semibold text-ink", className)} {...props} />;
}

const controlStyles =
  "min-h-12 w-full rounded-2xl border border-[#ead9be] bg-white/72 px-4 py-3 text-sm text-ink shadow-[0_14px_44px_rgba(88,56,31,0.06)] outline-none backdrop-blur-xl transition duration-300 placeholder:text-[#a28b79] focus:border-[#d98a45] focus:bg-white focus:ring-4 focus:ring-[#d98a45]/15";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlStyles, className)} {...props} />;
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(controlStyles, "min-h-32 resize-y", className)} {...props} />;
}
