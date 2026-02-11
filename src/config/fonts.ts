// Font Configuration for Paystack

export const fonts = {
  // Graphik - Available weights: 400 (regular), 500 (medium), 600 (semibold)
  graphik: {
    family:
      '"Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
    usage: "Default font for body text and most UI elements",
  },

  // Boing - Semibold weight (600)
  boing: {
    family:
      '"Boing", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    weight: 600,
    usage: "Bold headings and emphasized text",
  },
} as const;

export type FontKey = keyof typeof fonts;

export default fonts;
