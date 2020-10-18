const typography = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },

  fontWeights: {
    normal: 400,
    medium: 500,
  },

  fonts: {
    body: "'Roboto', sans-serif",
  },

  fontSizes: {
    "1": "0.125rem",
    "2": "0.25rem",
    "3": "0.375rem",
    "4": "0.5rem",
    "5": "0.625rem",
    "6": "0.75rem",
    "7": "0.875rem",
    "8": "1rem",
    "10": "1.25rem",
    "12": "1.5rem",
    "14": "1.75rem",
    "16": "2rem",
    "18": "2.25rem",
  },
};

export type Typography = typeof typography;

export default typography;
