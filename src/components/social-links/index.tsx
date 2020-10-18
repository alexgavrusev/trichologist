import React, { FC } from "react";
import { Stack } from "@chakra-ui/core";
import { SiInstagram, SiVk, SiFacebook } from "react-icons/si";

import SocialIconLink from "components/social-icon-link";

export const SocialLinks: FC = () => (
  <Stack direction="row" spacing={6}>
    <SocialIconLink
      icon={<SiInstagram />}
      href="https://instagram.com/"
      label="Instagram"
    />
    <SocialIconLink icon={<SiVk />} href="https://vk.com/" label="VK" />
    <SocialIconLink
      icon={<SiFacebook />}
      href="https://facebook.com/"
      label="Facebook"
    />
  </Stack>
);

export default SocialLinks;
