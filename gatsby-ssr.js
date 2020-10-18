import React from "react";
import { ColorModeScript } from "@chakra-ui/core";
export { wrapRootElement } from "./gatsby-browser";

import theme from "./src/gatsby-plugin-chakra-ui/theme";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      key="chakra-ui-no-flash"
      initialColorMode={theme.config.initialColorMode}
    />,
  ]);
};
