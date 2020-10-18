/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { mode } from "@chakra-ui/theme-tools";

const baseStyle = (props: Record<string, unknown>) => ({
  transition: `all 0.15s ease-out`,
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: mode("blue.500", "blue.200")(props),
  _hover: {
    color: mode("blue.600", "blue.300")(props),
    textDecoration: "underline",
  },
  _focus: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    textDecoration: "none",
  },
});

export default {
  baseStyle,
};
