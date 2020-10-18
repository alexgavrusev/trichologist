import React, { FC } from "react";
import {
  GridColumn,
  Heading,
  Stack,
  Button,
  useDisclosure,
  SlideFade,
  Box,
} from "@chakra-ui/core";

import { SectionContainer } from "components/section-container";
import Review from "components/review";

import placeholder from "images/placeholder.png";

const reviews = [
  {
    name: "Мария",
    age: 21,
    diagnosis: "Очаговая аллопеция",
    content:
      "Еще с начальной школы была проблема очагового выпадения волос. Дерматологи в моем городе говорили что это от нервов. После курса лечения все изменилось — волосы отрасли невероятно густые, длина уже около 10 см. Мне больше не нужно выбирать головные уборы и парики, я могу выходить на улицу без страха! Это изменило мою жизнь до неузнаваемости, я чувствую себя полноценной девушкой, мне приятно смотреть в зеркало.",
    href: "https://instagram.com",
    imageSrc: placeholder,
  },
  {
    name: "Роман",
    age: 27,
    diagnosis: "Очаговая аллопеция",
    content:
      "Хочу выразить благодарность доктору Пашковой Екатерине Сергеевне. Большое спасибо за профессионализм и чуткое отношение к пациенту. Екатерина Сергеевна очень компетентна, внимательна и доброжелательна. Спасибо за оказание квалифицированной медицинской помощи и за хорошие результаты в лечении!ы",
    href: "https://instagram.com",
    imageSrc: placeholder,
  },
  {
    name: "Мария",
    age: 21,
    diagnosis: "Очаговая аллопеция",
    content:
      "Еще с начальной школы была проблема очагового выпадения волос. Дерматологи в моем городе говорили что это от нервов. После курса лечения все изменилось — волосы отрасли невероятно густые, длина уже около 10 см.",
    href: "https://instagram.com",
    imageSrc: placeholder,
  },
  {
    name: "Мария",
    age: 21,
    diagnosis: "Очаговая аллопеция",
    content:
      "Еще с начальной школы была проблема очагового выпадения волос. Дерматологи в моем городе говорили что это от нервов. После курса лечения все изменилось — волосы отрасли невероятно густые, длина уже около 10 см. Мне больше не нужно выбирать головные уборы и парики, я могу выходить на улицу без страха! Это изменило мою жизнь до неузнаваемости, я чувствую себя полноценной девушкой, мне приятно смотреть в зеркало.",
    href: "https://instagram.com",
    imageSrc: placeholder,
  },
];

const initialShowOnMobile = 2;

export const Reviews: FC = () => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <SectionContainer>
      <GridColumn span={12} pb={8}>
        <Heading>Отзывы пациентов</Heading>
      </GridColumn>

      <GridColumn span={12} display={{ md: "none" }}>
        <Stack spacing={6}>
          {reviews.slice(0, initialShowOnMobile).map((data, i) => (
            <Review key={i} {...data} />
          ))}

          {reviews.slice(initialShowOnMobile).map((data, i) => (
            <SlideFade key={i} in={isOpen} initialOffset="2rem" timeout={300}>
              {(style) => (
                <Box style={style}>
                  <Review {...data} />
                </Box>
              )}
            </SlideFade>
          ))}

          {isOpen ? null : (
            <Button variant="ghost" onClick={onOpen}>
              Показать еще
            </Button>
          )}
        </Stack>
      </GridColumn>

      <GridColumn span={6} display={{ base: "none", md: "block" }}>
        <Stack spacing={6}>
          {reviews
            .filter((_, i) => i % 2 === 0)
            .map((data, i) => (
              <Review key={i} {...data} />
            ))}
        </Stack>
      </GridColumn>

      <GridColumn span={6} display={{ base: "none", md: "block" }}>
        <Stack spacing={6}>
          {reviews
            .filter((_, i) => i % 2 !== 0)
            .map((data, i) => (
              <Review key={i} {...data} />
            ))}
        </Stack>
      </GridColumn>
    </SectionContainer>
  );
};
export default Reviews;
