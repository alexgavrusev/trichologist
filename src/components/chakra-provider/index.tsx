import React, { FC } from "react";
import { ChakraProvider as Provider } from "@chakra-ui/core";

import theme from "gatsby-plugin-chakra-ui/theme";

const ChakraProvider: FC = (props) => <Provider theme={theme} {...props} />;

export default ChakraProvider;
