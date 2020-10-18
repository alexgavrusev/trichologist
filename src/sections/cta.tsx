import React, { forwardRef, useState } from "react";
import {
  Box,
  GridColumn,
  SimpleGrid,
  Heading,
  Text,
  Input,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/core";
import { FluidObject } from "gatsby-image";
import { useForm } from "react-hook-form";
import axios from "axios";

import { FullWidthSectionContainer } from "components/section-container";
import { Image, BackgroundImage } from "components/image";
import CtaModal from "components/cta-modal";

type Props = {
  image: FluidObject;
  imageSm: FluidObject;
  imageMd: FluidObject;
  imageLg: FluidObject;
};

type FormValues = {
  name: string;
  tel: string;
};

export const Cta = forwardRef<HTMLDivElement | null, Props>(
  ({ image, imageSm, imageMd, imageLg }, ref) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [modalContent, setModalContent] = useState({ heading: "", body: "" });

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { register, handleSubmit, formState } = useForm<FormValues>({
      mode: "onChange",
    });

    const onSubmit = handleSubmit(async (data) => {
      try {
        await axios.post(process.env.GATSBY_SUBMIT_URL as string, data);
        setModalContent({
          heading: "Заявка отправлена",
          body: "В ближайшее время я свяжусь с вами для уточнения деталей",
        });
        onOpen();
      } catch {
        setModalContent({
          heading: "Что-то пошло не так",
          body: "Попробуйте записаться на прием позже",
        });
        onOpen();
      }
    });

    const bg = useColorModeValue("white", "whiteAlpha.100");

    return (
      <>
        <CtaModal isOpen={isOpen} onClose={onClose} {...modalContent} />
        <Box bg={bg} boxShadow={8} width="100%" ref={ref}>
          <FullWidthSectionContainer>
            <GridColumn span={27} display={{ md: "none" }}>
              <Image display={{ sm: "none" }} fluid={image} />

              <Image display={{ base: "none", sm: "block" }} fluid={imageSm} />
            </GridColumn>

            <GridColumn
              as="form"
              onSubmit={onSubmit}
              gridColumn={["3 / span 23", "3 / span 23", "3 / span 11"]}
              py={4}
            >
              <SimpleGrid spacingX={[4, 6]} columns={[12, 12, 6]}>
                <GridColumn span={[12, 12, 6]}>
                  <Heading pb={2}>Запишитесь на консультацию</Heading>
                  <Text pb={4}>
                    Своевременная диагностика и лечение ускорит выздоровление и
                    увеличит вероятность полного восстановления.
                  </Text>
                </GridColumn>

                <GridColumn span={[12, 6, 3]} pb={4}>
                  <Input
                    name="name"
                    disabled={formState.isSubmitting || formState.isSubmitted}
                    ref={register({ required: true })}
                    placeholder="Имя"
                  />
                </GridColumn>

                <GridColumn span={[12, 6, 3]} pb={4}>
                  <Input
                    name="tel"
                    disabled={formState.isSubmitting || formState.isSubmitted}
                    ref={register({ required: true })}
                    placeholder="Телефон"
                  />
                </GridColumn>
              </SimpleGrid>

              <GridColumn span={[12, 12, 6]}>
                <Button
                  variant="gradient"
                  type="submit"
                  disabled={
                    !formState.isValid ||
                    formState.isSubmitting ||
                    formState.isSubmitted
                  }
                  isLoading={formState.isSubmitting}
                >
                  Записаться
                </Button>
              </GridColumn>
            </GridColumn>

            <GridColumn
              gridColumn={"17 / span 11"}
              display={{ base: "none", md: "block" }}
            >
              <BackgroundImage display={{ lg: "none" }} fluid={imageMd} />

              <BackgroundImage
                display={{ base: "none", lg: "block" }}
                fluid={imageLg}
              />
            </GridColumn>
          </FullWidthSectionContainer>
        </Box>
      </>
    );
  }
);

export default Cta;
