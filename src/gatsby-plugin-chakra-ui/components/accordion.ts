import { mode } from "@chakra-ui/theme-tools";

const parts = ["container", "button", "panel"];

const baseStyleContainer = (props: Record<string, unknown>) => ({
  borderRadius: "md",
  bg: mode("white", "whiteAlpha.50")(props) as string,
  boxShadow: 4,
});

const baseStyleButton = {
  fontSize: "1rem",
  textAlign: "left",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  px: 4,
  py: 3,
};

const baseStylePanel = {
  px: 4,
  pb: 4,
};

const baseStyle = (props: Record<string, unknown>) => ({
  container: baseStyleContainer(props),
  button: baseStyleButton,
  panel: baseStylePanel,
});

export default {
  parts,
  baseStyle,
};
