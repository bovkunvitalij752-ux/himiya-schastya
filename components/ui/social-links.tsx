import { MessageCircle, Send } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SocialLink = {
  label: string;
  href?: string;
  icon: ReactNode;
};

type SocialLinksProps = {
  vkHref?: string;
  telegramHref?: string;
  variant?: "light" | "dark";
  className?: string;
};

export function SocialLinks({ vkHref, telegramHref, variant = "light", className }: SocialLinksProps) {
  const links: SocialLink[] = [
    {
      label: "ВКонтакте",
      href: vkHref,
      icon: <MessageCircle size={18} />,
    },
    {
      label: "Telegram",
      href: telegramHref,
      icon: <Send size={18} />,
    },
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {links.map((link) => {
        const styles =
          variant === "dark"
            ? "border-white/12 bg-white/[0.07] text-white/74 hover:bg-white/12 hover:text-white"
            : "border-[#ead9be] bg-white/70 text-[#342217] hover:bg-white hover:text-[#21150f]";

        if (!link.href) {
          return (
            <span
              key={link.label}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold opacity-55 backdrop-blur-xl",
                styles,
              )}
            >
              {link.icon}
              {link.label}
            </span>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition duration-300 ease-premium hover:-translate-y-0.5",
              styles,
            )}
          >
            {link.icon}
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
