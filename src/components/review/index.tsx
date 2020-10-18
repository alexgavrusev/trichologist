import React, { FC } from "react";
import {
  Stack,
  Image,
  Box,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/core";

type Props = {
  name: string;
  age: number;
  diagnosis: string;
  content: string;
  href: string;
  imageSrc: string;
};

export const Review: FC<Props> = ({
  name,
  age,
  diagnosis,
  content,
  href,
  imageSrc,
}) => {
  const bg = useColorModeValue("white", "whiteAlpha.50");

  return (
    <Stack
      spacing={2}
      borderRadius="md"
      boxShadow={4}
      bg={bg}
      p={4}
      align="flex-start"
    >
      <Stack direction="row" spacing={4}>
        {/* TODO: maybe change to avatar */}
        <Image src={imageSrc} alt="" borderRadius="full" boxSize={12} />
        <Box>
          <Text>
            {name}, {age}
          </Text>
          <Text fontWeight="medium">{diagnosis}</Text>
        </Box>
      </Stack>

      <Text>{content}</Text>

      <Box />

      <Button as="a" target="_blank" rel="noopener noreferrer" href={href}>
        Читать отзыв
      </Button>
    </Stack>
  );
};
export default Review;
