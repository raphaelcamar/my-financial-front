import React, { ReactElement } from 'react';
import { Container, IndicatorItem, LeftInformations, WrapperTexts } from './styles';
import { Icon, TextEllipsis, Typography } from '@/core/ui/components/atoms';

export const MonthlyRecurrenceIndicators = (): ReactElement => (
  <Container>
    <IndicatorItem>
      <LeftInformations>
        <Icon icon="multipeCoin" color="primary" shade="500" size={24} />
        <WrapperTexts>
          <TextEllipsis>
            <Typography size="normal" weight={600}>
              Recorrência com maior gasto
            </Typography>
          </TextEllipsis>
          <Typography size="xsmall" color="grey" shade={500}>
            Netflix
          </Typography>
        </WrapperTexts>
      </LeftInformations>
      <Typography color="error" shade={500} size="normal" weight={700}>
        R$ 59,99
      </Typography>
    </IndicatorItem>

    <IndicatorItem>
      <LeftInformations>
        <Icon icon="singleCoin" color="primary" shade="500" size={24} />
        <WrapperTexts>
          <TextEllipsis>
            <Typography size="normal" weight={600}>
              Recorrência com menor gasto
            </Typography>
          </TextEllipsis>
          <Typography size="xsmall" color="grey" shade={500}>
            Amazon prime
          </Typography>
        </WrapperTexts>
      </LeftInformations>
      <Typography color="error" shade={500} size="normal" weight={700}>
        R$ 19,99
      </Typography>
    </IndicatorItem>

    <IndicatorItem>
      <LeftInformations>
        <Icon icon="moneyBagFilled" color="primary" shade="500" size={24} />
        <WrapperTexts>
          <TextEllipsis>
            <Typography size="normal" weight={600}>
              Total de gastos mensais
            </Typography>
          </TextEllipsis>
          <Typography size="xsmall" color="grey" shade={500}>
            Soma de gastos do mês recorrente
          </Typography>
        </WrapperTexts>
      </LeftInformations>
      <Typography color="error" shade={500} size="normal" weight={700}>
        R$ 59,99
      </Typography>
    </IndicatorItem>

    <IndicatorItem>
      <LeftInformations>
        <Icon icon="tag" color="primary" shade="500" size={24} />
        <WrapperTexts>
          <TextEllipsis>
            <Typography size="normal" weight={600}>
              Streaming
            </Typography>
          </TextEllipsis>
          <Typography size="xsmall" color="grey" shade={500}>
            Foi a tag mais usada nos itens
          </Typography>
        </WrapperTexts>
      </LeftInformations>
      <Typography color="primary" shade={500} size="normal" weight={700}>
        51% de uso
      </Typography>
    </IndicatorItem>
  </Container>
);
