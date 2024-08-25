import React, { ReactElement, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Container, EmptyMonthlyRecurrences } from './styles';
import { MonthlyRecurrenceCard } from '../../molecules';
import { useAccessContext } from '@/user/presenters';
import { useMonthlyRecurrenceContext } from '@/monthly-recurrence/presenters/contexts/monthly-recurrence-context';
import { Skeleton } from '@/core/ui/components/atoms';
import { EmptyState } from '@/core/ui/components/molecules';

export const RecurrenceCards = (): ReactElement => {
  const { currentWallet } = useAccessContext();
  const { getMonthlyRecurrences, monthlyRecurrences, loading, setLoading } = useMonthlyRecurrenceContext();
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

  const renderList = () =>
    monthlyRecurrences?.map(monthlyRecurrence => (
      <MonthlyRecurrenceCard key={monthlyRecurrence.id} monthlyRecurrenceItem={monthlyRecurrence} />
    ));

  return (
    <>
      {monthlyRecurrences?.length === 0 && !loading ? (
        <EmptyMonthlyRecurrences>
          <EmptyState message="Não encontramos nenhuma recorrência mensal." />
        </EmptyMonthlyRecurrences>
      ) : (
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
            renderList()
          )}
        </Container>
      )}
    </>
  );
};
