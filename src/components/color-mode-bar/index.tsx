import React, { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  useColorMode,
  useColorModeValue,
  Flex,
  IconButton,
} from "@chakra-ui/core";

export const ColorModeToggleBar: FC = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <Flex justify="flex-end" mb={4}>
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${nextMode} mode`}
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </Flex>
  );
};

export default ColorModeToggleBar;
