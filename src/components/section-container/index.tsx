import React, { FC } from "react";
import { Container, Box, SimpleGrid, Grid, useTheme } from "@chakra-ui/core";

import type { Theme } from "gatsby-plugin-chakra-ui/theme";

export const SectionContainer: FC = ({ children }) => (
  <Container maxW="lg" px={4} ml={0} mr={0}>
    <SimpleGrid columns={12} spacingX={[4, 6]}>
      {children}
    </SimpleGrid>
  </Container>
);

export const FullWidthSectionContainer: FC = ({ children }) => {
  const theme = useTheme<Theme>();
  const { lg } = theme.breakpoints;
  const four = theme.sizes[4];
  const six = theme.sizes[6];

  const xsCol = `minmax(auto, calc((${lg} - ${four} * 12) / 12))`;
  const smCol = `minmax(auto, calc((${lg} - ${six} * 12) / 12))`;

  return (
    <Box overflow="hidden" width="100%">
      <Grid
        // HACK: padding but inside 2 colums that break out
        templateColumns={[
          `1fr ${four} repeat(11, ${xsCol} ${four}) ${xsCol} ${four} 1fr`,
          `1fr ${four} repeat(11, ${smCol} ${six} ) ${smCol} ${four} 1fr`,
        ]}
      >
        {children}
      </Grid>
    </Box>
  );
};
