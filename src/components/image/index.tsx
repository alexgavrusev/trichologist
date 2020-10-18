import React, { FC } from "react";
import { Box, BoxProps } from "@chakra-ui/core";
import GatsbyImage, { GatsbyImageFluidProps } from "gatsby-image";
import GatsbyBackgroundImage, {
  IBackgroundImageProps,
} from "gatsby-background-image";

export const BackgroundImage: FC<IBackgroundImageProps & BoxProps> = (
  props
) => <Box as={GatsbyBackgroundImage} style={{ height: "100%" }} {...props} />;

export const Image: FC<GatsbyImageFluidProps & BoxProps> = (props) => (
  <Box as={GatsbyImage} {...props} />
);

export const RoundedCornersImage: FC<GatsbyImageFluidProps & BoxProps> = (
  props
) => <Image borderRadius="md" overflow="hidden" {...props} />;
