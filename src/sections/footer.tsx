import React, { FC } from "react";
import {
  Box,
  GridColumn,
  Text,
  Link,
  Stack,
  useColorModeValue,
} from "@chakra-ui/core";

import { FullWidthSectionContainer } from "components/section-container";
import SocialLinks from "components/social-links";

export const Footer: FC = () => {
  const bg1 = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const bg2 = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  return (
    <Box width="100%">
      <Box bg={bg1}>
        <FullWidthSectionContainer>
          <GridColumn gridColumn="3 / span 23" py={4}>
            <Stack
              direction={["column", "row"]}
              spacing={2}
              justify="space-between"
            >
              <SocialLinks />
              <Link href="tel:+375290000000" isExternal fontSize={12}>
                +375290000000
              </Link>
            </Stack>
          </GridColumn>
        </FullWidthSectionContainer>
      </Box>
      <Box bg={bg2}>
        <FullWidthSectionContainer>
          <GridColumn gridColumn="3 / span 23" py={4}>
            <Stack
              direction={["column", "row"]}
              spacing={2}
              justify="space-between"
            >
              <Text>ИП Пашкова Е.С.</Text>
              <Link href="/privacy">Политика конфиденциальности</Link>
            </Stack>
          </GridColumn>
        </FullWidthSectionContainer>
      </Box>
    </Box>
  );
};
export default Footer;
