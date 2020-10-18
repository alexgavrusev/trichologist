/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/ban-ts-comment */
import React, { FC } from "react";
import {
  GridColumn,
  Heading,
  Accordion,
  Stack,
  Box,
  Text,
  OrderedList,
  ListItem,
  List,
  useTheme,
  useColorModeValue,
} from "@chakra-ui/core";
// @ts-ignore no types available
import gradstop from "gradstop";
import type { Theme } from "gatsby-plugin-chakra-ui/theme";

import { SectionContainer } from "components/section-container";
import Step from "components/step";
import AboutListItem from "components/about-list-item";

const steps = [
  {
    heading: "Сбор анамнеза",
    content:
      "Узнаются общие данные пациента, детализируются жалобы. Описывается динамика болезни: сопутствующие заболевания, когда они начались, появились первые симптомы, с чем связывает ухудшение состояния, через какое время после начала болезни пациент обратился за помощью.",
  },
  {
    heading: "Объективный осмотр",
    content:
      "Для определения характера заболевания осматриваются кожный покров тела и волосистой части головы. Проводится Pull-тест — легкое натяжение отдельных прядей волос для оценки степени и интенсивности выпадения волос. Для исключения грибкового поражения применяется осмотр под лампой Вуда.",
  },
  {
    heading: "Трихоскопия и дерматоскопия",
    content:
      "Для определения характера заболевания осматриваются кожный покров тела и волосистой части головы. Проводится Pull-тест — легкое натяжение отдельных прядей волос для оценки степени и интенсивности выпадения волос. Для исключения грибкового поражения применяется осмотр под лампой Вуда.",
  },
  {
    heading: "Фототрихограмма",
    content: (
      <Stack spacing={2}>
        <Text>
          Двухэтапный метод диагностики, применяющийся при постановке спорного
          диагноза выпадения волос и для контроля эффективности лечения:
        </Text>
        <Box>
          <OrderedList>
            <ListItem>
              Cбриваются волосы в двух зонах небольшого диаметра{" "}
            </ListItem>
            <ListItem>
              Через 48 часов с помощью программы оценивается состояние и рост
              волос на выбранных участках
            </ListItem>
          </OrderedList>
        </Box>
      </Stack>
    ),
  },
  {
    heading: "Биопсия",
    content:
      "Забор кожи пораженного участка с последующей оценкой клеток кожи для исключения системных заболеваний.",
  },
  {
    heading: "Назначение лечения",
    content: (
      <Stack spacing={2}>
        <Text>
          Назначается комплексное наружное лечение. Возможности лечения в рамках
          медицинского центра включают:
        </Text>
        <List spacing={2}>
          <AboutListItem>
            PRP — ускорение восстановления и стимулирование питания волос с
            помощью подкожного введения собственной обогащенной тромбоцитами
            плазмы (швейцарские пробирки Regenlab).
          </AboutListItem>
          <AboutListItem>
            IPL-терапию (M22) — устранение возрастных дефектов кожи
            избирательным воздействием импульсов света видимой и ближней
            инфракрасной части спектра.
          </AboutListItem>
          <AboutListItem>
            Мезотерапию — улучшение кровообращения кожи волосистой части головы
            с помощью инъекций комплекса минералов и аминокислот.
          </AboutListItem>
        </List>
      </Stack>
    ),
  },
];

export const Process: FC = () => {
  const theme = useTheme<Theme>();
  const hue = useColorModeValue(500, 200);

  const { pink, blue } = theme.colors;

  const colors = gradstop({
    stops: steps.length,
    inputFormat: "hex",
    // @ts-ignore
    colorArray: [blue[hue], pink[hue]],
  });

  return (
    <SectionContainer>
      <GridColumn span={12} pb={8}>
        <Heading textAlign={["left", "left", "center"]}>
          Как проходит консультация
        </Heading>
      </GridColumn>
      <GridColumn gridColumn={["span 12", "span 12", "3 / span 8"]}>
        <Accordion defaultIndex={[5]} allowMultiple allowToggle ml={[0, 10]}>
          <Stack spacing={6}>
            {steps.map((step, i) => (
              <Step
                {...step}
                key={i}
                startColor={colors[i]}
                endColor={colors[i + 1] ?? null}
              />
            ))}
          </Stack>
        </Accordion>
      </GridColumn>
    </SectionContainer>
  );
};
export default Process;
