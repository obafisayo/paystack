export const colors = {
  // Primary Brand Colors
  primary: "#011b33",
  paystackBlue: "#011b33",
  paystackBlueHover: "#0ba4db",
  textBlack: "#011b33",
  paystackGreen: "#00C853",

  // Neutral Colors
  white: "#ffffff",
  black: "#000000",

  // Gray Scale
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#011b33",
  },

  // Functional Colors
  success: "#00C853",
  error: "#f44336",
  warning: "#ff9800",
  info: "#2196f3",
} as const;

export type ColorKey = keyof typeof colors;

export default colors;
