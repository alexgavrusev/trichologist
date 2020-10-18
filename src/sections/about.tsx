import React, { FC } from "react";
import { GridColumn, Stack, Heading, Text, Box, List } from "@chakra-ui/core";
import { FluidObject } from "gatsby-image";

import { SectionContainer } from "components/section-container";
import { RoundedCornersImage } from "components/image";
import AboutListItem from "components/about-list-item";

type Props = {
  image: FluidObject;
  imageSm: FluidObject;
};

export const About: FC<Props> = ({ image, imageSm }) => (
  <SectionContainer>
    <GridColumn span={[12, 4, 5]} pb={[8, 0]}>
      <RoundedCornersImage display={{ sm: "none" }} fluid={image} />

      <RoundedCornersImage
        display={{ base: "none", sm: "block" }}
        fluid={imageSm}
      />
    </GridColumn>

    <GridColumn span={[12, 7, 6]}>
      <Stack spacing={2}>
        <Heading>Обо мне</Heading>
        <Text fontSize={[8, 8, 10]}>
          Работаю 7 лет, помогла выздороветь более 5 000 пациентам
        </Text>
        <Box />
        <List spacing={2}>
          <AboutListItem>
            Получила диплом Витебского государственного ордена Дружбы народов
            медицинского университета
          </AboutListItem>
          <AboutListItem>
            Закончила ординатуру по дерматовенерологии на базе СЗГМУ им.
            Мечникова (Санкт-Петербург)
          </AboutListItem>
          <AboutListItem>
            Прошла стажировку в госпитале Arnas CIVICO в Палермо (Италия) в
            дерматологическом отделении
          </AboutListItem>
          <AboutListItem>
            Реализовала совместный проект при стажировке в ЮНФПА
          </AboutListItem>
          <AboutListItem>
            Прошла профессиональную переподготовку по косметологии на базе
            ПСПбГМУ им. Павлова, под началом Е.А. Аравийской
          </AboutListItem>
          <AboutListItem>
            Закончила курс трихологии под началом Каюмова С.Ф., Пушкиной Н.В.
            (Санкт-Петербург)
          </AboutListItem>
        </List>
      </Stack>
    </GridColumn>
  </SectionContainer>
);

export default About;
