export const designSystem = {
  colors: {
    ink: "#21150f",
    coffee: "#342217",
    cocoa: "#6e5848",
    cream: "#fbf6ec",
    porcelain: "#fffaf2",
    parchment: "#f4efe8",
    caramel: "#d98a45",
    amber: "#ffd58c",
    linen: "#ead9be",
  },
  radii: {
    card: "2rem",
    panel: "2.5rem",
    pill: "999px",
  },
  shadows: {
    soft: "0 24px 90px rgba(88, 56, 31, 0.10)",
    premium: "0 34px 120px rgba(33, 21, 15, 0.18)",
    glow: "0 18px 50px rgba(217, 138, 69, 0.25)",
  },
  motion: {
    premiumEase: "cubic-bezier(0.22, 1, 0.36, 1)",
    quick: "300ms",
    page: "900ms",
  },
} as const;

export const designSystemUsage = {
  buttons: "Button и ButtonLink: primary, secondary, ghost, light.",
  cards: "Card и FeatureCard: surface, glass, dark, outline.",
  forms: "Field, Input и Textarea для единого состояния фокуса и мягкой стеклянной поверхности.",
  layout: "Section и SectionHeader для одинаковых отступов, ширины контейнера и типографики.",
  icons: "IconFrame для lucide-иконок в едином теплом стиле.",
} as const;
