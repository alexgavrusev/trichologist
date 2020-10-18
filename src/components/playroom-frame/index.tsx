import React, { FC } from "react";

import ChakraProvider from "components/chakra-provider";

const PlayroomFrame: FC = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default PlayroomFrame;
