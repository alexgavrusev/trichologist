import React from "react";
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
  PortalManager,
} from "@chakra-ui/core";

import "fontsource-roboto/400-normal.css";
import "fontsource-roboto/500-normal.css";

import theme from "./src/gatsby-plugin-chakra-ui/theme";

export const wrapRootElement = (
  { element },
  { isResettingCSS = true, isUsingColorMode = true, portalZIndex = 40 }
) => {
  const content = (
    <>
      {isResettingCSS && <CSSReset />}
      <GlobalStyle />
      <PortalManager zIndex={portalZIndex}>{element}</PortalManager>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
      {isUsingColorMode ? (
        <ColorModeProvider options={theme.config}>{content}</ColorModeProvider>
      ) : (
        content
      )}
    </ThemeProvider>
  );
};
