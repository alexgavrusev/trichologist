import React, { FC } from "react";
import { Stack } from "@chakra-ui/core";

export const GridContainer: FC = (props) => (
  <Stack
    spacing={[16, 24, 24, 32]}
    pt={[8, 12, 12, 16]}
    alignItems="center"
    {...props}
  />
);

export default GridContainer;
