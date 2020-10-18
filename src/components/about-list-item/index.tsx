import React, { FC } from "react";
import { Flex, ListItem, ListIcon, useColorModeValue } from "@chakra-ui/core";
import { FaCircle } from "react-icons/fa";

export const AboutListItem: FC = ({ children }) => {
  const color = useColorModeValue("pink.500", "pink.200");

  return (
    <Flex as={ListItem}>
      <ListIcon as={FaCircle} fontSize={4} mt={2} color={color} />
      {children}
    </Flex>
  );
};

export default AboutListItem;
