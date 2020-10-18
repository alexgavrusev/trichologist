import React, { FC } from "react";
import {
  Box,
  Stack,
  Spacer,
  GridColumn,
  Heading,
  Text,
  Button,
} from "@chakra-ui/core";
import { FluidObject } from "gatsby-image";

import { SectionContainer } from "components/section-container";
import { RoundedCornersImage } from "components/image";
import SocialLinks from "components/social-links";

type Props = {
  onButtonClick: () => void;
  image: FluidObject;
  imageSm: FluidObject;
};

export const Hero: FC<Props> = ({ onButtonClick, image, imageSm }) => (
  <SectionContainer>
    <GridColumn span={[12, 7, 6, 5]} pt={[8, 0, 8, 12]}>
      <Stack spacing={2} height="100%">
        <Heading size="hero">Екатерина Пашкова</Heading>
        <Box>
          <Text fontSize={[8, 8, 10]}>
            Трихологическая и дерматологическая помощь на основе доказательной
            медицины
          </Text>
        </Box>
        <Box />
        <Box>
          <Button variant="gradient" onClick={onButtonClick}>
            Записаться на прием
          </Button>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <SocialLinks />
        </Box>
      </Stack>
    </GridColumn>
    <GridColumn gridRow={[1, "auto"]} gridColumn={["span 12", "span 5 / -1"]}>
      <RoundedCornersImage display={{ sm: "none" }} fluid={image} />

      <RoundedCornersImage
        display={{ base: "none", sm: "block" }}
        fluid={imageSm}
      />
    </GridColumn>
  </SectionContainer>
);

export default Hero;
