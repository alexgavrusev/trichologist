/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment */
import { mode, transparentize } from "@chakra-ui/theme-tools";

import type { Colors } from "gatsby-plugin-chakra-ui/foundations/colors";

const baseStyle = {
  lineHeight: "shorter",
  letterSpacing: "wider",
  textTransform: "uppercase",
  borderRadius: "md",
  fontWeight: "medium",
  fontSize: 7,
  px: 4,
  py: 2,
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

type P = { theme: { colors: Colors } };

const variantGradient = (props: P) => {
  const { pink, blue } = props.theme.colors;

  const colorStop = mode(500, 200)(props) as number;

  const getGradient = <T extends number, R extends Record<T, string>>(
    colorStop: T,
    color1: R,
    color2: R
  ) =>
    // @ts-ignore
    `linear-gradient(to right bottom, ${color1[colorStop]}, ${color2[colorStop]})`;

  return {
    bg: getGradient(colorStop, pink, blue),
    color: mode("white", "gray.800")(props) as string,
    _hover: {
      bg: getGradient(colorStop, pink, pink),
    },
    _active: { bg: getGradient(colorStop + 100, pink, pink) },
  };
};

const variantSolid = (props: P) => {
  const colorStop = mode(500, 200)(props) as number;

  return {
    bg: `blue.${colorStop}`,
    color: mode("white", "gray.800")(props),
    _hover: {
      bg: `blue.${colorStop + 100}`,
    },
    _active: {
      bg: `blue.${colorStop + 200}`,
    },
  };
};

const variantGhost = (props: P) => ({
  color: mode("blue.500", "blue.200")(props),
  bg: "transparent",
  _hover: {
    bg: mode("blue.50", transparentize("blue.200", 0.12)(props.theme))(props),
  },
  _active: {
    bg: mode("blue.100", transparentize("blue.200", 0.24)(props.theme))(props),
  },
});

const variantSocialIcon = (props: P) => ({
  bg: "transparent",
  color: mode("blue.500", "blue.200")(props),
  _hover: {
    color: mode("blue.600", "blue.300")(props),
  },
  _active: {
    color: mode("blue.700", "blue.400")(props),
  },
  // font size is icon width and height
  fontSize: 16,
  p: 0,
});

const variants = {
  gradient: variantGradient,
  solid: variantSolid,
  ghost: variantGhost,
  "social-icon": variantSocialIcon,
};

const defaultProps = {
  variant: "solid",
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
