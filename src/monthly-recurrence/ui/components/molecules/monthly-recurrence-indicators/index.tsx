import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container, IndicatorItem, LeftInformations, WrapperTexts } from './styles';
import { ConditionalSlot, Icon, Skeleton, TextEllipsis, Typography } from '@/core/ui/components/atoms';
import { MonthlyRecurrenceRepositoryData, ReturnMonthlyRecurrenceType } from '@/monthly-recurrence/infra';
import { useAccessContext } from '@/user/presenters';
import { formatCurrencyDefault } from '@/core/utils';

export const MonthlyRecurrenceIndicators = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [indicators, setIndicators] = useState<ReturnMonthlyRecurrenceType>(null);
  const { enqueueSnackbar } = useSnackbar();

  const { currentWallet } = useAccessContext();

  const fetchData = async () => {
    try {
      const repository = new MonthlyRecurrenceRepositoryData();
      const result = await repository.getIndicators(currentWallet.id);

      setIndicators(result);
    } catch (err) {
      enqueueSnackbar('Não foi possível buscar os indicadores', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ConditionalSlot renderIf={!loading} fallback={<Skeleton height={74} width="100%" borderRadius={8} />}>
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
                {indicators?.mostSpent?.title}
              </Typography>
            </WrapperTexts>
          </LeftInformations>
          <Typography color="error" shade={500} size="normal" weight={700}>
            {formatCurrencyDefault(indicators?.mostSpent?.value)}
          </Typography>
        </IndicatorItem>
      </ConditionalSlot>

      <ConditionalSlot renderIf={!loading} fallback={<Skeleton height={74} width="100%" borderRadius={8} />}>
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
                {indicators?.lessSpent?.title}
              </Typography>
            </WrapperTexts>
          </LeftInformations>
          <Typography color="error" shade={500} size="normal" weight={700}>
            {formatCurrencyDefault(indicators?.lessSpent?.value)}
          </Typography>
        </IndicatorItem>
      </ConditionalSlot>

      <ConditionalSlot renderIf={!loading} fallback={<Skeleton height={74} width="100%" borderRadius={8} />}>
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
            {formatCurrencyDefault(indicators?.totalSpent)}
          </Typography>
        </IndicatorItem>
      </ConditionalSlot>

      <ConditionalSlot renderIf={!loading} fallback={<Skeleton height={74} width="100%" borderRadius={8} />}>
        <IndicatorItem>
          <LeftInformations>
            <Icon icon="tag" color="primary" shade="500" size={24} />
            <WrapperTexts>
              <TextEllipsis>
                <Typography size="normal" weight={600}>
                  {indicators?.mostUsedTag?.title}
                </Typography>
              </TextEllipsis>
              <Typography size="xsmall" color="grey" shade={500}>
                Foi a tag mais usada nos itens
              </Typography>
            </WrapperTexts>
          </LeftInformations>
          <Typography color="primary" shade={500} size="normal" weight={700}>
            {indicators?.mostUsedTag?.percentage}% de uso
          </Typography>
        </IndicatorItem>
      </ConditionalSlot>
    </Container>
  );
};
