import React, { ReactElement, useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { Container } from './styles';
import { MonthlyRecurrenceCard } from '../../molecules';
import { useAccessContext } from '@/user/presenters';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';
import { Skeleton } from '@/core/ui/components/atoms';

export const RecurrenceCards = (): ReactElement => {
  const [loading, setLoading] = useState(true);

  const { currentWallet } = useAccessContext();
  const { getMonthlyRecurrences, monthlyRecurrences } = useMonthlyRecurrenceContext();
  const { enqueueSnackbar } = useSnackbar();

  const fetchMonthlyRecurrences = async () => {
    try {
      await getMonthlyRecurrences(currentWallet.id);
    } catch (err) {
      enqueueSnackbar(err?.message || 'Não foi possivel buscar as recorrências mensais', { variant: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMonthlyRecurrences();
  }, []);

  return (
    <Container>
      {loading ? (
        <>
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
          <Skeleton height={240} borderRadius={12} />
        </>
      ) : (
        monthlyRecurrences?.map(monthlyRecurrence => (
          <MonthlyRecurrenceCard monthlyRecurrenceItem={monthlyRecurrence} />
        ))
      )}
    </Container>
  );
};
