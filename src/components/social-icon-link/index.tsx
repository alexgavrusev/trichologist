import React, { FC, ReactElement } from "react";
import { IconButton, Link } from "@chakra-ui/core";

type Props = {
  href: string;
  icon: ReactElement;
  label: string;
};

export const SocialIconLink: FC<Props> = ({ href, icon, label }) => (
  <IconButton
    as={Link}
    isExternal
    href={href}
    variant="social-icon"
    icon={icon}
    aria-label={label}
  />
);

export default SocialIconLink;
