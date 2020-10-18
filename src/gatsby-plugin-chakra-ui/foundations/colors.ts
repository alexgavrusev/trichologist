export type ColorHues = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",

  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)",
  },

  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)",
  },

  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },

  blue: {
    50: "#dfeeff",
    100: "#b0cbff",
    200: "#7ea8ff",
    300: "#4b85ff",
    400: "#1a62ff",
    500: "#0048e6",
    600: "#0038b4",
    700: "#002882",
    800: "#001851",
    900: "#000821",
  },

  pink: {
    50: "#ffe4f3",
    100: "#fcb7d6",
    200: "#f58ab9",
    300: "#f05c9c",
    400: "#ea2e80",
    500: "#d11567",
    600: "#a30d50",
    700: "#760739",
    800: "#490222",
    900: "#1e000d",
  },
};

export type Colors = typeof colors;

export type ColorScheme = {
  [C in keyof Colors]: Colors[C] extends ColorHues ? C : never;
}[keyof Colors];

export default colors;
