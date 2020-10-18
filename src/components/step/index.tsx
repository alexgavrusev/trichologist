import React, { FC, ReactNode } from "react";
import {
  AccordionItem,
  AccordionButton,
  Stack,
  Icon,
  Box,
  Text,
  Spacer,
  AccordionIcon,
  AccordionPanel,
  useStyleConfig,
} from "@chakra-ui/core";
import { FaCircle } from "react-icons/fa";

type Props = {
  heading: string;
  content: ReactNode;
  startColor: string;
  endColor: string | null;
};

export const Step: FC<Props> = ({
  heading,
  content,
  startColor,
  endColor = "",
}) => {
  const { color, _hover } = useStyleConfig("Button", {
    variant: "ghost",
  }) as {
    color: string;
    _hover: Record<string, unknown>;
  };

  return (
    <AccordionItem position="relative">
      <AccordionButton>
        <Stack
          display={{ base: "none", sm: "flex" }}
          position="absolute"
          top={5}
          left={-10}
          bottom={-9}
          spacing={2}
          align="center"
        >
          <Icon as={FaCircle} boxSize={4} color={startColor} />
          {endColor !== null && (
            <Box
              width={1}
              bg={`linear-gradient(to bottom, ${startColor}, ${endColor})`}
              borderRadius="full"
              height="100%"
            />
          )}
        </Stack>

        <Text fontWeight="medium">{heading}</Text>
        <Spacer />
        <AccordionIcon
          color={color}
          _hover={_hover}
          borderRadius="full"
          p={0}
          fontSize={16}
        />
      </AccordionButton>
      <AccordionPanel>{content}</AccordionPanel>
    </AccordionItem>
  );
};
export default Step;
