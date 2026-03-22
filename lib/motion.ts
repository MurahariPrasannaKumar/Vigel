/** Shared motion tokens — consistent, premium feel */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const transition = {
  soft: { duration: 0.5, ease: EASE },
  page: { duration: 0.48, ease: EASE },
  spring: { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.85 },
  springCard: { type: "spring" as const, stiffness: 320, damping: 26, mass: 0.9 },
};

export const stagger = {
  hero: 0.07,
  section: 0.1,
};
